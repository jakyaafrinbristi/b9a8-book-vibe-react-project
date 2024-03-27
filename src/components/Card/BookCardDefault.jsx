import { CiStar } from "react-icons/ci";


const BookCardDefault = ({item}) => {
    const {image,bookName,author,category,rating,tags}=item;
    return (
        <div className="card  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10 w-100 h-56 ">
          <img src={image} />
        </figure>
        <div className="card-body ">
        <ul className="button-list flex gap-8">
        {tags.map((tag, index) => (
            <li key={index} className="button py-1 px-1 bg-base-200 text-[#23BE0A] rounded-full cursor-pointer">{tag}</li>
        ))}
    </ul>
          <h2 className="card-title">{bookName}</h2>
          <p >By: <span className="font-bold">{author}</span> </p>
          <hr />
          <div className="flex justify-between">
            <div >
            <p>{category}</p>
            </div>
            <div className="flex gap-2 items-center">
            <p>{rating}</p>
            <CiStar />

            </div>
          </div>
        </div>
      </div>
    );
};

export default BookCardDefault;