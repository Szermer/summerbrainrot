# Social Authentication Setup Guide

This guide walks through enabling social authentication providers (Google, GitHub, Facebook) for the Summer Brain Rot portal application.

## Prerequisites

- Access to the Firebase Console for your project
- The portal application code (already has social auth implemented)
- For GitHub/Facebook: Developer accounts to create OAuth applications

## Overview

The portal application already has full social authentication support implemented. You just need to enable and configure the providers in Firebase Console.

## Step 1: Access Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your `summerbrainrot` project
3. Navigate to **Authentication** in the left sidebar
4. Click on the **Sign-in method** tab

## Step 2: Enable Google Authentication

Google authentication is the easiest to set up:

1. Find **Google** in the provider list
2. Click on it to open configuration
3. Toggle **Enable** to on
4. Select your **Project support email** from the dropdown
5. Click **Save**

That's it! Google authentication is now enabled.

## Step 3: Enable GitHub Authentication

GitHub requires creating an OAuth application:

### Create GitHub OAuth App

1. Go to [GitHub Settings](https://github.com/settings/profile)
2. Navigate to **Developer settings** → **OAuth Apps**
3. Click **New OAuth App**
4. Fill in the application details:
   - **Application name**: Summer Brain Rot
   - **Homepage URL**: https://summerbrainrot.camp
   - **Authorization callback URL**: 
     - For production: `https://summerbrainrot.firebaseapp.com/__/auth/handler`
     - Copy this from Firebase Console (shown when you enable GitHub)
5. Click **Register application**
6. Note your **Client ID**
7. Click **Generate a new client secret** and save it securely

### Configure in Firebase

1. Back in Firebase Console, find **GitHub** in the provider list
2. Click to open configuration
3. Toggle **Enable** to on
4. Enter your GitHub OAuth app's:
   - **Client ID**
   - **Client Secret**
5. Copy the **authorization callback URL** shown
6. Go back to your GitHub OAuth app settings and update the callback URL if needed
7. Click **Save** in Firebase

## Step 4: Enable Facebook Authentication

Facebook requires creating a Facebook App:

### Create Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com)
2. Click **My Apps** → **Create App**
3. Choose **Consumer** as the app type
4. Fill in app details:
   - **App name**: Summer Brain Rot
   - **App contact email**: Your email
5. Click **Create App**
6. In the app dashboard, add **Facebook Login** product
7. Go to **Facebook Login** → **Settings**
8. Add OAuth redirect URI:
   - `https://summerbrainrot.firebaseapp.com/__/auth/handler`
   - Copy exact URL from Firebase Console
9. Save changes
10. Go to **Settings** → **Basic** to find:
    - **App ID**
    - **App Secret** (click Show)

### Configure in Firebase

1. In Firebase Console, find **Facebook** in the provider list
2. Click to open configuration
3. Toggle **Enable** to on
4. Enter your Facebook app's:
   - **App ID**
   - **App Secret**
5. Copy the **OAuth redirect URI** shown
6. Ensure this matches what you added in Facebook app settings
7. Click **Save**

### Make Facebook App Live

1. In Facebook Developer dashboard
2. Toggle your app from **Development** to **Live** mode
3. You may need to complete app review for public access

## Step 5: Configure Authorized Domains

In Firebase Console:

1. Go to **Authentication** → **Settings** tab
2. Under **Authorized domains**, add:
   - `localhost` (for development)
   - `summerbrainrot.camp` (your production domain)
   - `summerbrainrot--summerbrainrot.us-central1.hosted.app` (Firebase hosting)
   - Any other domains you're using

## Step 6: Test Social Authentication

### Local Development Testing

1. Start the portal development server:
   ```bash
   cd apps/portal
   pnpm run dev
   ```

2. Navigate to http://localhost:3001/login

3. Test each social login button:
   - Click the Google/GitHub/Facebook button
   - Complete the OAuth flow
   - Verify successful login and redirect to dashboard

### Production Testing

1. Deploy the latest changes (if any)
2. Visit your production portal URL
3. Test each social login method
4. Verify user profiles are created in Firestore

## Troubleshooting

### Common Issues

1. **"Redirect URI mismatch" error**
   - Ensure the callback URL in your OAuth app matches exactly what Firebase provides
   - Check for trailing slashes or protocol differences (http vs https)

2. **"App not set up" error (Facebook)**
   - Make sure your Facebook app is in Live mode
   - Add your email to test users if still in development mode

3. **"Invalid OAuth client" error (Google)**
   - Verify the correct project support email is selected
   - Try disabling and re-enabling Google provider

4. **User profile not created**
   - Check Firestore rules allow authenticated users to read/write their profiles
   - Verify Firebase project configuration in environment variables

### Debug Tips

1. Check browser console for detailed error messages
2. Monitor Firebase Console → Authentication → Users to see login attempts
3. Check Firestore database for user profile documents
4. Review Functions logs if using Firebase Functions

## Security Considerations

1. **Environment Variables**:
   - Never commit Firebase config to public repositories
   - Use environment variables for sensitive configuration

2. **Domain Restrictions**:
   - Only add trusted domains to authorized domains list
   - Remove unused domains regularly

3. **OAuth App Security**:
   - Keep client secrets secure
   - Rotate secrets periodically
   - Review OAuth app permissions

4. **Firestore Rules**:
   - Ensure users can only read/write their own profiles
   - Test rules in Firebase Console rules playground

## Implementation Details

The portal already includes:

- **Auth Service** (`apps/portal/src/lib/firebase/auth.ts`):
  - `signInWithProvider()` handles all social logins
  - Automatic user profile creation
  - Error handling with user-friendly messages

- **Login UI** (`apps/portal/src/app/(auth)/login/components/user-auth-form.tsx`):
  - Social login buttons with provider icons
  - Loading states during authentication
  - Success/error toast notifications

- **Auth Context** (`apps/portal/src/components/auth/auth-provider.tsx`):
  - Global authentication state management
  - Automatic session persistence
  - Protected route handling

## Next Steps

After enabling social authentication:

1. **Monitor Usage**:
   - Check Authentication dashboard for login metrics
   - Review user feedback on login experience

2. **Customize Experience**:
   - Add welcome emails for new social sign-ups
   - Implement user onboarding flow
   - Add profile completion prompts

3. **Enhanced Security**:
   - Enable MFA for high-privilege accounts
   - Implement account linking for multiple providers
   - Add suspicious activity detection

## Support

If you encounter issues:

1. Check [Firebase Auth Documentation](https://firebase.google.com/docs/auth/web/start)
2. Review error messages in browser console
3. Check Firebase Console for configuration issues
4. Open an issue in the project repository

---

Last updated: January 2025