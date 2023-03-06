import { authActions } from "../../redux/authSlice";
import { useDispatch } from 'react-redux'
import React from "react";
import { AuthService } from '../../service/AuthService';
import { LoginForm } from "../forms/LoginForm";
import { Alert, Box, Collapse, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export const Login: React.FC = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');
    const authService = new AuthService();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setOpen(false);
        const data = new FormData(event.currentTarget);
        const username = data.get('email')?.toString() || '';

        console.log({
            email: username,
            password: data.get('password'),
        });
        try {
            authService.login({
                username,
                password: data.get('password')?.toString() || '',
            })
            dispatch(authActions.login(username))
        } catch (error) {
            if (error === "User not found") {
                setOpen(true);
                setErrorMessage(error);
            }
        }
    };
    return <Box>
        <Collapse in={open}>
            <Alert severity="error" sx={{ mb: 2 }} action={
                <IconButton aria-label="close" color="inherit" size="small"
                    onClick={() => { setOpen(false) }}>
                    <CloseIcon fontSize="inherit" />
                </IconButton>
            }>
                {errorMessage}
            </Alert>
        </Collapse>
        <LoginForm handlerSubmit={handleSubmit}></LoginForm>
    </Box>
}