import pageTitle from "../hooks/pageTitle.hook";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import InfoSectionBox from "../components/InfoSectionBox";
import WeTeam from "../assets/weteam.svg";
import Mission from "../assets/mission.svg";
import Vision from "../assets/vision.svg";
import Footer from "../components/Footer";

const About = () => {

    pageTitle("About Us");

    return (
        <Container maxWidth="lg">
            <Grid container sx={{ marginTop: 1 }} spacing={12}>
                <InfoSectionBox
                    h2Text="About Us"
                    bodyText="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis."
                    imgSrc={WeTeam}
                />
                <InfoSectionBox
                    h2Text="Mission"
                    bodyText="Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
                    imgSrc={Mission}
                />
                <InfoSectionBox
                    h2Text="Vision"
                    bodyText="Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
                    imgSrc={Vision}
                />
            </Grid>

            <Footer />
        </Container>
    )
}

export default About;