
import { useStateValue } from "./StateProvider"


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
        <div id={id} className=' flex flex-col bg-white items-center w-full m-[10px]  min-w-[100px] p-4  max-h-[400px] z-1  [justify-content: flex-end]'>
            <div className='h-[150px] mb-[15px] text-left' >
                <p className=''>{title}</p>
                <p className=' mt-[5px]'><small>$</small><strong>{price}</strong></p>
                <div className='flex mt-2 '>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (

                            <p>👍🏻</p>
                        ))}

                </div>
            </div>
            <img className=' max-w-[200px] w-full [object-fit:contain] mb-[15px]' src={image} alt="" />
            <button onClick={addToBasket} className=' bg-[#f0c14b] text-[#111] border-1 px-4 font-bold'> Add to Basket</button>
        </div>

    );
}

export default Product;