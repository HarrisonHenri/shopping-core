import { useCallback } from "react";
import reduxStore from "store/reduxStore";
import product from "home/product";

const Checkout = () => {

  const handleClick = useCallback(
    (payload: Product) => {
      reduxStore.dispatch({ type: "ADD_ITEM", payload });
    },
    [],
  )
    console.log(product)

    return (
    <div style={{border: '5px dashed #ffc72c'}}>
      <div className="flex mt-10 mb-5" >
        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5"> Product Details </h3>
        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center"> Price</h3>
      </div>
      <div className="product-images">
        {(product as Product[]).map(({image, name, price, description})=>(
        
        <div id="item"  className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div className="flex">
              <img src={image} className='h-28' alt={description} style={{maxWidth:'100%'}} />
          </div>

          <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="font-bold text-sm">${name}</span>
              <span className="text-sm w-80">${description}</span>
          </div>


          <div className="text-center w-1/5">
            <button id="addItem" onClick={handleClick.bind(null, {image, name, price, description})} className=" text-gray text-sm px-4 py-2  border rounded-full">Add to cart</button>
          </div>


          <span className="text-center w-1/5 font-semibold text-sm">$${price}</span>
        </div>
        
        ))}
      </div>
    </div>
  );
};

export default Checkout;
