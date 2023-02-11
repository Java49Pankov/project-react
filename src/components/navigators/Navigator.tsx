import { NavLink, Outlet } from 'react-router-dom';
import { NavigatorProps } from "../../models/NavigatorProps";
import './navigators.css'

type Props = {
    navigatorProps: NavigatorProps;
}

export const Navigator: React.FC<Props> = ({ navigatorProps }) => {

    function getListItem(): JSX.Element[] {
        let result = navigatorProps.navigatorRouter.map(element => {
            return <li className="navigator-item">
                <NavLink style={({ isActive }) => activeLink(isActive)} to={element.routingPath}>{element.label}</NavLink>
            </li>
        })
        return result;
    }

    function activeLink(isActive: boolean): React.CSSProperties | undefined {
        let result: React.CSSProperties = {};
        if (isActive) {
            result = { backgroundColor: "blue", color: "white" }
        }
        return result;
    }

    return <div>
        <nav>
            <ul className={navigatorProps.cssClassName}>
                {getListItem()}
            </ul>
        </nav>
        <Outlet></Outlet>
    </div>
}