import { Box, Typography } from "@mui/material";
import React from "react";
import { NavigatorProps } from "../../model/NavigatorProps";

export const NavigatorMobile: React.FC<NavigatorProps> = ({ routes }) => {
    //TODO Navigator based on Drower
    return <Box>
        {routes.map(route => <Typography>{JSON.stringify(route)}</Typography>)}
    </Box>
}
