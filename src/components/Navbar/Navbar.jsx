import "../../main.css"
import { Link, useNavigate } from "react-router";
import { useState, useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import { CartContext } from "../../context/CartProvider";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { currentUser, logout } = useContext(UserContext);

    const { cart } = useContext(CartContext);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navigate = useNavigate()

    const closeMenu = () => {
        setIsOpen(false);
    };

    const handleLogout = () => {
        logout();
        navigate("/login");
    }


    const totalItems = cart.reduce((acc, item) => acc + item.cantidad, 0);

    const cartBadge = totalItems > 5 ? "+5" : totalItems;


    return (
        <nav className='navbar'>
            <Link to="/" className="logo"><h1>Toronja Shop</h1></Link>

            <ul className="menu-nav">
                <li><Link className="menu-link" to="/" onClick={closeMenu}>Inicio</Link></li>
                <li><Link className="menu-link" to="/category/1" onClick={closeMenu}>Categoria 1</Link></li>
                <li><Link className="menu-link" to="/category/2" onClick={closeMenu}>Categoria 2</Link></li>
                <li><Link className="menu-link" to="/category/3" onClick={closeMenu}>Categoria 3</Link></li>
                <li className="cart-link">
                    <Link className="menu-link" to="/cart" onClick={closeMenu}>
                        <p>Carrito {totalItems > 0 && (
                            <span className="cart-badge">
                                {cartBadge}
                            </span>
                        )}</p>


                    </Link>
                </li>



                {currentUser?.username === "admin" && (
                    <li>
                        <Link className="menu-link" to="/admin/altaproductos" onClick={closeMenu}>
                            Crear Producto
                        </Link>
                    </li>
                )}


                {currentUser ? (
                    <>
                        <li className="menu-link user-info">
                            Hola, <strong>{currentUser.username}</strong>
                        </li>

                        <li>
                            <button
                                onClick={handleLogout}
                                className="menu-link"
                                style={{
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer"
                                }}
                            >
                                Cerrar sesión
                            </button>
                        </li>
                    </>
                ) : (
                    <li>
                        <Link className="menu-link" to="/login" onClick={closeMenu}>
                            Iniciar sesión
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
