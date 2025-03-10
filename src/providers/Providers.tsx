"use client";
import StoreProvider from "./StoreProvider";
import UserProvider from "@/context/userContext";

const Providers = ({ children }: { children: React.ReactNode }) => {

  return (
    <UserProvider>
      <StoreProvider>{children}</StoreProvider>
    </UserProvider>
  );
};

export default Providers;
