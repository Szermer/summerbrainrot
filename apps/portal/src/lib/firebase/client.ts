import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

// Get Firebase configuration from environment variables or Firebase Web App Hosting
function getFirebaseConfig() {
  // Try Firebase Web App Hosting environment first
  if (typeof window !== 'undefined' && (window as any).FIREBASE_WEBAPP_CONFIG) {
    return JSON.parse((window as any).FIREBASE_WEBAPP_CONFIG);
  }
  
  // Try environment variable for Firebase Web App Hosting
  if (process.env.FIREBASE_WEBAPP_CONFIG) {
    return JSON.parse(process.env.FIREBASE_WEBAPP_CONFIG);
  }
  
  // Fallback to standard environment variables
  return {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };
}

const firebaseConfig = getFirebaseConfig();

// Validate that we have the required config
if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  console.warn('Firebase configuration is incomplete. Some features may not work.');
}

// Initialize Firebase only if we have a valid config
let app: any = null;
try {
  app = !getApps().length && firebaseConfig.apiKey ? initializeApp(firebaseConfig) : getApp();
} catch (error) {
  console.warn('Failed to initialize Firebase:', error);
}

// Initialize services only if app is available
export const auth = app ? getAuth(app) : null;
export const db = app ? getFirestore(app) : null;
export const storage = app ? getStorage(app) : null;

// Initialize Analytics (client-side only)
export const analytics = typeof window !== 'undefined' && app ? getAnalytics(app) : null;

// Connect to emulators in development (disabled for now - enable if using Firebase emulators)
// if (process.env.NODE_ENV === 'development' && process.env.USE_FIREBASE_EMULATOR === 'true') {
//   if (!auth.emulatorConfig) {
//     connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
//   }
//   if (!(db as unknown as { _settings?: { host?: string } })._settings?.host?.includes('localhost:8080')) {
//     connectFirestoreEmulator(db, 'localhost', 8080);
//   }
//   try {
//     connectStorageEmulator(storage, 'localhost', 9199);
//   } catch (_error) {
//     // Emulator already connected
//   }
// }

export default app;