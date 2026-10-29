import { redirect } from 'next/navigation';

export default function SubmitObservationRedirect() {
  redirect('/observations/submit');
}

