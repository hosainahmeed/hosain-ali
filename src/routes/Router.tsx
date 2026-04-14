import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorBoundary from "./ErrorBoundary";
import ProjectsPage from "./ProjectsPage";
import HomePage from "./HomePage";
import { rootLoader, projectsLoader } from "./loaders";
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
                path: "*",
                element: <NotFound />,
            }
        ],
    },
]);
