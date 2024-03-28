import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { FaRegAddressBook } from "react-icons/fa6";
  import { FiMapPin } from "react-icons/fi";
  import { IoSearchCircle } from "react-icons/io5";

const WishListBooks = ({data}) => {
    const {image,bookName,author,category,rating,tags,yearOfPublishing,publisher,totalPages,textColor,categoryBg}=data;
    return (
        <div>
              <Card className="w-full max-w-5xl mx-auto flex-row mt-12">
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
        <CardBody>
          <Typography variant="h2" color="gray" className="mb-4 font-bold text-black">
            {bookName}
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
           By:{author}
          </Typography>
         <div className="flex justify-between items-center gap-6">
         <Typography color="gray" className="mb-8 font-normal ">
     
     <ul className=" flex gap-2 items-center">
     <span className="font-bold text-black">Tag:</span>
     {tags.map((tag, index) => (
         <li key={index} className=" px-2 py-1 rounded-full bg-gray-200 text-[#23BE0A] ">#{tag}</li>
     ))}
 </ul> 
     </Typography>
     <Typography variant="h6" className="mb-5 mt-2 flex flex-row items-center">
     <FiMapPin />

          <span className="ml-2">Year of <br />Publishing:</span><span className="font-bold text-black mt-7">{yearOfPublishing}</span>
        </Typography>
         </div>
<div className="flex gap-10">
<Typography variant="h6" className="mb-5 mt-2 flex  items-center  flex-row "><FaRegAddressBook />
          <span className="ml-2">Publisher:</span><span className="font-bold text-black ">{publisher}</span>
        </Typography>
        
     <Typography variant="h6" className="mb-5 mt-2 flex flex-row items-center">
     <IoSearchCircle />
          <span>Pages:</span><span className="font-bold text-black">{totalPages}</span>
        </Typography>
     
</div>
<hr />
<div className="flex justify-around mt-5">
<Typography  variant="h6" className="mb-2">
           Category:{category}
          </Typography>
<Typography variant="h6" color="blue-gray" className="mb-2">
          Rating:{rating}
          </Typography>
          <Button color="green">View details</Button>
</div>

        </CardBody>
      </Card>
        </div>
    );
};

export default WishListBooks;