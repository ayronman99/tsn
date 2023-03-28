import { Box, Typography, Paper, Grid } from "@mui/material"

const InfoSectionBox = ({ h2Text, bodyText, imgSrc, showImg = true, sx }: InfoSectionBoxProps) => {
    return (
        <Grid item width="100%">
            <Box component="div" sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <Typography variant="h2">
                    {h2Text ? h2Text : "Insert Header Text Here"}
                </Typography>
                {bodyText && (
                    <Typography paragraph={true} variant="body1" sx={{ maxWidth: "800px" }}>
                        {bodyText}
                    </Typography>)}
                {showImg ? (
                    <Box
                        component="img"
                        src={imgSrc ? imgSrc : "https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg"}
                        alt={imgSrc}
                        sx={sx ? sx : { height: "300px", width: "300px" }}
                    />) : ""}
            </Box>
        </Grid>
    )
}

export default InfoSectionBox;