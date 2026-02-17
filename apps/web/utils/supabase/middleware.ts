import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

/**
 * Updates the user session by refreshing the Auth token if necessary.
 * This is required for Next.js App Router to keep the user logged in.
 */
export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          // Update request cookies for the current execution
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );

          // Create a new response to apply the updated cookies
          supabaseResponse = NextResponse.next({
            request,
          });

          // Set the cookies in the response to be sent back to the browser
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // IMPORTANT: Do not remove this. Refresh the session if it's expired.
  // This will also allow you to access the user in Server Components.
  await supabase.auth.getUser();

  return supabaseResponse;
}
