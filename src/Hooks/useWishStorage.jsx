import { useEffect, useState } from "react";
import { getFromWishLocalStorage } from "../utils/wishLocalStorage";


const useWishStorage = () => {
    const [wishLocalData,setWishLocalData]=useState();
    console.log(wishLocalData)
    useEffect(()=>{
      setWishLocalData(getFromWishLocalStorage)  
    },[])
    return {wishLocalData}
};

export default useWishStorage;