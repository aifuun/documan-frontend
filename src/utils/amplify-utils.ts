// utils/amplify-utils.ts
import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import { getCurrentUser } from "aws-amplify/auth/server";

import { NextServer } from "next/dist/server/next";

import outputs from "amplify_outputs.json";

export const { runWithAmplifyServerContext } = createServerRunner({
  config: outputs,
});



interface AuthGetCurrentUserServerParams {
  cookies: Record<string, string>;
}

interface CurrentUser {
  userId?: string;
  [key: string]: any; // Add additional properties as needed
}

export async function authGetCurrentUserServer(
  cookies: Record<string, string> // 添加正确的类型，接收cookies参数
): Promise<CurrentUser | null> {
  try {

    const cookiesFunction = () => Promise.resolve(reqCookies as unknown as ReadonlyRequestCookies);

    const currentUser = await runWithAmplifyServerContext({
      nextServerContext: { cookies as unkonown as  },
      operation: (contextSpec) => getCurrentUser(contextSpec),
    });
    return currentUser as CurrentUser;
  } catch (error) {
    console.error("Error fetching current user:", error);
    return null;
  }
}

export async function getUserId(cookies: Record<string, string>) {
  const currentUser = await authGetCurrentUserServer(cookies);

  if (currentUser && currentUser.userId) {
    return currentUser.userId;
  }

  console.error("Identity ID not found for the current user.");
  return null;
}