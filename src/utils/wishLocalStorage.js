export const saveToWishLocalStorage =(data)=>{
    const savedPreviousData = JSON.parse(localStorage.getItem("wish")) || [];
    const existedCurrentData = savedPreviousData.find((item) => item.id == data.id);
    if (!existedCurrentData) {
        savedPreviousData.push(data);
      localStorage.setItem("wish", JSON.stringify(savedPreviousData));
      alert("Added succesfully  ")
    }
    else{
        alert('this data  stored')
    }
};
export const getFromWishLocalStorage =()=>{
    const data =JSON.parse(localStorage.getItem("wish")) || [];
    return data;
}
