"use client";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
  const router = useRouter();

  let timer: NodeJS.Timeout;

  const handleAuthStateChange = (user: any) => {
    if (user) {
      // Set a timer to delay redirection by 1 second
      timer = setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Authenticator>
        {({ user }) => {
          // Call the redirection logic outside of the render phase
          handleAuthStateChange(user);

          // Render the login UI if the user is not authenticated
          return (
            <main>
              <h1>Welcome! Please log in.</h1>
            </main>
          );
        }}
      </Authenticator>
    </div>
  );
}