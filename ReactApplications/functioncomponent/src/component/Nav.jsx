import { useContext } from "react";
import {Link} from "react-router-dom";
import CartContext from "../context/CartContext";

//Design routing with Bootstrap library classes
const Nav = () => {
    const {title, mynewcount, cartData} = useContext(CartContext);//Using useContext we can access the data in any where 
    const categories = ["Mens", "Womens", "Kids"];
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
            <div className="container-fluid">
                <Link className="navbar-brand text-white " to="#">Navbar</Link>
                <button className="navbar-toggler  text-white " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <Link className="nav-link active text-white " aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white " to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white " to="/counter">Counter</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white " to="/posts">Posts</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white " to="/users">Users</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white " to="/memo">Memo</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white " to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white " to="/myproducts">Myproducts</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link text-white " to="/contact">Cart {cartData.length > 0 && <span>({cartData.length})</span>}</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Category
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {categories.map((cat, ind) => 
                                    <li><Link className="dropdown-item" to={`/products/${cat}`}>{cat}</Link></li>
                                )}
                                
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;