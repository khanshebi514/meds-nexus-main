'use client'
import Image from "next/image";
import HomePage from "./home/page";
import LoadingState from "@/ui/loadingTime";
import { useEffect, useState } from "react";
import LoaderSping from "../ui/loaderSping";

export default function Home() {


  const [loadingTime, SetLoadingTime] = useState(true);
  useEffect(()=>{
  
     setTimeout(() => {
          SetLoadingTime(false);
          console.log("delayed 5 sec.");
        }, 2000);
      
  }, []) 

  return(
    <>
    {/* <LoadingState/> &&
    <HomePage/> */}
    {
       loadingTime ? <div className="w-full h-[100vh] absolute z-[999] top-0"><LoaderSping/> </div> : <HomePage/>
    }

        
    </>
  );
}
