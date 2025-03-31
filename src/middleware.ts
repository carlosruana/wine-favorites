import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  console.log("Middleware ejecutándose en:", req.nextUrl.pathname);

  const token = req.cookies.get("token");

  console.log("Token:", token);

  // If there's no token and we're not visiting login or register, redirect to login
  if (!token && !req.nextUrl.pathname.startsWith("/login") && !req.nextUrl.pathname.startsWith("/register")) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("redirect", req.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Now we include all pages except `/login` and `/register`
export const config = {
  matcher: ["/favorites", "/profile", "/dashboard", "/history"], // Manually list protected routes
};
