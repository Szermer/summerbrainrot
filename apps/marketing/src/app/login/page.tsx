import { redirect } from 'next/navigation';
import { PORTAL_ROUTES } from '@/config/portal';

export default function Login() {
  // Redirect to the portal login page
  redirect(PORTAL_ROUTES.login);
}