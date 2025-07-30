import { useDispatch, useSelector } from "react-redux";
import loadingIcon from '../assets/Spinner-1s-200px.gif';
import { useEffect } from "react";
import { fetchDataAsyncAction } from "../redux/thunk";
import { addProduct } from "../redux/cartSlice"; 
import { useNavigate } from "react-router-dom";
import add from "../assets/shopping-cart-add.png"

const Products = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { productsList, loading } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(fetchDataAsyncAction());
    }, [dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addProduct(product));
        navigate("/Cart"); 
    };

    return (
        <div>
            {loading && <img src={loadingIcon} alt="Loading" width="250px" height="250px" />}
            {productsList && productsList.length > 0 ? (
                <div className="products-list">
                    {productsList.map((product, index) => (
                        <div className="product-card" key={index}>
                            <img src={product.images[0]} alt={product.title} width="80px" height="120px" />
                            <h3>{product.title.length > 0 ? product.title.substring(0, 10) + '...' : product.title}</h3>
                            <p>{product.description.length > 0 ? product.description.substring(0, 50) + '...' : product.description}</p>
                            <p className="price">${product.price}</p>
                            <button onClick={() => handleAddToCart(product)}><img src={add} alt="add" width="25" height="25"/></button> 
                        </div>
                    ))}
                </div>
            ) : (
                !loading && <p>No products available</p>
            )}
        </div>
    );
};

export default Products;
