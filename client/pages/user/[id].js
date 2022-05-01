import Nav from "../../components/nav/Nav";
import { useRouter } from "next/router";
import db from "../../utils/db";
import UserItemTile from "../../components/demo/UserItemTile";
import { useEffect, useState } from "react";
import useWeb3 from "../../hooks/useWeb3";

const User = ({ data }) => {
  const [renderPageValue, setRenderPageValue] = useState(-1);
  const router = useRouter();
  const { id } = router.query;
  const { web3, address, vContract } = useWeb3();
  const { resumeItems, skillItems, userItems } = data;

  // TODO: This loops infinitely
  useEffect(() => {
    const getUserVerifications = async () => {
      try {
        const res = await vContract.methods.getUserCerts(address).call();
        console.log(res);
      } catch (err) {
        alert("There was an error processing your request");
      }
    };

    if (address && web3) getUserVerifications();
  }, [web3, address, vContract]);

  return (
    <>
      <Nav
        renderPageValue={renderPageValue}
        setRenderPageValue={setRenderPageValue}
      ></Nav>
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
      {!resumeItems && !skillItems && <h1>No items in profile</h1>}
      <div className="mx-4 grid grid-cols-1 place-items-center">
        <div className="bg-slate-300 w-full max-w-6xl rounded-md shadow-lg mt-5 py-10 grid grid-cols-1 md:grid-cols-2 place-items-center">
          <h2 className="text-white font-sans text-xl font-semibold text-center md:order-1">
            Skill Items
          </h2>
          <div className="md:order-3 grid grid-cols-1 place-items-center w-full">
            {skillItems &&
              skillItems.map((value, index) => {
                return (
                  <UserItemTile
                    id={value.id}
                    type="skill"
                    key={index}
                    description={value.data.description}
                    name={value.data.name}
                  ></UserItemTile>
                );
              })}
          </div>
          <div className="border-b-white border-2 w-full mx-2 my-4 border-dashed md:hidden"></div>
          <h2 className="text-white font-sans text-xl font-semibold text-center md:order-2">
            Resume Items
          </h2>
          <div className="md:order-4 grid grid-cols-1 place-items-center w-full">
            {resumeItems &&
              resumeItems.map((value, index) => {
                return (
                  <UserItemTile
                    id={value.id}
                    type="resume"
                    key={index}
                    description={value.data.description}
                    name={value.data.name}
                  ></UserItemTile>
                );
              })}
          </div>
        </div>
      </div>
      <div className="mt-4 grid gap-6 grid-cols-1 md:grid-cols-2"></div>
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
    resumeItems.push({
      id: value.id,
      data: value.data(),
    });
  });

  const skillItems = [];
  skillSnap.forEach((value, index) => {
    skillItems.push({
      id: value.id,
      data: value.data(),
    });
  });

  const data = {
    resumeItems: resumeItems,
    skillItems: skillItems,
    userItems: userSnap.data(),
  };

  return {
    props: { data },
  };
}
