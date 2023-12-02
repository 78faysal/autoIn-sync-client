import Contact from "../Contact/Contact";
import Banner from "./Banner";
import Brands from "./Brands/Brands";
import Events from "./Events";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="min-h-screen"></div>
            <Brands />
            <Events />
            <Contact/>
        </div>
    );
};

export default Home;