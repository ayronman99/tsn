import React from 'react'
import {
    Button, Box, Card, CardContent, CardHeader, CardMedia, Grid, Paper, Tooltip, Typography, List,
    ListItem, ListItemText
} from "@mui/material";
import Avatar from '@mui/material/Avatar';


type PostContentProps = {
    idPostData: PostsDataTypes | undefined,
    commentsData: CommentsData | undefined
}

export default function PostContent({
    idPostData,
    commentsData
}: PostContentProps) {


    const formattedDate = idPostData?.publishDate;
    return (
        <Grid item xs={10}>
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
                        {commentsData?.data.length !== 0 ? (
                            commentsData?.data.map((commentItems) => (
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
    )
}