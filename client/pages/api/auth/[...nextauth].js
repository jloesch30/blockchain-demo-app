import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import axios from "axios";
import db from "../../../utils/db";
import { redirect } from "next/dist/server/api-utils";
import { getSession } from "next-auth/react";

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
    async redirect({ url, baseUrl }) {
      // const session = await getSession();
      // if (session) {
      //   console.log("inside of if block");
      //   // save the user to the database
      //   try {
      //     const profilesRef = db.collection("profile");
      //     const user = profilesRef.where("email", "==", session.email).get();
      //   } catch (err) {
      //     console.log(err);
      //   }
      // }
      return baseUrl;
    },
  },
});
