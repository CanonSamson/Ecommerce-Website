import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import StoreIcon from '@mui/icons-material/Store'

const Login = () => {
    return (
        <div className=" bg-gray-50 h-screen items-center flex flex-col  ">
          <div className=" float-left w-full p-5">
          <Link to="/" >
                <StoreIcon/>
            </Link>
          </div>
            <form className=" w-[92%] m-auto bg-white p-4 rounded-lg max-w-[500px]  " > 
                <h1 className=" my-4 font-bold text-xl">Login Page</h1>
                <Input type="text" placeholder="Enter Username" />
                <Input type="password" placeholder="Enter Password" />
                <Link to="" ><p className=" float-right my-2">Forgotten Password?</p></Link>
                <Button value="LogIn" />
                <p className=" text-center my-4"><Link to="/signin">Sign-In</Link></p>
            </form>
          
        </div>
    );
}

export default Login;