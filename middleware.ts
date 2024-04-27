import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
const protectedRoutes = [
  "/dashboard",
  "/consultant",
  "/consultant/:path*",
  "/explore",
  "/fund-wallet",
  "/get-verified",
  "/notifications",
  "/profile",
  "/session-call",
  "/settings",
  "/withdrawal",
  "/your-circle",
  "/chat",
  "/chat/:path*"
];
const publicRoutes = [
  "/auth/sign-in",
  "/auth/sign-up",
  "/",
  "/auth/email-verification"
];
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname 
  const isProtectRoute = protectedRoutes.includes(path)
  const isPublicRoutes = publicRoutes.includes(path);
  const userToken = request.cookies.get("authorization")?.value;
  if (isProtectRoute && !userToken) {
    return NextResponse.redirect(new URL('/auth/sign-in',request.nextUrl))
  }

  if (isPublicRoutes && userToken && !request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/dashboard',request.nextUrl))
  }

  return NextResponse.next()


}

// export const config ={
//     matcher:['/dashboard','/consultant','/consultant/:path*','/explore','/fund-wallet','/get-verified','/notifications','/profile','/session-call','/settings','/withdrawal','/your-circle','/chat','/chat/:path*']
//
