import { getSession } from "next-auth/react";
import db from "../../../utils/db";

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (!session) {
    res.status(200).json({ isAdmin: false });
    return;
  }
  try {
    const whitelistRef = db.collection("whitelist");
    const whitelist = await whitelistRef.get();
    let check = [];
    whitelist.forEach((value) => {
      check.push(value.data().email);
    });

    if (check.includes(session.user.email)) {
      res.status(200).json({ isAdmin: true });
      return;
    }
  } catch (err) {
    res.status(500).json({ isAdmin: false });
    console.log("There was an error:", err);
  }
  res.status(200).json({ isAdmin: false });
}
