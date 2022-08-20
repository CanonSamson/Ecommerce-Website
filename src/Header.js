import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StoreIcon from '@mui/icons-material/Store'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

import { Link, NavLink } from 'react-router-dom';
import { useStateValue } from './view/StateProvider';



const Header = () => {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="h-[60px] z-30 flex justify-between items-center  bg-gray-50 shadow-xl fixed    w-full z-1 p-2">
            <div className='flex justify-between items-center w-[60%] '>
                <Link to="/" >
                    <p className="w-[100px] my-0 text-gray-50" >Canon </p>
                </Link >
                <div className=" flex  justify-between  items-center bg-white p-2 rounded-lg sm:w-[50%] ">
                    <input className=' focus:outline-none' type="search" placeholder="Search" />
                    <SearchIcon />
                </div>
            </div>

            <div className=" sm:flex hidden text-black justify-evenly">

                <div className=" flex flex-col mx-[10px]   ">
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
                        <span className='ml-3'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
            <div className=' flex justify-between p-5 sm:hidden z-30 fixed w-full bottom-0  bg-white shadow-2xl shadow-black rounded-t-xl '>
                <Link to="/" className=' '>
                    <StoreIcon />
                </Link>
                <Link to="/cart" className=''>
                    <div className=' flex items-center '>
                        <ShoppingBasketIcon />
                        <span className='ml-3'>{basket?.length}</span>
                    </div>
                </Link>
                <Link to="/profile" >
                    <AccountCircleIcon />
                </Link>


            </div>
        </div>
    );
}

export default Header;