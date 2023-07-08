import React from 'react'
import {
    Box, Card, CardContent, CardHeader, CardMedia, Grid, Paper, Tooltip, Typography, List,
    ListItem, ListItemText, IconButton, Menu, MenuItem, ListItemIcon, Modal, Button
} from "@mui/material";

import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from 'react-router-dom';


import axsFetchHandlerRQHook from '../../../hooks/axiosFetchRQ.hook';

type PostContentProps = {
    idPostData: PostsDataTypes | undefined,
    commentsData: CommentsData | undefined
}

type PostOptions = {
    postId: string | undefined
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
                        action={
                            <IconButton aria-label="settings">
                                <PostOption postId={idPostData?.id} />
                            </IconButton>
                        }
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

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: "20px",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
}
const PostOption = ({ postId }: PostOptions) => {
    const [anchorOption, setAnchorOption] = React.useState<null | HTMLElement>(null);
    const [openModal, setOpenModal] = React.useState<boolean>(false);
    const navigator = useNavigate();
    const queryClient = useQueryClient();
    // queryFn: () => axsFetchHandlerRQHook("delete",`https://dummyapi.io/data/v1/post/${postId}`)

    const { mutate: deleteFunc } = useMutation<PostsDataTypes, ErrorConstructor>({
        mutationFn: () => axsFetchHandlerRQHook("delete", `https://dummyapi.io/data/v1/post/${postId}`),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['postsData'] })
            navigator("/tsn")
        },
        onError: (error, variables, context) => {
            alert(error)
        },
        onSettled: (data, error, variables, context) => {
            navigator("/tsn")
        },
    })

    const handleOpenOption = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorOption(event.currentTarget);
    };

    const handleCloseOption = () => {
        setAnchorOption(null);
    };

    const deleteHandler = (postId: string | undefined) => {
        if (!postId) return;

        deleteFunc();
    }

    return (
        <>
            <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
                <Tooltip title="Open settings">
                    <Box justifyContent="center" component="div" onClick={handleOpenOption}>
                        <MoreVertIcon />
                    </Box>
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorOption}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorOption)}
                    onClose={handleCloseOption}
                >
                    {/* <MenuItem onClick={() => deleteHandler(postId)}> */}
                    <MenuItem onClick={() => setOpenModal(!openModal)}>
                        <ListItemIcon>
                            <DeleteIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Delete</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={() => alert("Updated!")}>
                        <ListItemIcon>
                            <UpdateIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Update</ListItemText>
                    </MenuItem>
                </Menu>
            </Box>


            <Modal open={openModal}>
                <Box component="div" sx={modalStyle}>
                    <Typography variant='h5'>Are you you want to <Box component="span" sx={{color: "red"}}>DELETE</Box> this post?</Typography>

                    <Box sx={{ float: "right" }}>
                        <Button sx={{mr: 2}} variant='outlined' color='primary' onClick={() => deleteHandler(postId)}>Yes</Button>
                        <Button variant='contained' color="error" onClick={() => setOpenModal(!openModal)}>No</Button>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}