import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import { Home, About, Contact, NotFound } from '../pages';

// Define your routes configuration
const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            // Public Routes - No authentication required
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },

        ],
    },



    // 404 Not Found - Catch all unmatched routes
    {
        path: '*',
        element: <NotFound />,
    },
]);

const Routes = () => {
    return <RouterProvider router={router} />;
};

export default Routes;

