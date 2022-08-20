
import css from './css.module.css'
import Product from './Product';
import proimg from '../image/TJHI2322.JPG'
import img1 from '../image/HBVZ8463.JPG'
import img2 from '../image/IBYB0710.JPG'
import img3 from '../image/QLNB2067.JPG'
import img4 from '../image/LZMC2316.JPG'
import img5 from '../image/IMG_E7310.JPG'
import boog from '../image/boog.svg'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';


const Home = () => {
    const items = [
        {
            id: 23,
            name: '',
            image: proimg,
            title: "Nike Cosmic Unity 2.0",
            price: "16.00",
            rating: 3,
        },
        {
            id: 213,
            name: '',
            image: img1,
            title: "Nike Cosmic Unity 2.0",
            price: "1.00",
            rating: 4,
        },
        {
            id: 203,
            name: '',
            image: img2,
            title: "Nike Air Zoom GT Cut 2.0",
            price: "19.00",
            rating: 3,
        },
        {
            id: 2003,
            name: '',
            image: img3,
            title: "Nike Air Zoom GT Cut 2.0",
            price: "19.00",
            rating: 3,
        },
        {
            id: 2003,
            name: '',
            image: img4,
            title: "Nike Air Zoom GT Cut 2.0",
            price: "19.00",
            rating: 3,
        },
        {
            id: 20003,
            name: '',
            image: img5,
            title: "Nike Air Zoom GT Cut 2.0",
            price: "19.00",
            rating: 3,
        },
    ]
    return (
        <div className=' bg-slate-50 flex-col flex justify-center mx-auto max-w-[1500px] pb-20 '>
            <div className='   flex pt-[90px] items-center mb-20 justify-between w-[95%] m-auto'>
                <div className='z-20 sm:w-[50%]'>
                    <h1 className=' text-4xl sm:text-5xl text-blue-800 font-bold'>SHOP FROM<br /> OUR  COLLECTIONS</h1>
                    <p className='py-10'>Boost your Productivity and build your mood with a glass of coffee in the morning</p>
                    <div>
                        <div className=' flex items-center'>
                            <Link to="/login"  >
                                <div className=' flex items-center animate-bounce bg-blue-800 text-white p-2 rounded-xl '>
                                    <p className='mr-5'>SIGN-UP</p>
                                    <ShoppingBasketIcon />
                                </div>
                            </Link>
                            <p className=' ml-10'>More menu</p>
                        </div>
                    </div>
                </div>
                <div className=' absolute z-10 opacity-5 sm:opacity-100 sm:relative flex justify-end sm:w-[50%]'>
                    <img className='w-[70%]' src={boog} at="" />

                </div>
            </div>
            <div className='sm:hidden overflow-x-auto my-5 w-[100%]'>

                <div className='  mx-[5px] flex w-[820px] items-center gap-5 z-20'>
                    {
                        items.map((items) => (
                            <div key={items.id} className=' w-[200px] relative flex flex-col bg-white min-w-[100px] p-4  max-h-[400px] z-1  [justify-content: flex-end]'>
                                <div className='h-[70px]  text-left' >
                                    <p className=''>{items.title}</p>
                                </div>
                                <img className=' max-w-[200px] m-auto w-full [object-fit:contain] ' src={items.image} alt="" />
                                <p className='mt-[5px]'><small>$</small><strong>{items.price}</strong></p>
                            </div>
                        ))
                    }

                </div>
            </div>
            <nav className='flex px-5 py-3 justify-between'>
                <p>COLLECTIONS</p>
                <p className='bg-blue-800 p-1 text-white rounded-lg'>Sneakers</p>
                <p>Comrade T-Shirt</p>
            </nav>
            <div className=' w-full mx-[5px] grid sm:grid-cols-3 gap-5 z-20'>
                {
                    items.map((items) => (
                        <Product {...items} />
                    ))
                }
            </div>

        </div>
    );
}


export default Home;