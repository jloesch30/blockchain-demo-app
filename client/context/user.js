import { TenantAwareAuth } from "firebase-admin/lib/auth/tenant-manager";
import { createContext, useContext, useEffect } from "react";
import { useEffect } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  let sharedState = {};

  useEffect(() => {
    const getWhiteList = async () => {};
  }, [sharedState.admin]);

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppWrapper);
}
