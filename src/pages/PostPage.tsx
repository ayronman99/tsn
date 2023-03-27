
import axsFetchHandlerRQHook from "../hooks/axiosFetchRQ.hook";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import pageTitle from "../hooks/pageTitle.hook";

//MUI BELOW
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button, Box, Card, CardContent, CardHeader, CardMedia, Grid, Paper, Tooltip } from "@mui/material";
import Container from "@mui/material/Container";
import LoadingPost from "../components/LoadingPost";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const PostPage = () => {
    const { postId } = useParams();
    const navigator = useNavigate();

    const { data: idPostData, isLoading } = useQuery<PostsDataTypes, ErrorConstructor>({
        queryKey: ['idPostData', `${postId}`],
        queryFn: () => axsFetchHandlerRQHook(`https://dummyapi.io/data/v1/post/${postId}`)
    })

    const { data: commentsData } = useQuery<CommentsDataTypes[], ErrorConstructor>({
        enabled: idPostData?.id != null,
        queryKey: ['commentsData', `${postId}`],
        queryFn: () => axsFetchHandlerRQHook(`https://dummyapi.io/data/v1/post/${postId}/comment`)
    });

    pageTitle(`${idPostData?.text !== undefined ? idPostData?.text : "Post Page"}`);

    const formattedDate = idPostData?.publishDate;
    return (
        <Container maxWidth="lg" sx={{ paddingY: 1, display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: "column" }}>
            <Button onClick={() => navigator(-1)} sx={{position: "absolute", left: {xs: 0, md: 20}}}>
               <ArrowBackIcon />
            </Button>
            {isLoading ?
                <LoadingPost />
                :
                <Grid container justifyContent="center" alignItems="center" sx={{marginTop: {xs: 5 ,md: 0}}}>
                    <Grid item xs={12} md={8} lg={10}>
                        <Paper elevation={6}>
                            <Card sx={{ boxShadow: "none" }}>
                                <CardHeader
                                    avatar={
                                        <Tooltip title={idPostData?.owner?.firstName} placement="top-start">
                                            <Avatar alt={idPostData?.owner?.firstName} src={idPostData?.owner.picture} />
                                        </Tooltip>
                                    }
                                    title={idPostData?.owner.firstName}
                                    subheader={formattedDate?.substring(0, formattedDate.indexOf("T"))}
                                />

                                <CardMedia
                                    component='img'
                                    sx={{ objectFit: "cover", paddingX: 1 }}
                                    height="400"
                                    image={idPostData?.image}
                                />
                                <CardContent sx={{ display: "flex", justifyContent: "space-between", padding: 1 }}>
                                    <Typography variant="subtitle1" sx={{ fontSize: "1.5rem" }} gutterBottom>
                                        ❤️{idPostData?.likes}
                                    </Typography>
                                    <List sx={{ display: "flex", justifyContent: "center" }}>
                                        {idPostData?.tags.map((tagsItem, index) => (
                                            <ListItem key={index} alignItems='center'>{tagsItem}</ListItem>
                                        ))}
                                    </List>
                                </CardContent>
                            </Card>

                            <Box sx={{ marginTop: 1 }}>
                                <List sx={{ width: "100%" }} >
                                    {commentsData?.length !== 0 ? (
                                        commentsData?.map((commentItems) => (
                                            <ListItem alignItems="flex-start" key={commentItems?.id}>
                                                <Card variant="outlined" sx={{ width: "100%", display: "flex" }}>
                                                    <CardHeader
                                                        avatar={
                                                            <Tooltip title={commentItems?.owner?.firstName} placement="top-start">
                                                                <Avatar alt={commentItems?.owner?.firstName} src={commentItems?.owner.picture} />
                                                            </Tooltip>
                                                        }
                                                    />
                                                    <Box component="div" sx={{
                                                        width: "auto",
                                                        padding: 1
                                                    }}>
                                                        <ListItemText
                                                            primary={commentItems?.message}
                                                        />
                                                    </Box>
                                                </Card>
                                            </ListItem>
                                        ))
                                    ) : (
                                        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", paddingY: 2 }}>
                                            <Typography variant="h4">
                                                🤷 No Comment.
                                            </Typography>
                                        </Box>
                                    )
                                    }
                                </List>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>}
        </Container>
    );
}

export default PostPage;