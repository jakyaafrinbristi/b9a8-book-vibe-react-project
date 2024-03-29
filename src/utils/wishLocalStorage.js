import { toast } from "react-toastify";


export const saveToWishLocalStorage =(data)=>{
    const savedPreviousData = JSON.parse(localStorage.getItem("wish")) || [];
    const existedCurrentData = savedPreviousData.find((item) => item.id == data.id);
    if (!existedCurrentData ) {
        savedPreviousData.push(data);
      localStorage.setItem("wish", JSON.stringify(savedPreviousData));
      toast.success("Added succesfully to wishlist books ")
    }
    else{
        toast.warning('this data already stored wishlist books')
    }
};
export const getFromWishLocalStorage =()=>{
    const data =JSON.parse(localStorage.getItem("wish")) || [];
    return data;
}
