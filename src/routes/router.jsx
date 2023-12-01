import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../components/Root";
import NotFound from "../components/NotFound";
import Home from "../components/Home/Home";
import AddProduct from "../components/AddProduct/AddProduct";
import MyCart from "../components/MyCart/MyCart";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/addProduct',
                element: <AddProduct />
            },
            {
                path: 'myCart', 
                element: <MyCart />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    },
]);


export default router;