import pageTitle from "../hooks/pageTitle.hook";

const About = () => {

    pageTitle("About Us");


    return (
        <div>
            <h1>
                This is the About Us
            </h1>
            <p>
                Please layout me.
            </p>
        </div>
    )
}

export default About;