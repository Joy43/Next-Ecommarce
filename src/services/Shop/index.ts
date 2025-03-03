import { cookies } from "next/headers";

export const createShop=async(data:FormData)=>{
    try {
        const res=await fetch((`$process.env.NEXT_PUBLIC_API_URL}/shops`),{
            method:'POST',
        headers:{
            Authorization:(await cookies()).get("accessToken")!.value,
        },
        body:data,
        });
        return res.json();
       
    } catch (error:any) {
     return Error(error);
    }
}


