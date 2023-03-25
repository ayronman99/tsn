
import { Box, Card, CardContent, CardHeader, CardMedia, Grid, Paper, Skeleton } from "@mui/material/";

const LoadingPost = () => (
    <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} md={8}>
            <Paper elevation={6}>
                <Card variant="outlined">
                    <CardHeader
                        avatar={
                            <Skeleton animation="wave" variant="circular" width={40} height={40} />
                        }
                        title={
                            <Skeleton
                                animation="wave"
                                height={10}
                                width={69}
                                style={{ marginBottom: 6 }}
                            />

                        }
                        subheader={
                            <Skeleton animation="wave" height={10} width="40%" />
                        }

                    />
                    <CardMedia sx={{paddingX: 2}} >
                        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
                    </CardMedia>

                    <CardContent sx={{ display: "flex", justifyContent: "space-between", padding: 1 }}>
                        <Skeleton variant="text" sx={{ width: "4rem", fontSize: '2rem' }} />
                        <Skeleton variant="rectangular" sx={{ width: 250, fontSize: '2rem' }} />
                    </CardContent>
                </Card>

                <Box sx={{ marginTop: 1 }}>
                    <Skeleton variant="rectangular" sx={{ height: 200 }} />
                </Box>
            </Paper>
        </Grid>
    </Grid>
)

export default LoadingPost;