// utils/amplify-utils.ts
import { cookies } from "next/headers";

import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import { getCurrentUser } from "aws-amplify/auth/server";

import { type Schema } from "amplify/data/resource";
import outputs from "amplify_outputs.json";

export const { runWithAmplifyServerContext } = createServerRunner({
  config: outputs,
});

export const cookiesClient = generateServerClientUsingCookies<Schema>({
  config: outputs,
  cookies,
});

export async function AuthGetCurrentUserServer() {
  try {
    const currentUser = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (contextSpec) => getCurrentUser(contextSpec),
    });
    return currentUser;
  } catch (error) {
    console.error("Error fetching current user:", error);
    return null;
  }
}

export default async function getIdentityId() {
  const currentUser = await AuthGetCurrentUserServer();

  if (currentUser && currentUser.userId) {
    return currentUser.userId; // Return the identityId
  }

  console.error("Identity ID not found for the current user.");
  return null; // Return null if identityId is not available
}