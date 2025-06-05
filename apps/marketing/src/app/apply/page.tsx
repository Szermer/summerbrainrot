import { redirect } from 'next/navigation';

import { PORTAL_ROUTES } from '@/config/portal';

export default function Apply() {
  // Redirect to the portal registration page for applications
  redirect(PORTAL_ROUTES.register);
}
