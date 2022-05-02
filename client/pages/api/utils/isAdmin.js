import { getSession } from "next-auth/react";
import db from "../../../utils/db";

export const isAdmin = async (req) => {
  const session = await getSession({ req });
  if (!session) {
    return false;
  }
  try {
    const whitelistRef = db.collection("whitelist");
    const whitelist = await whitelistRef.get();
    let check = [];
    whitelist.forEach((value) => {
      check.push(value.data().email);
    });

    if (check.includes(session.user.email)) {
      return true;
    }
  } catch (err) {
    return false;
  }
  return false;
};
