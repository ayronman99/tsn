import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";


const cookieMonster = () => {
    const { setLogIn } = useContext(LoginContext) as LoginType;
    let user: string | undefined;
    let shortSesh = getCookieName("ShortSession");
    let longSesh = getCookieName("LongSession");

    const seshValidator = shortSesh === "ShortSession" || longSesh === "LongSession";
    function getCookieName(name: string) {
        const value = "; " + document.cookie;
        const parts = value.split("; ").find((row) => row.startsWith(`${name}=`))?.split("=")[0];
        return parts;
    }

    function checkCookiePrelogin() {
        try {
            if (seshValidator) {
                setLogIn(true)
            }
            else {
                setLogIn(false)
            }

        }
        catch (e) {
            console.error(e);
        }
    }


    function checkCookiePostlogin() {
        try {
            if (longSesh === "LongSession") return;
            if (shortSesh === "ShortSession") {
                const d = new Date();
                d.setTime(d.getTime() + (15 * 60 * 1000));
                let expires = "expires=" + d.toUTCString();
                document.cookie = `ShortSession=true;${expires}`;
            }
            else {
                setLogIn(false)
            }

        }
        catch (e) {
            console.error(e);
        }
    }

    return { checkCookiePrelogin, checkCookiePostlogin };
}


export default cookieMonster;