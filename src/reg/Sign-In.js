import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import StoreIcon from '@mui/icons-material/Store'


const SignIn = () => {
    return (
        <div className=" bg-gray-50 h-screen items-center flex flex-col  ">
            <div className=" float-left w-full p-5">
                <Link to="/" >
                    <StoreIcon />
                </Link>
            </div>
            <form className=" w-[92%] m-auto bg-white p-4 rounded-lg max-w-[500px]  " >
                <h1 className=" my-4 font-bold text-xl">SignIn Page</h1>
                <Input type="text" placeholder="Enter Username" />
                <Input type="tel" placeholder="Enter Phone Number" />
                <Input type="text" placeholder="Enter Home Address" />
                <div className=" grid grid-cols-2 gap-2">
                    <Input type="password" placeholder="Enter Password" />
                    <Input type="password" placeholder="Confirm Password" />
                </div>
                <Button value="SignIn" />
                <p className=" text-center my-4"><Link to="/login">Log-In</Link></p>
            </form>

        </div>
    );
}

export default SignIn;