import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataAsyncAction } from "../redux/thunk";
import { deleteProduct, deleteAllProducts } from "../redux/cartSlice";
import TotalPrice from './TotalPrice';
import Amount from './Amount';
import remove from "../assets/trash.png";

const Cart = () => {
    const dispatch = useDispatch();
    const cartList = useSelector(state => state.cart.cartList);
    const [delivery, setDelivery] = useState(false);

    useEffect(() => {
        dispatch(fetchDataAsyncAction());
    }, [dispatch]);

    const totalPrice = () => {
        const subtotal = cartList.reduce((s, p) => s + (p.price * p.amount), 0);
        return delivery ? subtotal + 30 : subtotal; 
    };

    const handleCheckout = () => {
        const confirmCheckout = window.confirm("האם ברצונך לסיים את ההזמנה?");
        if (confirmCheckout) {
            dispatch(deleteAllProducts()); 
        }
    }

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cartList.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Intermediate Sum</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartList.map((product) => {
                            const intermediateSum = product.price * product.amount;
                            return (
                                <tr key={product.id}>
                                    <td>
                                        <img src={product.images[0]} alt={product.title} width="100px" />
                                    </td>
                                    <td>{product.title}</td>
                                    <td>${product.price.toFixed(2)}</td>
                                    <td>
                                        <Amount productId={product.id} amount={product.amount} />
                                    </td>
                                    <td>${intermediateSum.toFixed(2)}</td>
                                    <td>
                                        <button onClick={() => dispatch(deleteProduct(product.id))}>
                                            <img src={remove} alt="remove" width="25" height="25" />  
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
            <br />
            <div className="summary">
                <TotalPrice totalPrice={totalPrice} />
                <label>
                    <input type="checkbox" onChange={() => setDelivery(!delivery)} />
                    Home delivery $30
                </label>
                <br />
                <button onClick={handleCheckout}>Payment and order</button>
            </div>
        </div>
    );
};

export default Cart;