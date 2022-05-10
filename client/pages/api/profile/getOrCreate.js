import { getSession } from "next-auth/react";
import db from "../../../utils/db";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    res.status(500).json({ message: "user is not signed in" });
    return;
  }

  try {
    console.log("inside try block");
    console.log(session.user.email);
    const profileRef = db.collection("profile");
    const profileSnap = await profileRef
      .where("email", "==", session.user.email)
      .get();

    if (profileSnap.empty) {
      const profileData = {
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        users: 0,
      };

      const snap = await db.collection("profile").add(profileData);
      res
        .status(200)
        .json({ message: "user was added successfully", users: 0 });
      return;
    }
    res.status(200).json({
      message: "User exists, returning",
      users: profileSnap.data().users,
    });
    return;
  } catch (err) {
    console.log("there was an error:", err);
    res.status(500).json({ message: "there was a problem in the server" });
    return;
  }
}
