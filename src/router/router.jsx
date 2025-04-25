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
import WishList from "../pages/WishList";
import FeaturedBlog from "../pages/FeaturedBlog";
import BloggerCornerDetails from "../pages/BloggerCornerDetails";
import ErrorPage from "../pages/ErrorPage";




const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
            },
            {
                path: 'update-blog/:id',
                element: <PrivateRoute>
                    <UpdateBlog></UpdateBlog>
                </PrivateRoute>,
                
            },
            {
                path: 'featured-blog',
                element: <FeaturedBlog></FeaturedBlog>
            },
            {
                path: 'wish-list',
                element: <PrivateRoute>
                    <WishList></WishList>
                </PrivateRoute>,
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'blogger-corner/:id',
                element: <BloggerCornerDetails></BloggerCornerDetails>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_apiUrl}/blogger-corner/${params.id}`)
            }
        ]
    },
]);

export default router;