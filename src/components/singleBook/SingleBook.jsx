const SingleBook = ({book,index,addToCart}) => {
  
  return (
    <div key={index} className="border-2 border-green-300 p-[1rem] flex-col justify-center items-center hover:border-green-600">
            <h4 className="text-green-500 font-semibold text-center">{book.title}</h4>
            <div>
              <img src={book.image} alt="" className="w-full" />
            </div>
            <p>{book.description}</p>
            <p>{book.price}</p>
            <button className="px-[2.5rem] py-[0.3rem] border-2 bg-green-300 hover:bg-transparent hover:text-green-500 text-white text-sm" onClick={()=>{
              addToCart(book)
              }}>
                ADD TO CART
            </button>
    </div>
  )
}

export default SingleBook;
