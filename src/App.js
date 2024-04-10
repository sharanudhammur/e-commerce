import './App.css';
import { useSelector, useDispatch } from "react-redux"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Screens/Login/Login';
import Hero from './Screens/Hero/Hero';
import Layout from './Screens/Layout/Layout';
import Products from './Screens/Products/Products';
import ProductDetail from './Screens/ProductDetail/ProductDetail';

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <Login>
      </Login>
    ),
  },
  {
    path: "/",
    element: (
      <Layout />
    ),
    children: [
      {
        path: "home",
        element: <Hero />
      },
      {
        path: "products",
        element: <Products />
      },
      {
        path: "products-detail",
        element: <ProductDetail />
      },
    ]
  },
]);

function App() {

  const dispatch = useDispatch()
  const selector = useSelector((state) => console.log(state))

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
