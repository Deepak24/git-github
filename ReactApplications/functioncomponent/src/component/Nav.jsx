import {Link} from "react-router-dom";

//Design routing with Bootstrap library classes
const Nav = () => {
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
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;