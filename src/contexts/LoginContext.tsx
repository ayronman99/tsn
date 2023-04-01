import { createContext, PropsWithChildren, useState } from "react"
export const LoginContext = createContext<LoginType | unknown>(false);

export const LoginContextCont = (props: PropsWithChildren) => {
    const [loginState, setLoginState] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const setLogin = (state: boolean) => {
        setLoginState(state);
    }

    return (
        <LoginContext.Provider value={{isLoggedIn: loginState, setLogIn: setLogin, isRememberMe:rememberMe, setRememberMe}}>
            {props.children}
        </LoginContext.Provider>
    )
}