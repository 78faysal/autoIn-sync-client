import Banner from "./Banner";
import Brands from "./Brands/Brands";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="min-h-screen"></div>
            <Brands />
        </div>
    );
};

export default Home;