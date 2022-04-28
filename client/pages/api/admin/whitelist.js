import { getSession } from "next-auth/react";
import { resolveConfig } from "prettier";

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (session) {
    console.log("Getting the whitelisted users");
  }
}
