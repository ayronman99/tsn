import { Backdrop, FormControl, FormControlLabel, Checkbox, Input, InputLabel, Paper, Typography, Avatar, Button, CircularProgress, FormHelperText } from "@mui/material"
import LockIcon from "@mui/icons-material/Lock"
import { formStyles } from "../styles/LoginStyles";
import { useContext, useEffect, useState } from "react";
import { LoginContext, attachUserAuth } from "../contexts/LoginContext";


const Login = (props: { userCreds: LoginCredentials; }) => {
    const { userCreds } = props;
    const { classes } = formStyles();
    const [isLoading, setIsLoading] = useState(true);
    const { setLogIn, setRememberMe } = useContext(LoginContext) as LoginType;
    const [checkRememberMe, setCheckRememberMe] = useState(false);
    const [userInput, setUserInput] = useState("");
    const [passInput, setPassInput] = useState("");
    const [validUserCreds, setValidUserCreds] = useState<boolean>(true);

    const handleUserInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(evt.target.value);
    }
    const handelPassInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setPassInput(evt.target.value);
    }


    //Consoles here
    console.log(userInput === userCreds.username, passInput === userCreds.password);

    const loginHandler = () => {
        if (userInput !== userCreds.username) return setValidUserCreds(false)
        if (passInput !== userCreds.password) return setValidUserCreds(false)
        if (userInput === userCreds.username && passInput === userCreds.password) {
            setValidUserCreds(true)
            setLogIn(true)
        }
    }

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
    else {
        return (
            <main className={classes.main}>
                <Paper className={classes.paper}>
                    <Avatar>
                        <LockIcon />
                    </Avatar>
                    <Typography variant="h5">Sign In</Typography>

                    <form className={classes.form} onSubmit={evt => {
                        evt.preventDefault();
                        loginHandler();
                    }}>
                        {validUserCreds ? ""  : <FormHelperText id="password-error-text" sx={{ color: "red", textAlign: "center", fontSize:"1.10rem" }}>Username or password is incorrect.</FormHelperText>}

                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input id="username" name="username" onChange={handleUserInput} autoFocus />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" name="password" type="password" current-password="true" onChange={handelPassInput} autoFocus />
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

export default attachUserAuth(Login);