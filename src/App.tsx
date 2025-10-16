import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";


const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,

    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/:url",
        element: <ProductPage/>
      },
      {
        path: "/cart",
        element: <CartPage/>
      }
    ]
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
