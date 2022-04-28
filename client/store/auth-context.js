import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext({
  isAdmin: false,
});

export const AuthContextProvider = (props) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const isAdmin = async () => {
      const res = await axios.get("/api/admin/isAdmin");
      if (!res?.data.isAdmin) {
        setIsAdmin(false);
      } else {
        setIsAdmin(res.data.isAdmin);
      }
    };
    isAdmin().catch((err) => {
      console.log("There was an error getting the request");
    });
  }, [isAdmin]);

  return (
    <AuthContext.Provider value={{ isAdmin: isAdmin }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
