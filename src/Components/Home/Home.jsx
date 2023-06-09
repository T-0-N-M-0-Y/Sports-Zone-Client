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
            <Example></Example>
            <ClassesSection></ClassesSection>
            <ContactSection></ContactSection>
            <Instructors></Instructors>
        </div>
    );
};

export default Home;