import { Grid, Card, CardMedia, CardContent, CardActions, Skeleton, CardHeader } from "@mui/material";


const Loading = () => {
    const initPostContainer: any = [];

    const initPost = () => {
        const initPostCount = 9;

        for (let i = 0; i < initPostCount; i++) {
            const itemToPush = <Grid item xs={12} md={4} lg={3} xl={2} sx={{ width: "300px", marginBottom: "1rem" }}>
                <Card sx={{ height: "100%" }}>
                    <CardMedia sx={{ paddingX: 1 }}>
                        <Skeleton variant="rectangular" height={200} />
                    </CardMedia>
                    <CardContent sx={{ height: 190 }}>
                        <CardHeader
                            avatar={
                                <Skeleton variant="circular" width={40} height={40} />
                            }
                            title={
                                <Skeleton variant="text" width="20%" />
                            }
                        />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" width="60%" />
                    </CardContent>
                    <CardActions sx={{ display: "flex", justifyContent: "center", fontSize: 14, fontWeight: "500" }}>
                        <Skeleton variant="rectangular" width={100} height={50} />
                    </CardActions>
                </Card>
            </Grid>;
            initPostContainer.push(itemToPush);
        }
    }

    initPost();

    return (
        <Grid container spacing={3}>
            {initPostContainer.map((setInitPost: any) => setInitPost)}
        </Grid>
    )
}

export default Loading;