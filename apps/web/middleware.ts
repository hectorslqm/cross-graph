import { type NextRequest } from 'next/server';
import { updateSession } from './utils/supabase/middleware';

/**
 * Next.js Middleware to handle cross-cutting concerns like Auth session refresh.
 */
export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  /**
   * Matcher defines which paths the middleware will run on.
   * We exclude static files, images, and internal Next.js paths.
   */
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
