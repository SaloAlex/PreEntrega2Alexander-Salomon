import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartContext';
import './CartItem.css';
import Button from 'react-bootstrap/Button';

export const CartItem = ({item}) => {
    const {removeProduct} = useContext(CartContext);

    return (
        <div className='cart-item-container'>
            <div className='cart-img-container'>
                <img src={item.pictureUrl} alt={item.title}/>
            </div>
            <div className='cart-info-container'>
                <p>{item.title}</p>
                <p>precio unitario: {item.price}</p>
                <p>cantidad: {item.quantity}</p>
                <p>Precio total: {item.totalPrice}</p>
                <Button class="btn btn-danger" onClick={() => removeProduct(item.id)}>Eliminar Producto</Button>

            </div>
        </div>
    )
}
