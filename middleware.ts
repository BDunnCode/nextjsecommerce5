import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ['/admin', 'sign-up', 'sign-in'],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};