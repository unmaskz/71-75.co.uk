import { withClerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default withClerkMiddleware((req: NextRequest) => {
    return NextResponse.next();
});

// Stop Middleware running on static files
export const config = {
    matcher: '/((?!_next/image|_next/static|building.mp4|logo-white.png|favicon.ico).*)',
};
