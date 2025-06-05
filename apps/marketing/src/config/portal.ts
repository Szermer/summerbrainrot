// Portal configuration
// Update PORTAL_URL when custom domain is configured

// Current portal URL (Firebase Web App Hosting)
export const PORTAL_URL = 'https://summerbrainrot--summerbrainrot.us-central1.hosted.app';

// Future portal URL (when custom domain is configured)
// export const PORTAL_URL = 'https://summerbrainrot.camp';

// Portal routes
export const PORTAL_ROUTES = {
  login: `${PORTAL_URL}/login`,
  register: `${PORTAL_URL}/register`,
  dashboard: `${PORTAL_URL}`,
  forgotPassword: `${PORTAL_URL}/forgot-password`,
} as const;