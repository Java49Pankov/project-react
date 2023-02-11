import { NavigatorProps } from "./NavigatorProps";


export const productsConfig: NavigatorProps = {
    cssClassName: "navigator-list",
    navigatorRouter: [
        { routingPath: "/products/dairy", label: "Dairy Products" },
        { routingPath: "/products/bread", label: "Bread Products" },
    ]
}