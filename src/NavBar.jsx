import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home </Link>
                </li>
                <li>
                    <Link to="/about">About </Link>
                </li>
                <li>
                    <Link to="/experience">Resumé/CV </Link>
                </li>
                <li>
                    <Link to="/projects">Projects </Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;