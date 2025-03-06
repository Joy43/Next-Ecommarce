"use client";

import { useUser } from "@/context/userContext";



const HomePage = () => {
  const user = useUser();
  console.log(user);
  return (
    <div className="container">
      <h1 className="text-center">Welcome To Next-Ecommarce Home Page</h1>
    </div>
  );
};

export default HomePage;
