import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorBoundary from "./ErrorBoundary";
import ProjectsPage from "./ProjectsPage";
import ProjectDetailPage from "./ProjectDetailPage";
import HomePage from "./HomePage";
import { rootLoader, projectsLoader, projectDetailLoader } from "./loaders";
import NotFound from "./NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        loader: rootLoader,
        errorElement: <ErrorBoundary />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/projects",
                element: <ProjectsPage />,
                loader: projectsLoader,
            },
            {
                path: "/projects/:id",
                element: <ProjectDetailPage />,
                loader: projectDetailLoader,
            },
            {
                path: "*",
                element: <NotFound />,
            }
        ],
    },
]);
