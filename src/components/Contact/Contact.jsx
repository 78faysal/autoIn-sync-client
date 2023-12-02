
const Contact = () => {
    return (
        <div>
            {/* <div className="hero min-h-screen">
                <div>
                    <h2>Contact Us</h2>

                    <p>We're here to assist you with any inquiries, feedback, or assistance you may need. Feel free to reach out to us through the following channels:</p>

                    <h2>Customer Support:</h2>

                    <p>If you have questions about our services, website functionality, or need assistance with your account, our customer support team is ready to help.</p>
                    <p>Email: support@autoinsync.com</p>
                    <p>Phone: +093-234234</p>
                </div>
                <form className="card-body bg-base-100">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div> */}

            <div className="grid md:grid-cols-2 gap-10 md:px-20 items-center min-h-screen">
                <div className="space-y-3">
                    <h2 className="text-2xl border-b-2 style-text w-40 pb-2 font-semibold">Contact Us</h2>

                    <p className="text-lg">We're here to assist you with any inquiries, feedback, or assistance you may need. Feel free to reach out to us through the following channels:</p>

                    <h2 className="text-xl style-text w-60 font-semibold mb-2">Customer Support:</h2>

                    <p>If you have questions about our services, website functionality, or need assistance with your account, our customer support team is ready to help.</p>
                    <p><span className="font-bold">Email:</span> support@autoinsync.com</p>
                    <p><span className="font-bold">Phone:</span> +093-234234</p>
                </div>
                <form className="card-body bg-base-100">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea type="text" placeholder="Message" className="input pt-2 input-bordered h-40" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;