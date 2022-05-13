import { useState, useEffect } from "react";
import axios from "axios";

const useUserCount = () => {
  const [userCount, setUserCount] = useState();

  useEffect(() => {
    const getOrCreateProfile = async () => {
      await axios
        .get("/api/profile/getOrCreate")
        .then((res) => {
          setUserCount(res.data.users);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getOrCreateProfile();
  }, []);

  return {
    userCount,
    setUserCount,
  };
};

export default useUserCount;
