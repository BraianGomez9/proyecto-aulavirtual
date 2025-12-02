import "../../main.css"
import { Link } from "react-router";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className='navbar'>
            <Link to="/" className="logo"><h1>Toronja Shop</h1></Link>
            <ul className="menu-nav">
                <li><Link className="menu-link" to="/" onClick={closeMenu}>Inicio</Link></li>
                <li><Link className="menu-link" to="/category/1" onClick={closeMenu}>Categoria 1</Link></li>
                <li><Link className="menu-link" to="/category/2" onClick={closeMenu}>Categoria 2</Link></li>
                <li><Link className="menu-link" to="/category/3" onClick={closeMenu}>Categoria 3</Link></li>
                <li><Link className="menu-link" to="/cart" onClick={closeMenu}>Carrito</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar