import { Typography, Paper, Card, CardContent, Grid, CardMedia, CardActions, Button, Box } from "@mui/material";
import axsFetchHandlerRQHook from "../hooks/axiosFetchRQ.hook";
import { indexStyles } from "../styles/IndexStyles";
import { Link } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import LoadingIndex from "../components/LoadingIndex";
import pageTitle from "../hooks/pageTitle.hook";
import { useContext, useEffect } from "react";
import { LoginContext } from "../contexts/LoginContext";
import cookieMonster from "../hooks/cookieMonster.hook";

import { useInView } from "react-intersection-observer";


const Index = () => {

    const { isLoggedIn } = useContext(LoginContext) as LoginType;
    const { checkCookiePostlogin } = cookieMonster();
    const { ref, inView } = useInView();

    const {
        status,
        data: postsData,
        error,
        isLoading,
        isFetching,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
    } = useInfiniteQuery(
        ['postsData'],
        async ({ pageParam = 0 }) => {
            return axsFetchHandlerRQHook("get", `https://dummyapi.io/data/v1/post?page=${pageParam}`);
        },
        {
            getNextPageParam: (page) => {
                const currPage = page.page + 1;
                if ((page.total - 673) / page.limit !== currPage) return page.page + 1;
                return;
            }
        }
    );

    pageTitle("TSN | Home");

    const { classes } = indexStyles();

    useEffect(() => {
        if (inView) {
            fetchNextPage({ cancelRefetch: false });
        }
    }, [inView]);

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
                        {postsData?.pages.map((postItems: PostsData, index) => (
                            postItems.data.map((post) => (
                                <Grid item xs={12} key={post.id} paddingX={"auto"} sx={{ marginBottom: "1rem" }}>
                                    <Box component="div" marginX="auto" sx={{ width: { sm: "500px" } }}>
                                        <Link to={`/tsn/p/${post.id}`}>
                                            <Card sx={{ height: "100%", margin: "auto" }}>
                                                <CardMedia
                                                    component='img'
                                                    height='200px'
                                                    image={post.image}
                                                />
                                                <CardContent sx={{ height: 190 }}>
                                                    <Typography sx={{ fontSize: 14, fontWeight: "500" }} component="div">
                                                        {post.owner.firstName}
                                                    </Typography>
                                                    <Typography variant="h5" color="text.secondary" gutterBottom>
                                                        {post.text}
                                                    </Typography>
                                                </CardContent>
                                                <CardActions sx={{ display: "flex", justifyContent: "center", fontSize: 14, fontWeight: "500" }}>
                                                    <Button variant="contained" size="medium">View Post</Button>
                                                </CardActions>
                                            </Card>
                                        </Link>
                                    </Box>
                                </Grid>
                            ))
                        ))}
                    </Grid>
                }

                <Button
                    type="button"
                    variant="contained"
                    ref={ref}
                    onClick={() => fetchNextPage()}
                    disabled={!hasNextPage || isFetchingNextPage}>
                    <Typography variant="subtitle1">
                        {isFetchingNextPage
                            ? "Loading more..."
                            : hasNextPage
                                ? "Load Newer"
                                : "You're all caught up! 😄"}
                    </Typography>
                </Button>

            </Paper>
        </main >
    )
}

export default Index;