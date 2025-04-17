import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllBlogs from "../pages/AllBlogs";
import BlogDetails from "../pages/BlogDetails";
import PrivateRoute from "./PrivateRoute";
import AddBlog from "../pages/AddBlog";
import UpdateBlog from "../pages/UpdateBlog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2>Page Not Found!</h2>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'add-blog',
                element: <PrivateRoute>
                    <AddBlog></AddBlog>
                </PrivateRoute>
            },
            {
                path: 'all-blogs',
                element: <AllBlogs></AllBlogs>
            },
            {
                path: 'blog/:id',
                element: <PrivateRoute>
                    <BlogDetails></BlogDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_apiUrl}/all-blogs/${params.id}`)
            },
            {
                path: 'update-blog/:id',
                element: <PrivateRoute>
                    <UpdateBlog></UpdateBlog>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_apiUrl}/all-blogs/${params.id}`)
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
]);

export default router;