import React, { useContext, useEffect, useState } from "react";
import Nav from "../components/nav/Nav";
import DemoCards from "../components/demo/DemoCards";
import db from "../utils/db";
import AuthContext from "../store/auth-context";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import axios from "axios";

const Demo = ({ users }) => {
  const [renderPageValue, setRenderPageValue] = useState(0);
  // TODO: implement this
  const [userCount, setUserCount] = useState(-1);
  const [canCreateUser, setCanCreateUser] = useState(false);
  const router = useRouter();
  const ctx = useContext(AuthContext);
  const adminClickHandler = (e) => {
    e.preventDefault();
    router.push("/admin");
  };

  useEffect(() => {
    const getOrCreateProfile = async () => {
      await axios
        .get("/api/profile/getOrCreate")
        .then((res) => {
          console.log(res.message);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getOrCreateProfile();
  }, []);

  useEffect(() => {}, [userCount]);

  return (
    <>
      <Nav
        renderPageValue={renderPageValue}
        setRenderPageValue={setRenderPageValue}
      ></Nav>
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
      <div className="grid grid-cols-1 place-items-center">
        <Button
          sx={{ zIndex: 0, marginBottom: 12 }}
          variant="contained"
          className="bg-blue-300"
          onClick={adminClickHandler}
        >
          Create your user
        </Button>
      </div>
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
