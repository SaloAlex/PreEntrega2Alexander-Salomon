import { CartWidget } from "../CartWidget/CartWidget"
import './NavBar.css';
import logo from '../../../assets/grande.png';
import {NavLink, Link} from 'react-router-dom';

export const Navbar = () =>{
    return(
        <nav className='nav-container'>
            <Link to="/">
                <div>
                    <img className="nav-brand" src={logo} alt="logo"/>
                </div>
                
            </Link>
            <div className='navegacion'>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/">Inicio</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos/Terror">Terror</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos/Comedia Romantica">Comedia Romantica</NavLink>
                       <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos/Historia">Historia</NavLink>
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}
