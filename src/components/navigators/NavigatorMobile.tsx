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
        const curTitle = routes.find(route => route.path === location.pathname)
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
        <AppBar>
            <Tabs value={tabNumber >= routes.length ? 0 : tabNumber} onChange={changeTabNumber} >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {pageTitle}
                    </Typography>
                </Toolbar>
            </Tabs>
        </AppBar>
        <Box>
            <SwipeableDrawer open={mobileOpen} onClose={(handleDrawerToggle)} onOpen={handleDrawerToggle}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}>
                {drawer}
            </SwipeableDrawer>
        </Box>
        <Box component="main" sx={{ flexGrow: 1, p: 3, width: { md: `calc(100% - ${drawerWidth}px)` } }}>
            <Toolbar />
            <Typography>
                <Outlet></Outlet>
            </Typography>
        </Box>
    </Box>
}



