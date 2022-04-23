import Nav from "../../components/nav/Nav";
import { useRouter } from "next/router";
import db from "../../utils/db";
import UserItemTile from "../../components/demo/UserItemTile";

//TODO: finish user card
const User = ({ data }) => {
  const router = useRouter();
  const { id } = router.query;
  const { resumeItems, skillItems, userItems } = data;

  return (
    <>
      <Nav></Nav>
      <div className="h-32 md:h-48 bg-gradient-to-r from-sky-500 to-indigo-500 grid grid-cols-3">
        <h1
          className="
          mx-4 
          whitespace-nowrap 
          overflow-visible 
          text-white 
          text-2xl 
          text-left 
          self-end 
          font-bold 
          mb-2"
        >
          {userItems.name}
        </h1>
      </div>
      <div className="mt-4 grid gap-6 grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-mono font-bold">Skills</h1>
          {/* TODO: resume items */}
          {resumeItems &&
            resumeItems.map((value, index) => {
              return (
                <UserItemTile
                  key={index}
                  name={value.name}
                  description={value.description}
                  validation={null}
                ></UserItemTile>
              );
            })}
        </div>
        <div className="flex items-center flex-col">
          <h1 className="text-xl font-mono font-bold">Resume Items</h1>
          {/* TODO: skillItems items */}
          {skillItems &&
            skillItems.map((value, index) => {
              return (
                <UserItemTile
                  key={index}
                  name={value.name}
                  description={value.description}
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
  const userRef = db.collection("users").doc(id);
  const resumeSnap = await userRef.collection("resume").get();
  const skillSnap = await userRef.collection("skills").get();
  const userSnap = await userRef.get();

  // data parsing
  const resumeItems = [];
  resumeSnap.forEach((value, index) => {
    resumeItems.push(value.data());
  });

  const skillItems = [];
  skillSnap.forEach((value, index) => {
    skillItems.push(value.data());
  });

  const data = {
    resumeItems: skillItems,
    skillItems: resumeItems,
    userItems: userSnap.data(),
  };

  return {
    props: { data },
  };
}
