// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import db from "../../utils/db";

export default async function handler(req, res) {
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
