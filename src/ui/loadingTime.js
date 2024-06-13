'use client'
import { useEffect, useState } from "react";
import LoaderSping from "./loaderSping";

export default function LoadingState() {
  
    const [loadingTime, SetLoadingTime] = useState(true);
useEffect(()=>{

   setTimeout(() => {
        SetLoadingTime(false);
        console.log("delayed 5 sec.");
      }, 5000);
    
}, []) 

    return(
        loadingTime ? <div className="w-full h-[100vh]"><LoaderSping/> </div> : undefined
        
    )

}

