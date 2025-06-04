import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  UserCredential,
  updateProfile,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from './client';

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  role: 'participant' | 'mentor' | 'admin';
  createdAt: unknown;
  updatedAt: unknown;
  onboardingComplete: boolean;
  settings?: {
    notifications: boolean;
    theme: 'light' | 'dark' | 'system';
  };
}

const PROVIDERS = {
  google: new GoogleAuthProvider(),
  github: new GithubAuthProvider(),
  facebook: new FacebookAuthProvider(),
};

// Set persistence to local by default (only if auth is available)
if (auth) {
  setPersistence(auth, browserLocalPersistence);
}

// Helper to create/update user profile in Firestore
async function createUserProfile(user: User, additionalData?: Partial<UserProfile>): Promise<void> {
  if (!db) {
    console.warn('Firestore not available, skipping user profile creation');
    return;
  }
  
  const userRef = doc(db, 'users', user.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    const userData: UserProfile = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || additionalData?.displayName || null,
      photoURL: user.photoURL,
      role: 'participant', // Default role
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      onboardingComplete: false,
      settings: {
        notifications: true,
        theme: 'system',
      },
      ...additionalData,
    };

    await setDoc(userRef, userData);
  } else {
    // Update existing user
    await setDoc(userRef, {
      ...userSnap.data(),
      updatedAt: serverTimestamp(),
      ...additionalData,
    }, { merge: true });
  }
}

// Sign up with email and password
export async function signUp(
  email: string,
  password: string,
  displayName?: string
): Promise<UserCredential> {
  if (!auth) {
    throw new Error('Firebase Auth not available');
  }
  
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    
    // Update display name if provided
    if (displayName && result.user) {
      await updateProfile(result.user, { displayName });
    }

    // Create session cookie (disabled for now - requires Firebase Admin SDK setup)
    // await _createSessionCookie(result.user);

    // Create user profile in Firestore
    await createUserProfile(result.user, { displayName });

    return result;
  } catch (error) {
    console.error('Sign up error:', error);
    throw error;
  }
}

// Sign in with email and password
export async function signIn(
  email: string,
  password: string,
  rememberMe: boolean = true
): Promise<UserCredential> {
  if (!auth) {
    throw new Error('Firebase Auth not available');
  }
  
  try {
    // Set persistence based on remember me
    await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);
    
    const result = await signInWithEmailAndPassword(auth, email, password);
    
    // Create session cookie (disabled for now - requires Firebase Admin SDK setup)
    // await _createSessionCookie(result.user);
    
    // Update user profile last login
    await createUserProfile(result.user);

    return result;
  } catch (error) {
    console.error('Sign in error:', error);
    throw error;
  }
}

// Sign in with social provider
export async function signInWithProvider(
  providerName: 'google' | 'github' | 'facebook'
): Promise<UserCredential> {
  try {
    const provider = PROVIDERS[providerName];
    const result = await signInWithPopup(auth, provider);
    
    // Create session cookie (disabled for now - requires Firebase Admin SDK setup)
    // await _createSessionCookie(result.user);
    
    // Create/update user profile
    await createUserProfile(result.user);

    return result;
  } catch (error) {
    console.error(`Sign in with ${providerName} error:`, error);
    throw error;
  }
}

// Create session cookie
async function _createSessionCookie(user: User): Promise<void> {
  try {
    const idToken = await user.getIdToken();
    
    const response = await fetch('/api/auth/session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idToken }),
    });

    if (!response.ok) {
      throw new Error('Failed to create session');
    }
  } catch (error) {
    console.error('Session creation error:', error);
    throw error;
  }
}

// Clear session cookie
async function clearSessionCookie(): Promise<void> {
  try {
    await fetch('/api/auth/session', {
      method: 'DELETE',
    });
  } catch (error) {
    console.error('Session clearing error:', error);
    // Don't throw error here as it might prevent logout
  }
}

// Sign out
export async function logout(): Promise<void> {
  try {
    await signOut(auth);
    await clearSessionCookie();
  } catch (error) {
    console.error('Sign out error:', error);
    throw error;
  }
}

// Reset password
export async function resetPassword(email: string): Promise<void> {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.error('Password reset error:', error);
    throw error;
  }
}

// Get user profile from Firestore
export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  if (!db) {
    console.warn('Firestore not available, cannot get user profile');
    return null;
  }
  
  try {
    const userDoc = await getDoc(doc(db, 'users', uid));
    if (userDoc.exists()) {
      return userDoc.data() as UserProfile;
    }
    return null;
  } catch (error) {
    console.error('Get user profile error:', error);
    return null;
  }
}

// Auth state observer
export function onAuthStateChange(callback: (user: User | null) => void) {
  if (!auth) {
    console.warn('Firebase Auth not available, cannot observe auth state');
    return () => {}; // Return a no-op unsubscribe function
  }
  return onAuthStateChanged(auth, callback);
}

// Get current user
export function getCurrentUser(): User | null {
  return auth?.currentUser || null;
}

// Check if user is authenticated
export function isAuthenticated(): boolean {
  return !!(auth?.currentUser);
}

// Get user role
export async function getUserRole(uid: string): Promise<string | null> {
  const profile = await getUserProfile(uid);
  return profile?.role || null;
}

// Error message helpers
export function getAuthErrorMessage(errorCode: string): string {
  switch (errorCode) {
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
      return 'Invalid email or password';
    case 'auth/user-not-found':
      return 'No account found with this email';
    case 'auth/email-already-in-use':
      return 'An account already exists with this email';
    case 'auth/weak-password':
      return 'Password should be at least 6 characters';
    case 'auth/invalid-email':
      return 'Invalid email address';
    case 'auth/operation-not-allowed':
      return 'This sign-in method is not enabled';
    case 'auth/user-disabled':
      return 'This account has been disabled';
    case 'auth/requires-recent-login':
      return 'Please sign in again to perform this action';
    case 'auth/network-request-failed':
      return 'Network error. Please check your connection';
    case 'auth/too-many-requests':
      return 'Too many failed attempts. Please try again later';
    case 'auth/popup-closed-by-user':
      return 'Sign-in popup was closed';
    default:
      return 'An error occurred. Please try again';
  }
}