interface UAuthContextProp  {
    children: React.ReactNode
}


type loginSetter = Function;

type LoginType = {
    isLoggedIn: boolean,
    setLogIn: loginSetter;
    isRememberMe: boolean;
    setRememberMe: React.Dispatch<React.SetStateAction<boolean>>;
}

type LoginCredentials = {
    username: string;
    password: string;
}