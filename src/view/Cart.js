
import CartProduct from "./CartProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./SubTotal";


const Cart = () => {
    const [{basket}, dispatch] = useStateValue();
    return (

        <div className=" p-2 ro bg-white [height:max-content] grid grid-cols-7 grid-rows-6 gap-4">
            <div className=" col-span-5 ">
            <p className=" text-3xl pb-6  mb-3 border-b-2">Shopping Cart</p>
                <div>
                    {
                 

                        basket.map((item) => (
                            <CartProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                             />
                        ))
                    }
                </div>
            </div>
        <div className=" col-span-2 row-span-1 ">
        <Subtotal />
        </div>
        </div>
      );
}
 


export default Cart;