/* 
- Create a new user for the demo application
*/

import db from "../../../utils/db";
import { checkAuth } from "../../../utils/session";
import multiparty from "multiparty";

export default async function handler(req, res) {
  if (!(await checkAuth(req))) {
    res.status(505).json({ message: "User is not authenticated" });
    return;
  }

  const form = new multiparty.Form();

  form.parse(req, async (err, fields, files) => {
    console.log(fields);

    try {
      const { id } = await db.collection("users").add({
        ...fields,
        created: new Date().toISOString(),
      });
      res.status(200).json({ id: id });
      return;
    } catch (e) {
      console.error("Error adding the document", e);
      res.status(200).json({ message: "Something went wrong" });
    }
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
