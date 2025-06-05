import { redirect } from 'next/navigation';

import { PORTAL_ROUTES } from '@/config/portal';

export default function Signup() {
  // Redirect to the portal registration page
  redirect(PORTAL_ROUTES.register);
}
