import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage";
import { Header } from "./Components/Header";
import { ProductPage } from "./pages/ProductPage";
import { ErrorPage } from "./pages/ErrorPage";
import { lazy, Suspense } from "react";
import App from "./App";
const LazyLoadPage = lazy(() => import("./pages/LazyLoadPage"));



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:id",
        element: <ProductPage />,
      },
      {
        path: "admin",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyLoadPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
