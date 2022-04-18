import Nav from "../../components/nav/Nav";
import { useRouter } from "next/router";
import db from "../../utils/db";

//TODO: finish user card
const User = ({ data }) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(data);

  const lineItemDate = [];

  return (
    <>
      <Nav></Nav>
      <div className="h-32 md:h-48 bg-gradient-to-r from-sky-500 to-indigo-500 grid grid-cols-3">
        <h1 className="mx-4 text-white text-2xl text-left self-end font-bold mb-2">
          {data.name}
        </h1>
      </div>
      <div className="mt-4 grid gap-4 place-content-center">
        <h1 className="text-center font-bold text-2xl">Resume</h1>
        {data.lineItemName.map((value, index) => {
          return <div key={index}>Item: {value}</div>;
        })}
      </div>
    </>
  );
};

export default User;

export async function getServerSideProps(context) {
  // get user information with ID
  const { id } = context.query;
  console.log(id);
  const userRef = db.collection("users");
  const snapshot = await userRef.doc(id).get();
  const data = snapshot.data();

  return {
    props: { data },
  };
}
