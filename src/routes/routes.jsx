
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardOther from "../components/dashboard/DashboardOther";
import DashboradOther2 from "../components/dashboard/DashboradOther2";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoutes";
import ErrorPage from "../components/shared/ErrorPage";
import ProductsDetails from "../pages/ProductsDetails";
import AllProducts from "../components/dashboard/AllProducts";
import AddProducts from "../components/dashboard/AddProducts";
import EditProducts from "../components/dashboard/EditProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage />,
    children: [
        {
            index: true,
            element: <Home/>
        },
        {
            path: "/products/:id",
            element: <ProductsDetails />,
            loader: ({ params }) =>
              fetch(`http://localhost:3000/products/${params.id}`),
        },
        {
            path: "about",
            element: <About />
        },
        {
            path: "contact",
            element: <Contact />
        },
        {
            path: "login",
            element: <Login />
        },
        {
            path: "register",
            element: <Register />
        }
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: "other",
            element:<PrivateRoute><DashboardOther /></PrivateRoute> 
        },
        {
            path: "other2",
            element: <PrivateRoute> <DashboradOther2 /></PrivateRoute> 
        },
        {
            path: "all-products",
            element: (
                <PrivateRoute>
                  <AllProducts />
                </PrivateRoute>
              ),
            loader: () => fetch(`http://localhost:3000/products/`),
        },
        {
            path: "add-products",
            element: (
              <PrivateRoute>
                <AddProducts />
              </PrivateRoute>
            ),
        },
        {
          path: "all-products/edit/:id",
          element: (
            <PrivateRoute>
              <EditProducts />
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(`http://localhost:3000/products/${params.id}`),
        },
    ]
  },
]);

export default router;