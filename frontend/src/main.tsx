import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landing-page.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import LandmarksPage from "./pages/landmarks-page.tsx";
import "./App.css";
import AttributesPage from "./pages/attributes-page.tsx";
import ResultsPage from "./pages/results-page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/landing-page",
    element: <LandingPage />,
  },
  {
    path: "/landmarks-page",
    element: <LandmarksPage />,
  },
  {
    path: "/attributes-page",
    element: <AttributesPage />,
  },
  {
    path: "/results-page",
    element: <ResultsPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
