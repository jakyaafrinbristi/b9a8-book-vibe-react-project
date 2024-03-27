import { useEffect, useState } from "react";


const useBooksData = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            const res = await fetch("/data.json");
            const data= await res.json();
            // console.log(data)
            setData(data)
        };
        fetchData();
    },
        [])
    return {data};
};

export default useBooksData;