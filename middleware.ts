import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // const path = request.nextUrl.pathname;
  // const publicPath = ["/", "/auth"];
  // const publicRoutes = ["/login", "/register"];
  // const jwtToken = request.cookies.get("jwt")?.value;
  // if (!jwtToken) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|auth|favicon.ico|robots.txt|images|login).*)",
  ],
};
