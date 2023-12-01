import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import toast from "react-hot-toast";

const BrandDetail = () => {
    const data = useLoaderData();
    const { name, brand, category, price, rating, description, photo } = data;

    const handleAddToCart = () => {
        fetch('http://localhost:5000/cartProducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                toast.success('Item added to cart')
            }
        })
    }
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="text-xl">${price}</h2>
                    <p className="flex items-center gap-1"><FaStar className="text-yellow-400 text-xl" />{rating}</p>
                    <p>{brand}</p>
                    <p>Description: {description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={handleAddToCart}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandDetail;