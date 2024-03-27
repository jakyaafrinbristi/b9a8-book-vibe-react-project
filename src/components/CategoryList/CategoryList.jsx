import useBooksData from "../../Hooks/useBooksData";
import BookCardDefault from "../Card/BookCardDefault";


const CategoryList = () => {
    const {data} =useBooksData();
    console.log(data)
    return (
    
        <div >
            <div className="text-center mt-12 mb-5 font-bold text-4xl"><h1>Books</h1>
          </div> 
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-10">
            
         
         {
             data.map((item)=>(<BookCardDefault key={item.id} item={item}></BookCardDefault>))
         }
            </div>
        </div>
      
    );
};

export default CategoryList;
