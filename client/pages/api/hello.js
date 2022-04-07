// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import db from "../../utils/db";
import { checkAuth } from "../../utils/session";

export default async function handler(req, res) {
  if (!(await checkAuth(req))) {
    res.status(505).json({ message: "User is not authenticated" });
    return;
  }

  const data = {
    name: "test",
    location: "test",
  };

  try {
    const { id } = await db.collection("users").add({
      ...data,
      created: new Date().toISOString(),
    });
    res.status(200).json({ id: id });
    return;
  } catch (e) {
    console.error("Error adding the document", e);
    res.status(200).json({ message: "Something went wrong" });
  }
}
