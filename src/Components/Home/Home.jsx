import { Helmet } from "react-helmet-async";
import Banner from "./Banner";

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Sports Zone | Login</title>
            </Helmet>
            <Banner></Banner>
            <h1>This is Home</h1>
        </div>
    );
};

export default Home;