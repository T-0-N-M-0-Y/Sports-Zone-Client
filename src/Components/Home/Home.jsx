import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import ClassesSection from "./ClassesSection";
import Instructors from "./Instructors";
import Example from "./Example";
import ContactSection from "./ContactSection";

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Sports Zone | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="md:mx-10 mx-5">
                <Example></Example>
                <ClassesSection></ClassesSection>
                <ContactSection></ContactSection>
                <Instructors></Instructors>
            </div>
        </div>
    );
};

export default Home;