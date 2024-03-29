import { toast } from "react-toastify";

export const saveToLocalStorage = (data) => {
    const savedData = JSON.parse(localStorage.getItem("read")) || [];
    const existedData = savedData.find((item) => item.id == data.id);
    if (!existedData) {
      savedData.push(data);
      localStorage.setItem("read", JSON.stringify(savedData));
      toast.success("Added succesfully to read books ")
      
    }
    else{
        toast.warning('this data already stored read books')
    }
}
export const getFromLocalStorage =()=>{
    const data =JSON.parse(localStorage.getItem("read")) || [];
    return data;
}