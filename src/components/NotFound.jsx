import { useNavigate } from "react-router-dom";


const NotFound = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div className="min-h-screen flex justify-center items-center text-center">
            <div>
                <h2>404</h2>
                <h2>Page Not Found</h2>
                <p onClick={handleGoBack} className="text-blue-500 underline text-xl">Go Back</p>
            </div>
        </div>
    );
};

export default NotFound;