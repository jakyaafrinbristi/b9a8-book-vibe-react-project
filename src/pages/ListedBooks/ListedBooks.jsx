import { useState } from "react";
import useLocalStorage from "../../Hooks/useLocalStorage";
import ReadBooks from "../../components/ReadBooks/ReadBooks";
import useWishStorage from "../../Hooks/useWishStorage";
import WishListBooks from "../../components/WishListBooks/WishListBooks";



const ListedBooks = () => {
  const { localData } = useLocalStorage();
  // console.log(localData)
  const { wishLocalData } =useWishStorage();
  console.log(wishLocalData)
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <div>
      <div className="bg-gray-200 pt-5 pb-5 container mx-auto">
        <h1 className="text-center text-4xl font-bold">Books</h1>
      </div>
      <div className="flex  ml-7 overflow-x-auto overflow-y-hidden flex-nowrap dark:bg-gray-100 dark:text-gray-800 mt-12">
        <a
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} dark:border-gray-600 dark:text-gray-600`}>

          <span>Reads Books</span>
        </a>
        <a

          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>

          <span>Wishlist Books</span>
        </a>


      </div>
     {
      tabIndex===0 ?
      <>{
        localData.map((data) => <ReadBooks key={data.id} data={data}></ReadBooks>)
      }</>:
      <>{
        wishLocalData.map((data) =><WishListBooks key={data.id}data={data}></WishListBooks>)
      }
      </>

     }
      


    </div>
  );
};

export default ListedBooks;