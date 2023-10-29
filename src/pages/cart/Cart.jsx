import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decgreaseQuantity, increaseQuantity, deleteItem} from "../../redux/slice/cartSlice";
import {Link} from "react-router-dom";
import "./Cart.css"

function Cart() {
    const dispatch = useDispatch();

    const handledecgreaseQuantity = (item) => {
        dispatch(decgreaseQuantity(item));
    };

    const handleIncreaseQuantity = (item) => {
        dispatch(increaseQuantity(item));
    };

    const handleDeleteItem = (item) => {
        dispatch(deleteItem(item.id));
    };

    const {cartData} = useSelector((state) => state.cart)
    console.log(cartData);

    const total = cartData.reduce((total, el)=> {
        return total + el.price * el.count;
        return total + el.totalPrice;
    },0)


    return (
        <div>
            <h1 className="CartText">Корзина</h1>
            <div className="CartTextRow">
                <h4 className="cartTovar">Товар</h4>
                <h4 className="cartSena">Цена</h4>
                <h4>Количество</h4>
                <h4 className="cartAll">Всего</h4>
            </div>
            <hr className="hr"/>
            <div className="CartTextRow">
                <div className="cartTextRow4">
                    {cartData.map((el) => {
                        return (
                            <>
                                <img src={el.images[0]} height={100}/>
                                <h5 className="cartTitle">{el.title}</h5>
                                <h5 className="cartPrice">{el.price}$</h5>
                                <div className="cartIngr">
                                    <button onClick={() => handleIncreaseQuantity(el)}>+</button>
                                    <p>{el.count}</p>
                                    <button onClick={() => handledecgreaseQuantity(el)}>-</button>
                                </div>
                                <h5 className="cartAllPrice">{el.totalPrice}$</h5>
                                <h5 onClick={() => handleDeleteItem(el)} className="ion"> <ion-icon name="trash-outline"></ion-icon></h5>
                            </>
                        )
                    })}
                </div>

            </div>


            <div className="CartTextRow2">
                <h4 className="cartTotal">Total Price: {total} $</h4>
                <button className="cartBtn">Оформить заказ</button>
                <Link to="/shop"><button className="cartBtn">Посмотреть коллекцию</button></Link>
            </div>
        </div>
    );
}

export default Cart;