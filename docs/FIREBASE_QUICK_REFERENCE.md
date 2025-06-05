# Firebase Quick Reference

Quick links and settings for Summer Brain Rot Firebase configuration.

## Firebase Console Links

- **Main Console**: https://console.firebase.google.com
- **Authentication**: https://console.firebase.google.com/project/summerbrainrot/authentication
- **Firestore**: https://console.firebase.google.com/project/summerbrainrot/firestore
- **Hosting**: https://console.firebase.google.com/project/summerbrainrot/hosting
- **Storage**: https://console.firebase.google.com/project/summerbrainrot/storage

## OAuth Callback URLs

When configuring OAuth providers, use these callback URLs:

### Production
```
https://summerbrainrot.firebaseapp.com/__/auth/handler
```

### Staging/Test (if applicable)
```
https://summerbrainrot-staging.firebaseapp.com/__/auth/handler
```

## Authorized Domains

Add these domains in Authentication → Settings → Authorized domains:

- `localhost` (development)
- `summerbrainrot.camp` (production domain)
- `summerbrainrot.com` (marketing site)
- `summerbrainrot--summerbrainrot.us-central1.hosted.app` (Firebase Web App Hosting)
- `summerbrainrot.firebaseapp.com` (Firebase default)
- `summerbrainrot.web.app` (Firebase hosting)

## GitHub OAuth App Settings

- **Application name**: Summer Brain Rot
- **Homepage URL**: https://summerbrainrot.camp
- **Authorization callback URL**: See OAuth Callback URLs above
- **Enable Device Flow**: No (unchecked)

## Facebook App Settings

- **App Name**: Summer Brain Rot
- **App Domains**: 
  - summerbrainrot.camp
  - summerbrainrot.firebaseapp.com
- **Privacy Policy URL**: https://summerbrainrot.com/privacy
- **Terms of Service URL**: https://summerbrainrot.com/terms
- **Valid OAuth Redirect URIs**: See OAuth Callback URLs above

## Environment Variables

For local development, create `.env.local` in `apps/portal/`:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=summerbrainrot.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=summerbrainrot
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=summerbrainrot.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Optional: Firebase Admin SDK (for server-side)
FIREBASE_ADMIN_PROJECT_ID=summerbrainrot
FIREBASE_ADMIN_CLIENT_EMAIL=your_service_account_email
FIREBASE_ADMIN_PRIVATE_KEY="your_private_key_with_newlines"
```

## Testing Checklist

### Local Development
- [ ] Portal runs on http://localhost:3001
- [ ] Login page shows social auth buttons
- [ ] Google login works
- [ ] GitHub login works  
- [ ] Facebook login works
- [ ] User profile created in Firestore
- [ ] Session persists on refresh

### Production
- [ ] Portal accessible at production URL
- [ ] All social logins work
- [ ] No console errors
- [ ] Users appear in Firebase Auth dashboard
- [ ] User profiles created in Firestore

## Common Commands

```bash
# Start portal development
cd apps/portal
pnpm run dev

# Deploy to Firebase (if using Firebase Hosting)
firebase deploy --only hosting:portal

# View Firebase logs
firebase functions:log

# Run Firebase emulators (for testing)
firebase emulators:start
```

## Support Resources

- [Firebase Auth Docs](https://firebase.google.com/docs/auth)
- [Firebase Web Setup](https://firebase.google.com/docs/web/setup)
- [OAuth 2.0 Playground](https://developers.google.com/oauthplayground/)
- [GitHub OAuth Apps](https://github.com/settings/developers)
- [Facebook App Dashboard](https://developers.facebook.com/apps/)

---

Last updated: January 2025