import { Box, Container, Grid, Link, Paper, Stack, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Groups2Icon from '@mui/icons-material/Groups2';

const Footer = () => {
    return (
        <>
            <Divider sx={{
                border: "3px solid grey"
            }} />

            <Container id="footer" sx={{ backgroundColor: "#f2ebeb" }}>

                <Paper elevation={7}>
                    <Grid container padding={2}>
                        <Grid item xs={12} md={6} >
                            <Box component="div" sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Typography variant="h5" sx={{ display: "flex", alignItems: "center", fontSize: "2rem" }}>
                                    <Groups2Icon sx={{ fontSize: "3rem" }} />
                                    The Social Network
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} >

                            <Box display="flex" justifyContent="space-between" component="div" width="100%" >
                                <Stack spacing={1} width="100%" display="flex" alignItems="center" >
                                    <Typography variant="h6" component="p">Products</Typography>
                                    <Link href="#footer" underline="none" sx={{ color: "#000", "&:hover": { color: "grey" } }}>
                                        Overview
                                    </Link>
                                    <Link href="#footer" underline="none" sx={{ color: "#000", "&:hover": { color: "grey" } }}>
                                        Features
                                    </Link>
                                    <Link href="#footer" underline="none" sx={{ color: "#000", "&:hover": { color: "grey" } }}>
                                        Pricing
                                    </Link>
                                </Stack>
                                <Stack spacing={2} width="100%" display="flex" alignItems="center">
                                    <Typography variant="h6" component="p">Company</Typography>
                                    <Link href="/tsn/about" underline="none" sx={{ color: "#000", "&:hover": { color: "grey" } }}>
                                        About Us
                                    </Link>
                                    <Link href="#footer" underline="none" sx={{ color: "#000", "&:hover": { color: "grey" } }}>
                                        Careers
                                    </Link>
                                    <Link href="/tsn/contact" underline="none" sx={{ color: "#000", "&:hover": { color: "grey" } }}>
                                        Contact
                                    </Link>
                                </Stack>
                                <Stack spacing={2} width="100%" display="flex" alignItems="center">
                                    <Typography variant="h6" component="p">Resources</Typography>
                                    <Link href="#footer" underline="none" sx={{ color: "#000", "&:hover": { color: "grey" } }}>
                                        Blog
                                    </Link>
                                    <Link href="#footer" underline="none" sx={{ color: "#000", "&:hover": { color: "grey" } }}>
                                        Newsletter
                                    </Link>
                                    <Link href="#footer" underline="none" sx={{ color: "#000", "&:hover": { color: "grey" } }}>
                                        Events
                                    </Link>
                                    <Link href="#footer" underline="none" sx={{ color: "#000", "&:hover": { color: "grey" } }}>
                                        Help Centre
                                    </Link>
                                    <Link href="#footer" underline="none" sx={{ color: "#000", "&:hover": { color: "grey" } }}>
                                        Support
                                    </Link>
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
                <Box
                    component="div"
                    display="flex"
                    justifyContent="space-between"
                    padding={2}
                    sx={{flexDirection: {xs: "column", md: "row"}}}
                >
                    <Box
                        component="div"
                    >
                        <Typography variant="h6" component="p">
                            Connect more with The Social Network
                        </Typography>
                        <Typography variant="subtitle1" component="p">
                            Easily find your group and connect with people around the world.
                        </Typography>
                    </Box>
                    <Box
                        component="div"
                    >
                        <Typography variant="subtitle1" component="p">
                            &copy; 2023 The Social Network. All Rights Reserved.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Footer;