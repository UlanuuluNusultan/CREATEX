import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import "./productDetail.css"
import {getSingleProducts} from "../../redux/slice/SingleProductSlice.js";
import {addItemToCart} from "../../redux/slice/cartSlice.js";

function ProductDetail() {
    const {singleProductsData} = useSelector(
        (state) => state.singleProduct
    );

    const params = useParams();
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getSingleProducts(params.id));
    },[params.id])
    console.log(singleProductsData);

    return (
        <div className="detailBox">
            <div>
                <img style={{width:'400px'}} src={singleProductsData.images?.[0]} />
            </div>

            <div className="detailText">
                <h3>{singleProductsData.title}</h3>
                <p>{singleProductsData.description}</p>
                <h4>{singleProductsData.price}$ <span>{singleProductsData.price+100}$</span></h4>
                <button style={{textDecoration: 'transparent'}} onClick={() => dispatch(addItemToCart(singleProductsData))} className="detailBtn">Добавить в корзину</button>
            </div>
        </div>
    );
}

export default ProductDetail;