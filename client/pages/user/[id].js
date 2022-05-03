import Nav from "../../components/nav/Nav";
import { useRouter } from "next/router";
import db from "../../utils/db";
import UserItemTile from "../../components/demo/UserItemTile";
import { useEffect, useState } from "react";
import useWeb3 from "../../hooks/useWeb3";

const User = ({ data }) => {
  const [renderPageValue, setRenderPageValue] = useState(-1);
  const { web3, address, vContract } = useWeb3();
  const { resumeItems, skillItems, userItems } = data;
  const [verifiedSkills, setVerifiedSkills] = useState();
  const [sameUser, setSameUser] = useState(false);

  // TODO: This loops infinitely
  useEffect(() => {
    if (data.userItems.address === address) {
      setSameUser(true);
    }

    const getUserVerifications = async () => {
      try {
        const res = await vContract.methods
          .getUserCerts(data.userItems.address)
          .call();
        setVerifiedSkills(res);
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
          <h2 className="md:order-1 text-white font-sans text-xl font-semibold text-center">
            Skills
          </h2>
          <div className="md:order-3 grid grid-cols-1 place-items-center w-full">
            {skillItems &&
              skillItems.map((value, index) => {
                return (
                  <UserItemTile
                    id={value.id}
                    userId={data.userId}
                    isSameUser={sameUser}
                    key={index}
                    description={value.data.description}
                    name={value.data.name}
                  ></UserItemTile>
                );
              })}
          </div>
          <h2 className="md:order-2 text-white font-sans text-xl font-semibold text-center">
            Verified Skills
          </h2>
          <div className="md:order-4 md:row-span-4 grid grid-cols-1 place-items-center self-start w-full">
            {verifiedSkills &&
              verifiedSkills.map((value, index) => {
                console.log(value);
                return (
                  <UserItemTile
                    id={value.id}
                    type="resume"
                    key={index}
                    description={value.itemDescription}
                    name={value.itemName}
                  ></UserItemTile>
                );
              })}
          </div>
          <div className="border-b-white border-2 w-full mx-2 my-4 border-dashed md:hidden"></div>
          <h2 className="md:order-5 text-white font-sans text-xl font-semibold text-center">
            Resume Items
          </h2>
          <div className="md:order-7 grid grid-cols-1 place-items-center self-start w-full">
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

  console.log(userSnap.data().address);

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
    userId: id,
    userItems: userSnap.data(),
  };

  return {
    props: { data },
  };
}
