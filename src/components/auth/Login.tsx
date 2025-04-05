"use client";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Authenticator>
        {({ user }) => {
          // 登录成功后重定向到仪表板
          router.push("/dashboard");
          return (
            <div className="text-center p-4">
              <p>登录成功！正在跳转...</p>
            </div>
          );
        }}
      </Authenticator>
    </div>
  );
}
