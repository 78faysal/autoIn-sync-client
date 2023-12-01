import { Link, useLoaderData, useNavigate } from "react-router-dom";

const Brand = () => {
    const brandData = useLoaderData();
    const navigate = useNavigate();

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
        <div className="grid md:grid-cols-3 items-center">
            {
                brandData.map(data => <div key={data._id}>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img className="h-60" src={data.photo} alt="Shoes" /></figure>
                        <div className="card-body">
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
    );
};

export default Brand;