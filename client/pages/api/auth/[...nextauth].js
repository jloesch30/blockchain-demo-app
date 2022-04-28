import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import axios from "axios";
import db from "../../../utils/db";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) {
    //   console.log(credentials);
    //   return true;
    // },
  },
});
