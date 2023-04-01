import { Backdrop, FormControl, FormControlLabel, Checkbox, Input, InputLabel, Paper, Typography, Avatar, Button, CircularProgress } from "@mui/material"
import LockIcon from "@mui/icons-material/Lock"
import { formStyles } from "../styles/LoginStyles";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../contexts/LoginContext";


const Login = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [checkRememberMe, setCheckRememberMe] = useState(false);
    const { classes } = formStyles();
    const { setLogIn, setRememberMe } = useContext(LoginContext) as LoginType;

    useEffect(() => {

        function getCookie(cookieNname: string) {
            let name = cookieNname + "=";
            let ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }

        function checkCookie() {
            let user = getCookie("isLoggedIn");
            if (user != "") {
                setLogIn(true)
            }
        }

        checkCookie();
        setIsLoading(false);
    }, [])

    function monitorRememberMe(evt: React.ChangeEvent<HTMLInputElement>) {
        setCheckRememberMe(evt.target.checked);
        setRememberMe(evt.target.checked);
    }

    if (isLoading) {
        return (
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        )
    }
    else
    {
        return (
            <main className={classes.main}>
                <Paper className={classes.paper}>
                    <Avatar>
                        <LockIcon />
                    </Avatar>
                    <Typography variant="h5">Sign In</Typography>

                    <form className={classes.form} onSubmit={evt => {
                        evt.preventDefault();
                        setLogIn(true)
                    }}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input id="email" name="email" autoFocus />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" name="password" autoFocus />
                        </FormControl>
                        <FormControlLabel

                            control={<Checkbox color="primary"
                                checked={checkRememberMe}
                                onChange={monitorRememberMe}
                            />}
                            label="Remember Me"
                        />
                        <Button className={classes.login} variant="contained" type="submit" color="primary" fullWidth
                        >Sign In</Button>
                    </form>
                </Paper>
            </main>
        )
    }
}

export default Login;