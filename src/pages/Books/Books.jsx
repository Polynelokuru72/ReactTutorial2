import { useState } from "react";

import { BooksModel } from "../../Models/BooksModel";

import SingleBook from "../../components/singleBook/SingleBook";

const Books = () => {
  const [ cartItems,setCartItems ] = useState([])

  const [numberOfCartItems,setNumberOfCartItems] = useState(0);

  const [ price,setPrice ] = useState(0)

  const addToCart = (bookItem) =>{

    setCartItems(prev => [...prev,bookItem])

    setNumberOfCartItems(cartItems.length + 1)

    const customPrices = cartItems.map((item)=>item.price)

    const sumPrices = customPrices.reduce((a,b)=> a+b ,0)

    if(customPrice.length === 0){
      setPrice(bookItem.price)
    }else{
      var sumPrices = customPrices.reduce((a,b)=>a+b, 0)
    }

    setPrice(prev=>sumPrices)

  }

  return (
    <div className="p-[2rem]">
      <div className="text-center">
        <p>
          CART ITEMS {""} {numberOfCartItems}
        </p>
        <p>Total Charge: {""} sh.{price}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:grid-cols-5 ">
        {BooksModel.map((book, index) => (
        <SingleBook book={book} index={index} addToCart={addToCart}/>
        ))}
      </div>
    </div>
  );
};

export default Books;