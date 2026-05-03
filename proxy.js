import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export function proxy(request) {
  const { pathname } = request.nextUrl;

  // ignore files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return;
  }

  const locales = ["en", "ar"];
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}`),
  );

  // لو مافيش لغة → حوّله إلى /en
  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(new URL(`/en${pathname}`, request.url));
  }
}
