import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <div className=" mx-auto">
            <Navbar />
            <div className="min-h-screen relative">
                <Outlet />
                <Toaster />
            </div>
            <Footer />
        </div>
    );
};

export default Root;