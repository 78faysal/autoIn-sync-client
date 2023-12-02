import { Link, useLoaderData } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBack2Line } from "react-icons/ri";
import toast from "react-hot-toast";
import { useState } from "react";

const MyCart = () => {
    const cartDatas = useLoaderData();
    const [displayCart, setDisplayCart] = useState(cartDatas)

    const handleDelete = (id) => {
        fetch(`https://auto-in-sync-server.vercel.app/cartProducts/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const remaining = displayCart.filter(cart => cart._id !== id);
            if(data.deletedCount == 1){
                toast.success('Successfully Deleted');
                setDisplayCart(remaining)
            }
        })
    }
    return (
        <div className=" px-5 md:px-20 my-10">
            <h2 className="text-2xl border-b-2 w-40 p-3 text-center font-semibold mx-auto">My Cart</h2>

            <div className="grid md:grid-cols-3 gap-10">
                {
                    displayCart.map(data => <div key={data._id}>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <div className="text-2xl p-3"><Link to={`/updateCart/${data._id}`}><BiEdit className="" /></Link> <RiDeleteBack2Line onClick={() => handleDelete(data._id)} /></div>
                            <figure><img className="h-52" src={data.photo} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{data.name}</h2>
                                <p>{data.description}</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyCart;