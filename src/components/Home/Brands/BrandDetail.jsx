import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import toast from "react-hot-toast";

const BrandDetail = () => {
    const data = useLoaderData();
    const { name, brand, price, rating, description, photo } = data;

    const newData = { name, brand, price, rating, description, photo };

    const handleAddToCart = () => {
        fetch('https://auto-in-sync-server.vercel.app/cartProducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success('Item added to cart')
                }
            })
    }
    return (
        <div>
            <div className="grid md:grid-cols-2 md:gap-10 gap-5 px-5 md:px-20 lg:card-side min-h-screen bg-base-200 mt-10 shadow-xl">
                <figure className="flex items-center"><img className='w-full' src={photo} alt="" /></figure>
                <div className="flex items-center">
                    <div className="space-y-3">
                        <h2 className="card-title">{name}</h2>
                        <h2 className="text-xl">${price}</h2>
                        <p className="flex items-center gap-1"><FaStar className="text-yellow-400 text-xl" />{rating}</p>
                        <p>{brand}</p>
                        <p>Description: {description}</p>
                        <div className="card-actions">
                            <button className="btn btn-primary" onClick={handleAddToCart}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandDetail;