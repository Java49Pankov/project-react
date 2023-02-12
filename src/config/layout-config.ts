import { NavigatorProps } from "../model/NavigatorProps";
export const layoutConfig: NavigatorProps = {
    className: 'navigator-list',
    routes: [
        { label: 'Home', path: '/' },
        { label: 'Customers', path: '/customers' },
        { label: 'Orders', path: '/orders' },
        { label: 'Products', path: '/products' }
    ]
}