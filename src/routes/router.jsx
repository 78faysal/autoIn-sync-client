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
import Brand from "../components/Home/Brands/Brand";
import BrandDetail from "../components/Home/Brands/BrandDetail";
import PrivateRoute from "./PrivateRoute";
import UpdateCart from "../components/MyCart/UpdateCart";


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
                element: <PrivateRoute><AddProduct /></PrivateRoute>
            },
            {
                path: 'myCart',
                loader: () => fetch('https://auto-in-sync-server.vercel.app/cartProducts'),
                element: <PrivateRoute><MyCart /></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/brand/:brand',
                element: <Brand />,
                loader: ({ params }) => fetch(`https://auto-in-sync-server.vercel.app/products/${params.brand}`)
            },
            {
                path: '/brand/productDetail/:id',
                element: <PrivateRoute><BrandDetail /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://auto-in-sync-server.vercel.app/product/${params.id}`)
            },
            {
                path: '/updateCart/:id',
                element: <PrivateRoute><UpdateCart /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://auto-in-sync-server.vercel.app/cartProducts/${params.id}`)
            }
        ]
    },
]);


export default router;