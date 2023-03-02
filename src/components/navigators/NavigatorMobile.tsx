import React, { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import {
    Box, Typography, AppBar, Divider, Drawer, IconButton,
    List, Toolbar, Tab, Tabs, SwipeableDrawer
} from "@mui/material";
import { NavigatorProps } from "../../model/NavigatorProps";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240

export const NavigatorMobile: React.FC<NavigatorProps> = ({ routes }) => {
    const [tabNumber, setTabNumber] = React.useState(0);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [pageTitle, setPageTitle] = useState('Home');

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const navigate = useNavigate();
    useEffect(() => {
        if (routes.length != 0) {
            navigate(routes[0].path)
        }
        setTabNumber(0)

    }, [routes]);

    function changeTabNumber(event: any, newNumber: number) {
        setTabNumber(newNumber);
    }

    function getNavItems(routes: { path: string; label: string }[]): React.ReactNode {
        return routes.map((r, index) => <Tab component={Link} to={r.path}
            label={r.label} key={index} onClick={() => setMobileOpen(false)} />)
    }

    const location = useLocation();
    useEffect(() => {
        const curTitle = routes.find(item => item.path === location.pathname)
        if (curTitle && curTitle.label) {
            setPageTitle(curTitle.label)
        }
    }, [location])

    const drawer = (
        <Box>
            <Toolbar />
            <Divider />
            <List>
                {getNavItems(routes)}
            </List>
            <Divider />
        </Box>
    );

    return <Box sx={{ display: 'flex' }}>
        <AppBar position="fixed" sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
        }}>
            <Tabs value={tabNumber >= routes.length ? 0 : tabNumber} onChange={changeTabNumber} >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {pageTitle}
                    </Typography>
                </Toolbar>
            </Tabs>
        </AppBar>
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders">
            <SwipeableDrawer
                variant="temporary"
                open={mobileOpen}
                onClose={(handleDrawerToggle)}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }} onOpen={handleDrawerToggle}>
                {drawer}
            </SwipeableDrawer>
            <Drawer variant="permanent" sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }} open>
                {drawer}
            </Drawer>
        </Box>
        <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
            <Toolbar />
            <Typography paragraph>
                <Outlet></Outlet>
            </Typography>
        </Box>
    </Box>
}



