import { NextResponse, type NextRequest } from "next/server";
import { TokenChecker } from "./utilities/helpers";

const publicRoutes = ["/auth/sign-in","/auth/sign-up","/"];

export default function middleware(req: NextRequest) {
  if (!TokenChecker() && !publicRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/auth/sign-in", req.url));
  }
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)"
};
