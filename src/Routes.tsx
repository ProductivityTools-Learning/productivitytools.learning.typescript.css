import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductPage } from "./pages/ProductPage";
import { Header } from "./Components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
  },
  {
    path: "products",
    element: <ProductPage />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
