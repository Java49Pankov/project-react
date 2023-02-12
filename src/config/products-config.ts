import { NavigatorProps } from "../model/NavigatorProps";
export const productsConfig: NavigatorProps = {
    className: 'navigator-list-submenu',
    routes: [
        { path: '/products/bread', label: "Bread Products" },
        { path: '/products/dairy', label: "Dairy Products" }
    ]
}