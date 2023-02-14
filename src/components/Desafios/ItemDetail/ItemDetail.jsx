import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetail.css';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export const ItemDetail = ({item})=>{
    const {addProduct} = useContext(CartContext);
    const [, setQuantity] = useState(0);

    const onAdd = (count)=>{
        addProduct(item,count);
        setQuantity(count);
    }

    return(
        <div className='detail-container'>
            <p style={{width: "100%", fontSize: "30px", fontStyle: "italic", color: "black"}}>Detalles de tu Compra</p>
            <div className='img-container'>
                <img src={item.pictureUrl} alt={item.title}/>
            </div>
            <div className='img-container'>
                <h4>{item.title}</h4>
                <h5>$ {item.price}</h5>
            </div>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
            {
                <Link to="/cart">
                <Button class="btn btn-primary">Ir al carrito</Button>
            </Link>
            
            }
        </div>
    )
}