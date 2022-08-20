import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

const Subtotal = () => {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className=" bg-white  p-5">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items);
                            <strong>{value}</strong>
                        </p>
                        <small className=" flex items-center my-2">
                            <input className="mr-2" type="checkbox" /> This order
                            contains a git
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}

            />

            <button className=' bg-blue-800 text-white border-1 px-4 w-full  h-[30px] rounded font-bold'>Proceed to checkout</button>
        </div>
    );
}

export default Subtotal;