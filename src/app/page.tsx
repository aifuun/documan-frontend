

import AuthCheck from '@/components/auth/AuthCheck';

export default function Home() {
  return (
    <main>
      <h1>Welcome to the Documan!</h1>
      <AuthCheck />
      {/* The AuthCheck component will handle redirection based on authentication status */}
    </main>
  );
}