import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Categories, Login } from "../pages";
import { AuthLayout } from "../layouts";



export const router = createBrowserRouter([
    {
        element: <App/ >,
        path: '/',
        children: [
            //rutas dash
            {
                path: 'admin',
                children: [
                    {
                        path: 'categories',
                        element: <Categories/>
                    }
                ]
            },
            //rutas auth
            {
                path: 'auth',
                element: <AuthLayout/>,
                children: [
                    {
                        path: 'login',
                        element: <Login/>
                    }
                ]
            }
        ]
    }
]);