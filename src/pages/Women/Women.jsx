import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/slice/ProductSlice";
import { useNavigate } from "react-router-dom";
import "./Women.css"
import {Container} from "../../routes/MainRoutes.jsx";


function Women() {
    const { productsData } = useSelector(
        (state) => state.products
    );

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, []);

    const navigate = useNavigate();

    return (
        <Container>
            <h1 className="shopH1">Магазин</h1>
            <div className="shopBox">
                {productsData.slice(0, 9).map((el) => {
                    return (
                        <div key={el.id}>
                            <div onClick={() => navigate(`/product/${el.id}`)} className="shopBlock">
                                <img style={{ width: '298px', height: '458px', borderRadius: '6px' }} src={el.images[0]} alt={el.title} />
                                <h1>{el.title}</h1>
                                <h4>{el.price}$</h4>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Container>
    );
}

export default Women;
