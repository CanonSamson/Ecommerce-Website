import { useStateValue } from "./StateProvider";
import RemoveShoppingCart from '@mui/icons-material/RemoveShoppingCart'
import StarIcon from '@mui/icons-material/Star'

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
        <div id={id} className="flex my-4  bg-white items-center p-2 ">
            <img className=" max-h-20 mr-4" src={image} alt="" />
            <div className="">

                <div className="">
                    <small>$</small><strong>{price}</strong>

                </div>
                <p>{title}</p>
                <div className='flex mt-2 '>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (

                            
                            <div className=' text-orange-500'>
                                <StarIcon />
                            </div>
                        ))}
                </div>
                <div className=" p-3 rounded-full bg-gray-50 active:bg-blue-200 float-right " onClick={removeFromBasket} >
                    <RemoveShoppingCart />
                </div>
              
            </div>
        </div>
    );
}

export default CartProduct;