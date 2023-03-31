import { Container, Grid, Typography, Box, Button } from "@mui/material";
import WarningIcon from '@mui/icons-material/Warning';
import { Link } from "react-router-dom";
import ErrorSVG from "../assets/undraw404.svg";

const Error404 = () => {

    return (
        <Box
            component="div"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{ height: "90vh" }}
        >
            <Box
                component="img"
                src={ErrorSVG}
                alt="Error 404"
                sx={{
                    objectFit: "cover",
                    height: "auto",
                    width: "500px"
                }}
            />
            <Box
                component="div"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Typography variant="h2" component="p">
                    Page Not Found!
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "grey" }}>
                    This page doesn't exist or may have to another universe!
                    <br />
                    We suggest for you to go back home
                </Typography>
                <Button variant="outlined">
                    <Link to="/tsn">
                        Let's go Home
                    </Link>
                </Button>
            </Box>

        </Box>
    )
}

export default Error404;