import { NavLink, Outlet } from "react-router-dom";
import { NavigatorProps } from "../../model/NavigatorProps"
import '../navigators/navigators.css'
export const Navigator: React.FC<NavigatorProps> = ({ className, routes }) => {
    return <div>
        <nav>
            <ul className={className}>
                {getNavItems(routes)}
            </ul>
        </nav>
        <Outlet></Outlet>
    </div>
}

function getNavItems(routes: { path: string; label: string }[]): React.ReactNode {
    return routes.map((r, index) => <li className="navigator-item" key={index}>
        <NavLink to={r.path} style={({ isActive }) => getActiveProps(isActive)}>{r.label}</NavLink>
    </li>)
}

function getActiveProps(isActive: boolean): React.CSSProperties {
    let res: React.CSSProperties = {};
    if (isActive) {
        res = { backgroundColor: "blue", color: "white", fontSize: "1.2em" }
    }
    return res;
}