import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from "./StateProvider"
import StarIcon from '@mui/icons-material/Star'



const Product = ({ title, price, image, rating, id }) => {

    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {

        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div id={id} className=' relative flex flex-col bg-white  w-full min-w-[100px] p-4  max-h-[400px] z-1  [justify-content: flex-end]'>
            <div className='h-[150px] mb-[15px] text-left' >
                <p className=''>{title}</p>
                <div className='flex mt-2 '>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (

                            <div className=' text-orange-500'>
                                <StarIcon />
                            </div>
                        ))}

                </div>
            </div>
            <img className=' max-w-[200px] m-auto w-full [object-fit:contain] mb-[15px]' src={image} alt="" />
            <p className='mt-[5px] mb-20'><small>$</small><strong>{price}</strong></p>
            <div className=' flex justify-center active:bg-blue-200  absolute bottom-5 right-5 bg-gray-100 rounded-full p-5' onClick={addToBasket}>
                <ShoppingBasketIcon />
            </div>
        </div>

    );
}

export default Product;