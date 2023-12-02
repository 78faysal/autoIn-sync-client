import { NavLink } from "react-router-dom";
import { CiLight, CiDark } from "react-icons/ci";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
    const [dark, setDark] = useState(false);

    const { user, logOut } = useContext(AuthContext);

    if (dark) {
        document.querySelector('html').setAttribute('data-theme', 'dim');
    }
    else {
        document.querySelector('html').setAttribute('data-theme', 'lofi');
    }

    const handleSignOut = () => {
        logOut()
        .then(() => toast.success('Successfully signed out'))
    }

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/addProduct'>Add Product</NavLink></li>
        <li><NavLink to='/myCart'>My Cart</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 md:px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl style-text">AutoInSync</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end duration-300">
                    {
                        user ? <> <button onClick={handleSignOut} className="btn mx-2">SignOut</button><img className="h-10 mr-2 rounded-full" src={user.photoURL} alt="" /><p className="max-sm:hidden">{user.displayName}</p></> : ''
                    }
                    {
                        dark ? <CiLight onClick={() => setDark(!dark)} className="ml-2 text-3xl" /> : <CiDark className="ml-2 text-3xl" onClick={() => setDark(!dark)} />
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;