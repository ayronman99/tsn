
import axsFetchHandlerRQHook from "../hooks/axiosFetchRQ.hook";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import pageTitle from "../hooks/pageTitle.hook";
import PostContent from "../components/pages/PostPage/PostContent";

//MUI BELOW
import { Box, Button, Grid, Container } from "@mui/material";
import LoadingPost from "../components/LoadingPost";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const PostPage = () => {
    const { postId } = useParams();
    const navigator = useNavigate();

    const { data: idPostData, isLoading } = useQuery<PostsDataTypes, ErrorConstructor>({
        queryKey: ['idPostData', `${postId}`],
        queryFn: () => axsFetchHandlerRQHook("get", `https://dummyapi.io/data/v1/post/${postId}`)
    })

    const { data: commentsData } = useQuery<CommentsData, ErrorConstructor>({
        enabled: idPostData?.id != null,
        queryKey: ['commentsData', `${postId}`],
        queryFn: () => axsFetchHandlerRQHook("get", `https://dummyapi.io/data/v1/post/${postId}/comment`)
    });

    pageTitle(`${idPostData?.text !== undefined ? idPostData?.text : "Post Page"}`);

    return (
        <Container maxWidth="lg" sx={{ paddingY: 1, display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: "column" }}>
            <Box component="div">
                <Button onClick={() => navigator(-1)} sx={{ position: "absolute", left: { xs: 0, md: 20 } }}>
                    <ArrowBackIcon />
                </Button>
            </Box>
            {isLoading ?
                <LoadingPost />
                :
                <Grid container justifyContent="center" alignItems="center" sx={{ marginTop: { xs: 5, md: 0 } }}>

                    <PostContent
                        idPostData={idPostData}
                        commentsData={commentsData}
                    />

                </Grid>}
        </Container>
    );
}

export default PostPage;