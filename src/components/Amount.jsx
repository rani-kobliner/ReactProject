import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../redux/cartSlice"; 

const Amount = ({ productId, amount }) => {
    const dispatch = useDispatch();

    const increaseAmount = () => {
        dispatch(addProduct({ id: productId }));
    };

    const decreaseAmount = () => {
            dispatch(removeProduct({ id: productId }));
    };

    return (
        <div>
            <button className="amount" onClick={decreaseAmount}>-</button>
            {amount}
            <button className="amount" onClick={increaseAmount}>+</button>
        </div>
    );
};

export default Amount;
