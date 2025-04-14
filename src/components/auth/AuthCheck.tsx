import { redirect } from 'next/navigation';
import { AuthGetCurrentUserServer } from '#/utils/amplify-utils';

export default async function AuthCheck() {
  try {
    // Check if the user is authenticated on the server
    const user = await AuthGetCurrentUserServer();

    if (user) {
      console.log("If authenticated, redirect to the dashboard");
      redirect('/dashboard');
    } else {
      console.log("If not authenticated, redirect to the login page");
      redirect('/login');
    }
  } catch (error) {
    console.error("Handle errors, e.g., user not authenticated:",error);
    redirect('/login');
  }

  // This will never render anything because of the redirects
  return null;
}