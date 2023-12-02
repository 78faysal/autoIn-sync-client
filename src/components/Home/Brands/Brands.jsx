import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brands = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('/brands.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])
    return (
        <div className="min-h-screen px-5 md:px-10">
            <h2 className="text-2xl border-b-2 my-10 w-60 p-3 text-center font-semibold mx-auto">Meet our Brands</h2>


            <div className="grid md:grid-cols-3 items-center gap-10">
                {
                    brands.map(brand => <div key={brand.id}>
                        <Link to={`/brand/${brand.brand_name}`}>
                            <div className="text-center bg-base-200 h-52 w-60 p-5 pb-10 mx-auto">
                                <img className="w-full h-full" src={brand.brand_img} alt="" />
                                <h2 className="text-2xl font-semibold style-text">{brand.brand_name}</h2>
                            </div>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Brands;