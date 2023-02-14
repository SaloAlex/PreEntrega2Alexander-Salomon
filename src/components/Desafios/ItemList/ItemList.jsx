import { Item } from "../Item/Item"
import './ItemList.css';
/* import {Link} from 'react-router-dom';
 */
export const ItemList = ({items})=>{

    return(
        <div className="estilos-listado">
            <div style={{width:"100%", fontSize: "30px", fontStyle: "italic", color: "black"}}>Acompaña el dia con un buen libro</div>
            {
                items.map(producto=>(
                    // <Link key={producto.id} to={`/item/${producto.id}`}>
                        <Item key={producto.id} item={producto}/>
                    // </Link>
                ))
            }
        </div>
    )
}