import { getSession } from "next-auth/react";

export const checkAuth = async (req) => {
  const session = await getSession({ req });
  if (!session) {
    return false;
  }
  return true;
};
