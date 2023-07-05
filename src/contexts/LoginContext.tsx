import { createContext, PropsWithChildren, useState } from "react"

export const LoginContext = createContext<LoginType | unknown>(false);
export const userLogsContext = createContext<LoginCredentials>({ username: "marky", password: "zuckerbergy" });

export const LoginContextCont = ({children} : UAuthContextProp) => {
    const [loginState, setLoginState] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const setLogin = (state: boolean) => {
        setLoginState(state);
    }

    return (
        <LoginContext.Provider value={{ isLoggedIn: loginState, setLogIn: setLogin, isRememberMe: rememberMe, setRememberMe }}>
            {children}
        </LoginContext.Provider>
    )
}

export const attachUserAuth = (Component:  React.ElementType) => (props: PropsWithChildren) => {
    return (
        <userLogsContext.Consumer>
            {dataVal =>  <Component userCreds={dataVal} {...props} />}
        </userLogsContext.Consumer>

    )
}