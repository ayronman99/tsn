type loginSetter = Function;

type LoginType = {
    isLoggedIn: boolean,
    setLogIn: loginSetter;
    isRememberMe: boolean;
    setRememberMe: React.Dispatch<React.SetStateAction<boolean>>;
}