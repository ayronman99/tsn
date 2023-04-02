import { Typography, Paper, Card, CardContent, Grid, CardMedia, CardActions, Button } from "@mui/material";
import axsFetchHandlerRQHook from "../hooks/axiosFetchRQ.hook";
import { indexStyles } from "../styles/IndexStyles";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import LoadingIndex from "../components/LoadingIndex";
import pageTitle from "../hooks/pageTitle.hook";
import { useContext, useEffect } from "react";
import { LoginContext } from "../contexts/LoginContext";
import cookieMonster from "../hooks/cookieMonster.hook";



const Index = () => {

    const { isLoggedIn, isRememberMe, setLogIn } = useContext(LoginContext) as LoginType;
    const { checkCookiePostlogin } = cookieMonster();

    const { data: postsData, isLoading } = useQuery<PostsDataTypes[], ErrorConstructor>({
        queryKey: ['postsData'],
        queryFn: () => axsFetchHandlerRQHook("https://dummyapi.io/data/v1/post?limit=20"),
        staleTime: 30000
    });

    pageTitle("TSN | Home");

    const { classes } = indexStyles();

    useEffect(() => {
        checkCookiePostlogin();
    }, [isLoggedIn])

    return (
        <main className={classes.root}>
            <Paper className={classes.paper}>
                <Typography variant="h1" sx={{ fontSize: "2.5rem", paddingY: 2 }}>
                    The Social Network
                </Typography>
                {isLoading ?
                    <LoadingIndex />
                    :
                    <Grid container spacing={3}>
                        {postsData?.map((postItems: PostsDataTypes) => (
                            <Grid item xs={12} md={4} lg={3} xl={2} key={postItems.id} sx={{ width: "300px", marginBottom: "1rem" }}>
                                <Link to={`/tsn/p/${postItems.id}`}>
                                    <Card sx={{ height: "100%" }}>
                                        <CardMedia
                                            component='img'
                                            height='200px'
                                            image={postItems.image}
                                        />
                                        <CardContent sx={{ height: 190 }}>
                                            <Typography sx={{ fontSize: 14, fontWeight: "500" }} component="div">
                                                {postItems.owner.firstName}
                                            </Typography>
                                            <Typography variant="h5" color="text.secondary" gutterBottom>
                                                {postItems.text}
                                            </Typography>
                                        </CardContent>
                                        <CardActions sx={{ display: "flex", justifyContent: "center", fontSize: 14, fontWeight: "500" }}>
                                            <Button variant="contained" size="medium">View Post</Button>
                                        </CardActions>
                                    </Card>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                }

            </Paper>
        </main>
    )
}

export default Index;