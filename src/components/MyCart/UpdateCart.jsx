import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateCart = () => {
    const loadedData = useLoaderData();

    const { _id, name, brand, category, price, rating, description, photo } = loadedData;

    console.log(loadedData);

    const handleFormSubmit = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const photo = form.photo.value;

        const data = { name, brand, category, price, rating, description, photo };

        fetch(`https://auto-in-sync-server.vercel.app/cartProducts/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    toast.success('Updated Successfully')
                }
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold">Add Your Product</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleFormSubmit}>
                            {/* row 1 */}
                            <div className="md:flex md:gap-10">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Brand Name</span>
                                    </label>
                                    <input type="text" name="brand" defaultValue={brand} placeholder="Brand Name" className="input input-bordered" required />
                                </div>
                            </div>
                            {/* row 2 */}
                            <div className="md:flex md:gap-10">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <input type="text" name="category" defaultValue={category} placeholder="Product Category" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered" required />
                                </div>
                            </div>
                            {/* row 3 */}
                            <div className="md:flex md:gap-10">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Short description</span>
                                    </label>
                                    <input type="text" name="description" defaultValue={description} placeholder="Description" className="input input-bordered" required />
                                </div>
                            </div>
                            {/* row 1 */}
                            <div className="">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="photo" defaultValue={photo} placeholder="URL" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Update Cart</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateCart;