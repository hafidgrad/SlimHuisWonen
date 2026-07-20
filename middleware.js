import { NextResponse } from "next/server";

export function middleware(request) {
  const host = request.headers.get("host") || "";
  // Redirect bare domain → www (301 permanent)
  if (host === "slimhuiswonen.nl" || host.startsWith("slimhuiswonen.nl:")) {
    const url = request.nextUrl.clone();
    url.host = "www.slimhuiswonen.nl";
    return NextResponse.redirect(url, { status: 301 });
  }
  return NextResponse.next();
}

export const config = {
  // Run on all routes except Next.js internals and static files
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
