export const saveToLocalStorage = (data) => {
    const savedData = JSON.parse(localStorage.getItem("read")) || [];
    const existedData = savedData.find((item) => item.id == data.id);
    if (!existedData) {
      savedData.push(data);
      localStorage.setItem("read", JSON.stringify(savedData));
      alert("Added succesfully to local storage ")
    }
    else{
        alert('this data already stored')
    }
}
export const getFromLocalStorage =()=>{
    const data =JSON.parse(localStorage.getItem("read")) || [];
    return data;
}