import { NextRequest, NextResponse } from "next/server"; // Import NextRequest and NextResponse types from 'next/server', which are used to handle middleware requests and responses in Next.js.

import { fetchAuthSession } from "aws-amplify/auth/server"; // Import fetchAuthSession from 'aws-amplify/auth/server', which is used to retrieve user authentication session information on the server side.

import { runWithAmplifyServerContext } from "@/utils/amplify-utils"; // Import runWithAmplifyServerContext from '@/utils/amplify-utils', which provides a context for running Amplify-related operations in the Next.js server environment.

export async function middleware(request: NextRequest) {
  // Define an asynchronous middleware function that takes a NextRequest object as a parameter. This function is executed before any matched route is processed.
  const response = NextResponse.next();
  // Create a NextResponse object and call the next() method to indicate that the original request should proceed if no redirection or other action is performed by the middleware.

  const authenticated = await runWithAmplifyServerContext({
    // Use runWithAmplifyServerContext to execute an operation that requires Amplify context and wait for the result.
    nextServerContext: { request, response },
    // Pass the current Next.js request and response objects to Amplify's server context.
    operation: async (contextSpec) => {
      // Define the asynchronous operation to be executed within the Amplify context. contextSpec contains the context information required for Amplify operations.
      try {
        const session = await fetchAuthSession(contextSpec, {});
        // Call fetchAuthSession to retrieve the user's authentication session. The second parameter is an empty object, indicating default session retrieval options.
        return session.tokens !== undefined;
        // Check if the session object contains a tokens property. If it exists, the user is authenticated, and true is returned.
      } catch (error) {
        console.log(error);
        return false;
        // If an error occurs during session retrieval, log the error and return false, indicating the user is not authenticated.
      }
    },
  });

  if (authenticated) {
    // If authenticated is true (indicating the user is authenticated)
    return response;
    // Return the original response, allowing the request to proceed to its target route.
  }

  return NextResponse.redirect(new URL("/login", request.url));
  // If authenticated is false (indicating the user is not authenticated), redirect the user to the /login page. Use request.url to construct the full redirect URL.
}

export const config = {
  // Define the configuration object for the middleware.
  matcher: [
    /*
     * Match all request paths except those starting with the following:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (site favicon)
     * - login (the login page itself, to avoid redirect loops)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|login).*)",
  ],
};