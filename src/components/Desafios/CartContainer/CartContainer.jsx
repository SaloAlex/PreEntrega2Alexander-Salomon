import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export const CartContainer = () => {
  const {productCartList, clearProductCartList} = useContext(CartContext);

  return (
    <div>
      <p style={{width: "100%", fontSize: "30px", fontStyle: "italic", color: "black"}}>Contenido de tu carrito</p>
      <div>
        {
          productCartList.length>0 ?
          <>
            {
              productCartList.map(item=>(
                <CartItem key={item.id} item={item}/>
              ))
            }
            <hr/>
            <Button class="btn btn-danger" onClick={clearProductCartList}>Vaciar el Carrito</Button>

          </>
          :
          <p>No has agregado productos</p>
        }
      </div>
    </div>
  )
}
