import AboutMe from './pages/AboutMe';
import CommentPage from './pages/CommentPage';
import Projects from './pages/Projects';
import HomePage from './pages/HomePage';
import {AppRoutes} from "./app.routes.ts";
import MainLayout from "./MainLayout.tsx";
import {createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: AppRoutes.Homepage,
                element: <HomePage />,
            },
            {
                path: AppRoutes.AboutMe,
                element: <AboutMe />,
            },

            {
                path: AppRoutes.CommentPage,
                element: <CommentPage />,
            },
            {
                path: AppRoutes.Projects,
                element: <Projects />,
            },
        ],
    },
]);

export default router;
