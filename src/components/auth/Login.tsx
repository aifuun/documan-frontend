"use client";

import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Login() {
  const { user } = useAuthenticator((context) => [context.user]); // 只监听 user 的变化[4]
  const router = useRouter();

  useEffect(() => {
    if (user) {
      console.log("User is authenticated, redirecting to dashboard");
      router.push("/dashboard");
    }
  }, [user, router]); // 依赖 user 和 router

  return (
    <div className="flex flex-col items-center justify-center h-full">
      {/* Authenticator 组件仍然需要渲染 */}
      <Authenticator>
        {/* 你可能仍然需要在 render prop 中渲染一些内容，或者根据你的需求进行调整 */}
        {({ signOut }) => <p>Logging in...</p>}
      </Authenticator>
    </div>
  );
}

export default () => (
  <Authenticator.Provider>
    <Login />
  </Authenticator.Provider>
);