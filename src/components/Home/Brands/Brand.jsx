import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";

const Brand = () => {
    const brandData = useLoaderData();
    const navigate = useNavigate();
    const {brand} = useParams();

    const handleGoBack = () => {
        navigate(-1);
    }

    if (brandData.length < 1) {
        return <div className="text-center flex justify-center items-center min-h-screen">
            <div>
                <h2 className="text-3xl font-semibold">No Data Found</h2>
                <p className="text-blue-500 underline text-xl" onClick={handleGoBack}>Go back</p>
            </div>
        </div>
    }

    return (
        <div>
            <div className="carousel w-full h-96">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-xl">
                                <h1 className="mb-5 text-5xl font-bold style-text">Drive Your Passion with {brand}</h1>
                                <p className="mb-5">Unleash the future of driving with the {brand} Elevate your journey with unmatched performance, cutting-edge technology, and zero emissions. Drive electric, drive extraordinary.</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-xl">
                                <h1 className="mb-5 text-5xl font-bold style-text">Explore more {brand}</h1>
                                <p className="mb-5 style-text">Explore more in the {brand} Explorer. Adventure awaits with a perfect blend of versatility and style. With advanced safety features and spacious interiors, make every journey memorable</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-xl">
                                <h1 className="mb-5 text-5xl font-bold style-text">Drive Your Passion</h1>
                                <p className="mb-5 style-text">Discover seamless automotive services, expert reviews, and the latest trends—all in one place. Your journey starts here.</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-3 max-sm:px-5 md:px-20 gap-10 mx-auto items-center my-10">
                {
                    brandData.map(data => <div key={data._id}>
                        <div className="card card-compact mx-auto bg-base-100 shadow-xl">
                            <figure><img className="h-60" src={data.photo} alt="Shoes" /></figure>
                            <div className="card-body p-5">
                                <h2 className="card-title">{data.name}</h2>
                                <p>{data.description}</p>
                                <h2 className="text-xl">${data.price}</h2>
                                <div className="card-actions justify-end">

                                    <Link to={`/brand/productDetail/${data._id}`}>
                                        <button className="btn btn-primary">Show Detail</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Brand;