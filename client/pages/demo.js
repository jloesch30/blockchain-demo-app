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
      <DemoCards users={users}></DemoCards>
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
