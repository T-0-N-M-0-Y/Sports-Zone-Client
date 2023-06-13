import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import ClassesSection from "./ClassesSection";
import Instructors from "./Instructors";
import Example from "./Example";
import ContactSection from "./ContactSection";
import { motion } from "framer-motion"

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Sports Zone | Home</title>
            </Helmet>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <Banner></Banner>
                <div className="md:mx-10 mx-5">
                    <Example></Example>
                    <ClassesSection></ClassesSection>
                    <ContactSection></ContactSection>
                    <Instructors></Instructors>
                </div>
            </motion.div>
        </div>
    );
};

export default Home;