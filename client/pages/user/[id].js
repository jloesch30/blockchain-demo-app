import Nav from "../../components/nav/Nav";
import { useRouter } from "next/router";
import db from "../../utils/db";
import useLineItem from "../../hooks/useLineItem";
import UserItemTile from "../../components/demo/UserItemTile";

//TODO: finish user card
const User = ({ data }) => {
  const router = useRouter();
  const { id } = router.query;
  const lineItemData = useLineItem(data);

  return (
    <>
      <Nav></Nav>
      <div className="h-32 md:h-48 bg-gradient-to-r from-sky-500 to-indigo-500 grid grid-cols-3">
        <h1 className="mx-4 whitespace-nowrap overflow-visible text-white text-2xl text-left self-end font-bold mb-2">
          {data.name}
        </h1>
      </div>
      <div className="mt-4 grid gap-6 grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl font-mono font-bold">Skills</h1>
          {lineItemData &&
            lineItemData.map((value, index) => {
              return (
                <UserItemTile
                  key={index}
                  name={value[0]}
                  description={value[1]}
                  validation={null}
                ></UserItemTile>
              );
            })}
        </div>
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-xl font-mono font-bold">Resume Items</h1>
          {lineItemData &&
            lineItemData.map((value, index) => {
              return (
                <UserItemTile
                  key={index}
                  name={value[0]}
                  description={value[1]}
                  validation={null}
                ></UserItemTile>
              );
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
  const userRef = db.collection("users");
  const snapshot = await userRef.doc(id).get();
  const data = snapshot.data();

  return {
    props: { data },
  };
}