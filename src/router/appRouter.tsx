import { createHashRouter } from "react-router";
import { PortfolioLayout } from "../components/layouts/PortfolioLayout";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ProjectPage } from "../pages/ProjectPage";
import { portfolioSectionLoader, projectLoader } from "./loaders";

export const appRouter = createHashRouter([
  {
    path: "/",
    element: <PortfolioLayout />,
    children: [
      {
        index: true,
        loader: portfolioSectionLoader,
        element: <HomePage />,
      },
      {
        path: ":section",
        loader: portfolioSectionLoader,
        element: <HomePage />,
        errorElement: <NotFoundPage />,
      },
      {
        path: "proyecto/:slug",
        loader: projectLoader,
        element: <ProjectPage />,
        errorElement: <NotFoundPage />,
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
