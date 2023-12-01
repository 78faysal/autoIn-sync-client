import { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext);
    
    const handleFormSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = {email, password}

        const capitalVali = /[A-Z]/;
        const symbleVali = /[!@#$%^&*(),.?":{}|<>]/;

        if(password.length < 6){
            return toast.error('Password Should atleast 6 charecters')
        }
        else if(!capitalVali.test(password)){
            return toast.error('Please add capital letters')
        }
        else if(!symbleVali.test(password)){
            return toast.error('Please add special character')
        }

        //createuser
        createUser(email, password)
        .then(result => {
            if(result.user){
                toast.success('User Created Successfully')
            }
        })
        .catch(err => {
            if(err.message === 'Firebase: Error (auth/email-already-in-use).'){
                toast.error("Can't create more account using one email")
            }
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold">SignUp now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleFormSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">SignUp</button>
                            </div>
                            <div className="my-2 border-b-2 pb-3">
                                <p>Have an Account? <Link to='/login' className="text-gray-700 ml-2">Login</Link></p>
                            </div>
                            <div>
                                <button className="btn  w-full">Continue with Google</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;