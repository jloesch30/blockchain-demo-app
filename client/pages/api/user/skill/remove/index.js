import axios from "axios";
import { getSession } from "next-auth/react";
import db from "../../../../../utils/db";
import { isAdmin } from "../../../utils/isAdmin";

export default async function handler(req, res) {
  const session = getSession({ req });
  const { userId, skillId } = req.query;
  const admin = await isAdmin(req);

  // Admin only
  // if (!session || !admin) {
  //   res.status(505).json({ message: "User is not authenticated" });
  // }

  if (!session) {
    res.status(505).json({ message: "User is not authenticated" });
  }

  // remove the skill from the users data
  try {
    const snap = await db
      .collection("users")
      .doc(userId)
      .collection("skills")
      .doc(skillId)
      .delete();

    res
      .status(200)
      .json({ message: `user with id: ${userId} deleted skill: ${snap.id}` });
    return;
  } catch (err) {
    res.status(200).json({ message: `There was a problem: ${err}` });
    return;
  }
}
