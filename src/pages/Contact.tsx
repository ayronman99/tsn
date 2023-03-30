import { Box, Container, Grid, FormControl, TextField, Button, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import pageTitle from "../hooks/pageTitle.hook";
import InfoSectionBox from "../components/InfoSectionBox";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import Footer from "../components/Footer";
import Concordia from "../assets/concordia.png"
const Contact = () => {

    pageTitle("Contact Us"); 
    
    const submitInquiry = () => {
        alert("Successfully Submitted!")
    }
    return (
        <Container>
            <Grid container justifyContent="space-between" sx={{marginTop: 5}}>
                <Grid item xs={12} md={5}>
                    <Grid container>
                        <InfoSectionBox
                            h2Text="Talk to us!"
                            bodyText="Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl."
                            showImg={false}
                        />
                        <InfoSectionBox
                            h2Text="Our Office"
                            imgSrc={Concordia}
                            sx={{width: "100%"}}
                        />
                        <Grid item>
                            <List>
                                <ListItem>
                                   <ListItemIcon><LocationOnIcon /></ListItemIcon>
                                    <ListItemText
                                        primary="123 Sample St., Concordia Station, Antarctica, 2009"
                                    />
                                </ListItem>
                                <ListItem>
                                   <ListItemIcon><PhoneIcon /></ListItemIcon>
                                    <ListItemText
                                        primary="+1 312 1234" 
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        component="form"
                        onSubmit={submitInquiry}
                        autoComplete="off"
                        sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", boxShadow: "7px 13px 20px #484444", padding: 1, paddingTop: 3, borderRadius: 2 }}
                    >
                        <Box component="div" sx={{ display: "flex",  width: "100%", marginBottom: 3 }}>
                            <TextField
                                id="first-name"
                                label="First Name"
                                required
                                fullWidth
                                sx={{marginRight: 2}}
                            />
                            <TextField
                                id="last-name"
                                label="Last Name"
                                fullWidth
                            />
                        </Box>
                        <TextField
                            id="email"
                            label="Email"
                            sx={{ marginBottom: 3 }}
                            fullWidth
                            required
                            type="email"
                        />

                        <TextField
                            id="company"
                            label="Company"
                            sx={{ marginBottom: 3 }}
                            fullWidth
                            required
                        />

                        <TextField
                            id="contact"
                            label="Contact"
                            type="number"
                            fullWidth
                            required
                            sx={{ marginBottom: 3 }}

                        />
                        <TextField
                            id="message-box"
                            label="Message"
                            multiline
                            rows={5}
                            fullWidth
                            sx={{ marginBottom: 3 }}

                        />
                        <Button type="submit" variant="contained" >
                            Submit
                        </Button>
                    </Box>
                </Grid>
            </Grid>
            
            <Footer />
        </Container>
    )
}

export default Contact;