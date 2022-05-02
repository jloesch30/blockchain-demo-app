import admin from "firebase-admin";

if (!admin.apps.length) {
  console.log("app initialization");
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        clientEmail: process.env.CLIENT_EMAIL,
        privateKey: process.env.PRIVATE_KEY,
        projectId: process.env.PROJECT_ID,
      }),
      databaseURL: "https://blockchain-verify-demo-default-rtdb.firebaseio.com",
    });
  } catch (error) {
    console.log("Firebase admin initialization error", error.stack);
  }
}
export default admin.firestore();
