import { Link, useLoaderData } from "react-router-dom";

const Brand = () => {
    const brandData = useLoaderData();
    console.log(brandData);

    return (
        <div className="grid md:grid-cols-3 items-center">
            {
                brandData.map(data => <div key={data._id}>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={data.photo} alt="Shoes" /></figure>
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