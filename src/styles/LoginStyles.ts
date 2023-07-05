import { makeStyles } from 'tss-react/mui';

export const formStyles = makeStyles()((theme) => {
    return {
        root: {
            width: "100%",
            marginBottom: 0,
        },
        main: {
            width: 400,
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
        },
        paper: {
            marginTop: theme.spacing(4),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
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