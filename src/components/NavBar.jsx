import CarWidget from "../context/Cart/CarWidget"
import "./ItemListContainer.css"
import { Link } from "react-router-dom"


export const NavBar = () => {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <h2 className="navbar-title"><Link className="navbar-item" to={"/"} >Home</Link></h2>
                <ul className="navbar-list">
                    <li><Link className="navbar-item" to={"/"} >Categories</Link></li>
                    <li><Link className="navbar-item" to={"/"} >The new</Link></li>
                    <li><Link className="navbar-item" to={"/"} >Offers</Link></li>
                    <li><Link className="navbar-item" to={"/"} >Gender</Link></li>
                    <li><Link className="navbar-item" to={"/Form"} >Form</Link></li>
                    <li><CarWidget /></li>
                </ul>
            </nav>
        </div>
    )
}




