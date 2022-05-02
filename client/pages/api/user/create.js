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
    const asList = Object.entries(fields);

    // filter out the select element returned from the client
    const filteredData = asList.filter(
      ([key, value]) => key !== "select-input"
    );
    // convert the data back into json format
    const data = Object.fromEntries(filteredData);

    try {
      console.log("inside of try block");
      const { id } = await db.collection("users").add({
        address: data.address[0],
        name: data.name[0],
        bio: data.bio[0],
        created: new Date().toISOString(),
      });

      // add the resume items as documents of the sub-collection

      if (data?.lineItemName) {
        data.lineItemName.forEach(async (value, index) => {
          const snap = await db
            .collection("users")
            .doc(id)
            .collection("resume")
            .add({
              name: value,
              description: data.lineItemDescription[index],
            });
        });
      }

      if (data?.skillItemName) {
        data.skillItemName.forEach(async (value, index) => {
          const snap = await db
            .collection("users")
            .doc(id)
            .collection("skills")
            .add({
              name: value,
              description: data.skillItemDescription[index],
            });
        });
      }

      res.json({ id: id });
      res.status(200).end();
    } catch (e) {
      console.error("Error adding the document", e);
      res.json({ message: "Something went wrong" });
      res.status(500).end();
    }
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
