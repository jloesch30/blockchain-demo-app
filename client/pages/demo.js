import React, { useState } from "react";
import Nav from "../components/nav/Nav";
import DemoCards from "../components/demo/DemoCards";
import db from "../utils/db";

const Demo = ({ users }) => {
  const [renderPageValue, setRenderPageValue] = useState(0);
  return (
    <>
      <Nav
        renderPageValue={renderPageValue}
        setRenderPageValue={setRenderPageValue}
      ></Nav>
      {/* Content of the page here */}
      {users.length > 0 && <DemoCards users={users}></DemoCards>}
      {users.length <= 0 && (
        <div className="mt-48 flex flex-col items-center justify-center">
          <p className="font-mono font-bold">
            No users, please use the admin panel to add some
            <br />
            <p className="text-center">/admin</p>
          </p>
        </div>
      )}
    </>
  );
};

export default Demo;

export async function getServerSideProps(context) {
  // logic to get users
  const usersRef = db.collection("users");
  const snapshot = await usersRef.get();

  let data = [];
  snapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  console.log(data);

  return {
    props: {
      users: data,
    },
  };
}
