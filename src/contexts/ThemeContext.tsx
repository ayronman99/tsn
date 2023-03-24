import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { PropsWithChildren, FC, useState, createContext } from "react";
import { ThemeContextType } from "../@types/theme";

export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProviderMain: FC<PropsWithChildren> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const theme = createTheme({
        palette: {
            mode: isDarkMode ? "dark" : "light",
        }
    })

    const toggleThemeMode = () => {
        setIsDarkMode(!isDarkMode)
    };

    return (
        <ThemeContext.Provider value={{isDarkMode: isDarkMode, changeTheme: toggleThemeMode}}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}


export default ThemeProviderMain;