const Input = ({ type, placeholder}) => {
    return (  
            <input className=" focus:outline-none focus:border focus:border-blue-200 w-full p-5 my-2 rounded-lg bg-gray-50" type={type}  placeholder={placeholder}  />
    );
}
 
export default Input;