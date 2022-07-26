import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './view/StateProvider';



const Header = () => {
    const [{basket}, dispatch] = useStateValue();
    return ( 
        <div className="h-[60px] flex items-center bg-[#131921]  sticky w-full z-1 p-2">
            <Link to="/" >
            <img className="w-[100px] my-0 mx-[20px]  mt-[18px] [object-fit: contain]" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link >
            <div className=" flex  flex-1 items-center ">
                <input className=' flex-1' type="text"  />
              <span className='bg-[#cd9042]'>  <SearchIcon /></span>
            </div>

            <div className=" text-white flex justify-evenly">

                <div className=" flex flex-col mx-[10px]  ">
                    <span className=' font-extralight text-xs'>Hello Guest</span>
                    <span className='font-semibold'>Sign In</span>
                </div>

                <div className=" flex flex-col mx-[10px]  font-semibold">
                <span className=' font-extralight text-xs'>Return</span>
                    <span>& Orders</span>
                </div>

                <div className=" flex flex-col mx-[10px]  font-semibold">
                <span className=' font-extralight text-xs'>Your</span>
                    <span>Prime</span>
                </div>
               <Link to="/cart" className=''>
               <div className=' flex items-center '>
                    <ShoppingBasketIcon />
                    <span  className='ml-3'>{basket?.length}</span>

                </div>
               </Link>

            </div>

        </div>
     );
}
 
export default Header;