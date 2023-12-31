import type { NextAuthOptions } from "next-auth";
import githubAuth, { type GithubProfile } from "next-auth/providers/github";
import googleAuth, { type GoogleProfile } from "next-auth/providers/google";

export const options: NextAuthOptions = {
  providers: [
    githubAuth<GithubProfile>({
      clientId: `${process.env.GITHUB_ID}`,
      clientSecret: `${process.env.GITHUB_SECRET}`,
    }),
    googleAuth<GoogleProfile>({
      clientId: `${process.env.GOOGLE_ID}`,
      clientSecret: `${process.env.GOOGLE_SECRET}`,
    }),
  ],

  pages: {
    signIn: "/unAuthorized",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) return url;
      if (url.startsWith("/")) return new URL(url, baseUrl).toString();

      return baseUrl;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
