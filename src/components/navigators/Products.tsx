import { NavLink, Outlet } from "react-router-dom"

export const Products: React.FC = () => {
    return <div>
        <nav>
        <ul className="navigator-list">
                <li className="navigator-item">
                    <NavLink to="/products/dairy">Dairy Products</NavLink>
                </li>
                <li className="navigator-item">
                    <NavLink to="/products/bread">Bread Products</NavLink>
                </li>
                

            </ul>
        </nav>
        <Outlet></Outlet>
    </div>
} 