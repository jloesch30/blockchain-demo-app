import { Button } from "@mui/material";
import React from "react";
import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <div className="fixed z-10 right-5 top-10 md:right-10">
      <Button
        className="bg-blue-400 text-xs md:text-base"
        variant="contained"
        onClick={() => signOut()}
      >
        Sign Out
      </Button>
    </div>
  );
};

export default SignOutButton;
