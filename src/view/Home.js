import bg from '../image/bg.jpg'
import css from './css.module.css'
import Product from './Product';
import proimg from '../image/shoe-silhouette-logo-design-circle-260nw-2050855463.webp'
import img1 from '../image/african-american-woman-face-profile-and-afro-curly-vector-30114469.jpg'
import img2 from '../image/zafrica-199827487.jpg'


const Home = () => {
    return (
        <div className=' bg-slate-50 flex justify-center mx-auto max-w-[1500px]  min-w-[900px]'>
            <div>
                <img className={css.bg} src={bg} alt="" />
                <div className=' flex mx-[5px] z-1'>
                    <Product id={123} title="Nike SB Dunk Low pro man's Skateboarding Shoes 
            Low Cut Outdoor Waling jogging Woman Sneakers Lace Up Athltic Shoes " price="19,00" image={proimg} rating={4} />
                    <Product id={12} title="Nike SB Dunk Low pro man's Skateboarding Shoes 
                    Low Cut Outdoor Waling jogging Woman Sneakers Lace Up Athltic Shoes " price="19,00" image={proimg} rating={5} />


                </div>
                <div className=' flex mx-[5px] z-1'>
                    <Product id={23} title="Nike SB Dunk Low pro man's Skateboarding Shoes 
                    Low Cut Outdoor Waling jogging Woman Sneakers Lace Up Athltic Shoes " price="19,00" image={proimg} rating={2} />
                    <Product id={13} title="Nike SB Dunk Low pro man's Skateboarding Shoes 
                    Low Cut Outdoor Waling jogging Woman Sneakers Lace Up Athltic Shoes " price="19,00" image={img2} rating={4} />
                    <Product id={1223} title="Nike SB Dunk Low pro man's Skateboarding Shoes 
                    Low Cut Outdoor Waling jogging Woman Sneakers Lace Up Athltic Shoes " price="19,00" image={proimg} rating={5} />

                </div>
                <div className=' flex mx-[5px] z-1'>
                    <Product id={1233} title="Nike SB Dunk Low pro man's Skateboarding Shoes 
                    Low Cut Outdoor Waling jogging Woman Sneakers Lace Up Athltic Shoes " price="19,00" image={img1} rating={5} />
                </div>
            </div>
        </div>
    );
}


export default Home;