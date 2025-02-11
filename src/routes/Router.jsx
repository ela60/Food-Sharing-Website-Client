import React from "react";
import { createBrowserRouter } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import AvailableFoods from "../pages/AvailableFoods";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AuthLayouts from "../layouts/AuthLayouts";
import HomeLayout from "../layouts/HomeLayout";
import AddFood from "../components/AddFood";
import ManageFoods from "../components/ManageFoods";
import MyFoodRequests from "../components/MyFoodRequests";
import FoodDetails from "../components/FoodDetails";
import HomePage from "../layouts/HomePage";
import UpdateFoodPage from "../components/UpdateFoodPage";
import ErrorPage from "../components/ErrorPage";
import Contact from "../ExtraSection/contact";
import About from "../ExtraSection/About";
import FAQ from "../ExtraSection/FAQ";
import Promotions from "../ExtraSection/Promotions";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
        {
            path: "",
            element:  <section>
            <HomePage/>
        </section>
      },
      {
        path: "/contact",
        element: <Contact/>
          
        },
      {
        path: "/about",
        element: <About/>
          
        },
      {
        path: "/faq",
        element: <FAQ/>
          
        },
      {
        path: "/promotions",
        element: <Promotions/>
          
        },
        
      {
        path: "/available-foods",
        element: <AvailableFoods />,
        },
        {
            path: "/updateFood/:id",
            element: <UpdateFoodPage />,
            loader: ({ params }) =>
              fetch(`https://food-sharing-server-rho.vercel.app/myfoods/${params.id}`).then((response) =>
                response.json()
              ),
          },
      {
        path: "/add-food",
        element: (
          <PrivateRoute>
            <AddFood />
          </PrivateRoute>
        ),
        },
        {
            path: "/foods/:id",
            element: (
              <PrivateRoute>
                <FoodDetails />
              </PrivateRoute>
            ),
            loader: async ({ params }) => {
              try {
                const response = await fetch(`https://food-sharing-server-rho.vercel.app/foods/${params.id}`);
                  const data = await response.json();
                  
                  return data;
                  
               
              } catch (error) {
                console.error("Loader error:", error);
                return null;
              }
            },
        },
        {
            path: "/myfoods",
            element: (
              <PrivateRoute>
                <ManageFoods /> 
              </PrivateRoute>
            ),
            // loader: () => fetch('https://food-sharing-server-rho.vercel.app/foods/myfoods'),
        },
        {
            path: '/myfoodrequests',
            element: (
              <PrivateRoute>
                <MyFoodRequests /> 
              </PrivateRoute>
            ),
            // loader:({params})=>fetch(`https://food-sharing-server-rho.vercel.app/foods/${params.id}/request`)
          },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayouts />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage/>,
  },
]);

export default Router;
