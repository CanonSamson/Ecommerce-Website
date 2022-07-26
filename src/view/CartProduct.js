import { useStateValue } from "./StateProvider";

const CartProduct = ({ id, image, title, price, rating }) => {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        //delete 
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })


    }

    return (
        <div id={id} className="flex my-4 bg-slate-50 items-center p-2 ">
            <img className=" max-h-20 mr-4" src={image} alt="" />
            <div className="">
                <p>{title}</p>

                <div className="">
                    <small>$</small><strong>{price}</strong>

                </div>

                <div className='flex mt-2 '>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (

                            <p>👍🏻</p>
                        ))}
                </div>
                <button onClick={removeFromBasket} className=' bg-[#f0c14b] text-[#111] border-1 px-4  mt-2 rounded font-bold'>Remove From Basket</button>
            </div>
        </div>
    );
}

export default CartProduct;