

import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import { Box, Tab } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { NavigatorProps } from "../../model/NavigatorProps"
import '../navigators/navigators.css'
import React from "react";
export const Navigator: React.FC<NavigatorProps> = ({ className, routes }) => {

    const [tabNumber, setTabNumber] = React.useState(0);

    function changTabNumber(event: any, newNumber: number) {
        setTabNumber(newNumber);
    }

    return <Box sx={{ marginTop: "15vh" }}>
        <AppBar sx={{ backgroundColor: "lightgray" }}>
            <Tabs value={tabNumber} onChange={changTabNumber}>
                {getNavItems(routes)}
            </Tabs>
        </AppBar>
        <Outlet></Outlet>
    </Box>
}

function getNavItems(routes: { path: string; label: string }[]): React.ReactNode {
    return routes.map((r, index) => <Tab component={Link} to={r.path}
        label={r.label} key={index} />)
}

function getActiveProps(isActive: boolean): React.CSSProperties {
    let res: React.CSSProperties = {};
    if (isActive) {
        res = { backgroundColor: "blue", color: "white", fontSize: "1.2em" }
    }
    return res;
}