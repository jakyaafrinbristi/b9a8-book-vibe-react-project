import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../utils/localStorage";


const useLocalStorage = () => {
    const[localData,setLocalData]=useState([])
    console.log(localData)
    useEffect(()=>{
        setLocalData(getFromLocalStorage)
    },[])
    return {localData};
};

export default useLocalStorage;