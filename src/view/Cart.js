
import CartProduct from "./CartProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./SubTotal";


const Cart = () => {
    const [{basket}, dispatch] = useStateValue();
    return (

        <div className=" p-2  bg-slate-50  pt-[100px] [height:max-content] sm:grid sm:grid-cols-7 pb-20 sm:grid-rows-6 gap-4">
            <div className=" col-span-5 ">
            <p className=" sm:text-3xl pb-6  mb-3 border-b-2">Shopping Cart</p>
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
        <div className=" col-span-5  sm:col-span-2 sm:row-span-1 ">
        <Subtotal />
        </div>
        </div>
      );
}
 


export default Cart;