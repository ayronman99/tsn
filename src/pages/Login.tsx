import { Backdrop, FormControl, FormControlLabel, Checkbox, Input, InputLabel, Paper, Typography, Avatar, Button, CircularProgress, FormHelperText, Tooltip, IconButton } from "@mui/material"
import { formStyles } from "../styles/LoginStyles";
import { useContext, useEffect, useState } from "react";
import { LoginContext, attachUserAuth } from "../contexts/LoginContext";
import LockIcon from "@mui/icons-material/Lock"
import InfoIcon from '@mui/icons-material/Info';
import cookieMonster from "../hooks/cookieMonster.hook";

const Login = (props: { userCreds: LoginCredentials; }) => {
    const { userCreds } = props;
    const { checkCookiePrelogin } = cookieMonster();
    const { classes } = formStyles();
    const [isLoading, setIsLoading] = useState(true);
    const { setLogIn, setRememberMe, isRememberMe } = useContext(LoginContext) as LoginType;
    const [checkRememberMe, setCheckRememberMe] = useState(false);
    const [userInput, setUserInput] = useState("");
    const [passInput, setPassInput] = useState("");
    const [validUserCreds, setValidUserCreds] = useState<boolean>(true);

    const handleUserInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(evt.target.value.toLocaleLowerCase());
    }
    const handelPassInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setPassInput(evt.target.value.toLocaleLowerCase());
    }

    const loginHandler = () => {
        if (userInput !== userCreds.username) return setValidUserCreds(false)
        if (passInput !== userCreds.password) return setValidUserCreds(false)
        if (userInput === userCreds.username && passInput === userCreds.password) {
            const d = new Date();
            if (isRememberMe) {

                d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
                let expires = "expires=" + d.toUTCString();
                document.cookie = `LongSession=true;${expires}`;

            } else {

                d.setTime(d.getTime() + (15 * 60 * 1000));
                let expires = "expires=" + d.toUTCString();
                document.cookie = `ShortSession=true;${expires}`;

            }
            setValidUserCreds(true)
            setLogIn(true)
        }
    }


    useEffect(() => {
        checkCookiePrelogin();
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

                    <Tooltip title="Username: Marky, Password: Zuckerbergy">
                        <IconButton>
                            <InfoIcon fontSize="large" color="primary" sx={{ "&:hover": { color: "#808a83" }, transition: "all .25s ease-in" }} />
                        </IconButton>
                    </Tooltip>

                    <form className={classes.form} style={{ marginTop: 0 }} onSubmit={evt => {
                        evt.preventDefault();
                        loginHandler();
                    }}>
                        {validUserCreds ? "" : <FormHelperText id="password-error-text" sx={{ color: "red", textAlign: "center", fontSize: "1.10rem" }}>Username or password is incorrect.</FormHelperText>}

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
                            label="Keep Me Logged In"
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