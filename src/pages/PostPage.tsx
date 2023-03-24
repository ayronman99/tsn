
import axsFetchHandlerRQHook from "../hooks/axiosFetchRQ.hook";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
//MUI BELOW
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box, Card, CardContent, CardHeader, CardMedia, Grid, Paper, Tooltip } from "@mui/material";
import Container from "@mui/material/Container";


const PostPage = () => {
    const { postId } = useParams();

    const { data: idPostData, isLoading } = useQuery<PostsDataTypes, ErrorConstructor>({
        queryKey: ['idPostData', `${postId}`],
        queryFn: () => axsFetchHandlerRQHook(`https://dummyapi.io/data/v1/post/${postId}`)
    })

    const { data: commentsData } = useQuery<CommentsDataTypes[], ErrorConstructor>({
        enabled: idPostData?.id != null,
        queryKey: ['commentsData', `${postId}`],
        queryFn: () => axsFetchHandlerRQHook(`https://dummyapi.io/data/v1/post/${postId}/comment`)
    });

    if (isLoading) {
        return (
            <p>Please wait...</p>
        )
    }
    else {
        return (
            <Container maxWidth="md" sx={{  paddingY: 1, display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: "column" }}>
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={8}>
                        <Paper elevation={6}>

                            <Card variant="outlined">
                                <CardHeader
                                    avatar={
                                        <Tooltip title={idPostData?.owner?.firstName} placement="top-start">
                                            <Avatar alt={idPostData?.owner?.firstName} src={idPostData?.owner.picture} />
                                        </Tooltip>
                                    }
                                    title={idPostData?.owner.firstName}
                                    subheader={idPostData?.publishDate}
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

                            <Box sx={{ marginTop: 1, border: "2px solid blue"}}>
                                {commentsData?.length !== 0 ? (
                                    commentsData?.map((commentItems) => (
                                        <List sx={{ width: "100%", border: "2px solid red"}} key={commentItems?.id}>
                                            <ListItem alignItems="flex-start">
                                                <ListItemAvatar>
                                                    <Avatar alt={commentItems?.owner?.firstName} src={commentItems?.owner.picture} />
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        {commentItems?.owner.firstName}
                                                    </Typography>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={commentItems?.message}
                                                />
                                            </ListItem>
                                            <Divider variant="inset" component="li" />
                                        </List>
                                    ))
                                ) : (
                                    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", paddingY: 2 }}>
                                        <Typography variant="h4">
                                            🤷 No Comment.
                                        </Typography>
                                    </Box>
                                )
                                }
                            </Box>
                        </Paper>
                    </Grid>

                </Grid>

            </Container>
        );

    }

}

export default PostPage;