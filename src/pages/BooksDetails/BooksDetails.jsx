import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";

import { useParams } from "react-router-dom";
import useBooksData from "../../Hooks/useBooksData";
import { useEffect, useState } from "react";
import { saveToLocalStorage } from "../../utils/localStorage";
import { saveToWishLocalStorage } from "../../utils/wishLocalStorage";



const BooksDetails = () => {
    const [singleData,setSingleData]=useState(false)
    const {id}=useParams();
    const{data}=useBooksData();
    const handleReadBooks =()=>{
      saveToLocalStorage(singleData) ;
      // console.log('clicked')

    }
    const handleWishListBooks =()=>{
      saveToWishLocalStorage(singleData);
 
      // console.log('clicked me')

    }
    // console.log(singleData)
    useEffect(()=>{
      if(data){
        const singleData=data.find((item)=>item.id == id);
        // console.log(singleData)
        setSingleData(singleData)
      }
    },[data,id])
    if(!singleData) return ""
    const {image,bookName,author,category,rating,tags,review,yearOfPublishing,publisher,totalPages}=singleData || {};
    return (
      
            <Card className="w-full max-w-7xl mx auto mx-auto h-[600px] flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img 
          src={image}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="ml-10">
        <Typography variant="h6" color="gray" className="mb-4 font-bold text-3xl text-black">
          {bookName}
        </Typography>
        <Typography variant="h6" className="mb-5">
          By:{author}
        </Typography>
        <hr />
        <Typography variant="h6" className="mb-5 mt-2">
          {category}
        </Typography>
        <hr />
        <Typography color="gray" className="mb-8 font-normal">
       <span className="font-bold text-black">Review:</span> {review}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
     
        <ul className=" flex gap-8">
        <span className="font-bold text-black">Tag</span>
        {tags.map((tag, index) => (
            <li key={index} className="  text-[#23BE0A] ">{tag}</li>
        ))}
    </ul> 
        </Typography>
        <hr />
        <Typography variant="h6" className="mb-5 mt-2 flex flex-row gap-10">
          <span>Number of Pages:</span><span className="font-bold text-black">{totalPages}</span>
        </Typography>
        <Typography variant="h6" className="mb-5 mt-2 flex flex-row gap-10">
          <span>Publisher:</span><span className="font-bold text-black">{publisher}</span>
        </Typography>
        <Typography variant="h6" className="mb-5 mt-2 flex flex-row gap-10">
          <span>Year of Publishing:</span><span className="font-bold text-black">{yearOfPublishing}</span>
        </Typography>
        <Typography variant="h6" className="mb-5 mt-2 flex flex-row gap-10">
          <span>Rating:</span><span className="font-bold text-black">{rating}</span>
        </Typography>
        <div className="flex gap-5">
        <Button 
        onClick={ handleReadBooks}
        variant="outlined">Read</Button>
        <Button 
        onClick={handleWishListBooks}
        color="blue">wishlist</Button>
        </div>
   
      </CardBody>
    </Card>
        
    );
};

export default BooksDetails;
