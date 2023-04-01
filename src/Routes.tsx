import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductPage } from "./pages/ProductPage";

const router = createBrowserRouter([
  {
    path: "products",
    element: <ProductPage />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
