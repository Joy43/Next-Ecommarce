'use client'
import Logo from "@/app/assets/svgs/Logo";
import { Button } from "../ui/button";
import { Heart, LogOut, ShoppingBag } from "lucide-react";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { useUser } from "@/context/userContext";
import { logout } from "@/services/AuthService";
export default function Navbar() {
  // --------user ----
 const {user,setIsLoading}=useUser();
  // logout
  const handleLogOut=()=>{
 logout();
 setIsLoading(true);

  }
  return (
    <header className="border-b w-full">
      <div className="container flex justify-between items-center mx-auto h-16 px-3">
        <h1 className="text-2xl font-black flex items-center">
          <Logo />
          ext Ecommarce
        </h1>
        <div className="max-w-md  flex-grow">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full max-w-6xl border border-gray-300 rounded-full py-2 px-5"
          />
        </div>
        {/* --------heart & shop icon cart-------- */}
        <nav className="flex gap-2">
      
          <Button variant="outline" className="rounded-full p-0 size-10">
            <Heart />
          </Button>
          <Button variant="outline" className="rounded-full p-0 size-10">
            <ShoppingBag />
          </Button>
      {/*------------ user is aviable now---------*/}
       {user?(
      <>
         <Link href="/create-shop">
         <Button className="rounded-full">Create Shop</Button>
       </Link>

   {/*      // ------dropdown user menu------ */}
         <DropdownMenu>
         {/* -----avatar--- */}
 <DropdownMenuTrigger><Avatar>
     <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
     <AvatarFallback>{user?.name}</AvatarFallback>
   </Avatar></DropdownMenuTrigger>
 <DropdownMenuContent>
   <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
   <DropdownMenuSeparator />
   <DropdownMenuItem>Profile</DropdownMenuItem>
   <DropdownMenuItem>Dahboad</DropdownMenuItem>
   <DropdownMenuItem>Myshop</DropdownMenuItem>
   <DropdownMenuItem
                    className="bg-red-500 cursor-pointer"
                    onClick={handleLogOut}
                  >
                    <LogOut />
                    <span>Log Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>
                       </>
                     ):(
            <Link href="/login">
                <Button>
                  Login
            </Button>
        </Link>
       )

       }

        </nav>
      </div>
    </header>
  );
}