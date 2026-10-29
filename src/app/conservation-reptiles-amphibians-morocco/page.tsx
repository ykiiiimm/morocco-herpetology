import { redirect } from 'next/navigation';

export default function LegacyConservationRedirect() {
  redirect('/projects');
}
