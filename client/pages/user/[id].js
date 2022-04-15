import Nav from "../../components/nav/Nav";
import { useRouter } from "next/router";
import db from "../../utils/db";

//TODO: finish user card
const User = ({ data }) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(data);

  return (
    <>
      <Nav></Nav>
      <div className="mt-48 grid gap-4 place-content-center">
        <h1 className="text-center font-bold">User Profile</h1>
        <div className="bg-slate-300 rounded-md py-3 px-3">
          <p>User: {id}</p>
          <h1>Name: {data.name}</h1>
          <p>{data.bio}</p>
          {data.lineItemName.map((value, index) => {
            return <div>Item: {value}</div>;
          })}
        </div>
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
