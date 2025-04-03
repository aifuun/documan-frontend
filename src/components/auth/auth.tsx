'use client'
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';




export default function Auth() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-xl font-semibold">Hello, {user?.username || 'User'}</h2>
          <p className="text-gray-600">You are now signed in to Documan</p>
          <button 
            onClick={signOut}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            Sign out
          </button>
        </div>
      )}
    </Authenticator>
  );
}