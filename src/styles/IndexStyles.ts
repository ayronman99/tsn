import { makeStyles } from 'tss-react/mui';

export const indexStyles = makeStyles()((theme) => {
    return {
        root: {
            width: "100%",
            marginBottom: 0,
        },
        main: {
            width: "auto",
            dispaly: "block",
            marginLeft: theme.spacing(3),
            marginRight: theme.spacing(3),
            [theme.breakpoints.up("md")]: {
                width: 400,
                marginLeft: "auto",
                marginRight: "auto"
            }
        },
        paper: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            padding: `${theme.spacing(2)} ${theme.spacing(2)} ${theme.spacing(3)} ${theme.spacing(3)}`
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main
        },
        form: {
            width: "100%",
            marginTop: parseInt(theme.spacing(1)) * 3
        },
        login: {
            marginTop: parseInt(theme.spacing(1)) * 3,
            
        }
    };
});