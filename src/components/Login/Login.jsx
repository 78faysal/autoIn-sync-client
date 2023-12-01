import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location);

    const {signIn, googleSignIn} = useContext(AuthContext);

    const handleFormSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        
        signIn(email, password)
        .then(result => {
            if(result.user){
                toast.success('Logged In Successfully')
                navigate(location?.state ? location.state : '/')
            }
        })
        .catch(err => {
            if(err.message === 'Firebase: Error (auth/invalid-credential).'){
                toast.error('Wrong email or password')
            }
        })
    }


    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
            navigate(location?.state ? location.state : '/')
        })
        .catch(err => {
            console.log(err.message);
        })
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold">Login now!</h1>
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
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="my-2 border-b-2 pb-3">
                                <p>Need to create Account? <Link to='/register' className="text-gray-700 ml-2">SignUp</Link></p>
                            </div>
                            <div>
                                <button onClick={handleGoogleSignIn} className="btn w-full">Continue with Google</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;