import './App.css';
import { useSelector, useDispatch } from "react-redux"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Screens/Login/Login';
import Hero from './Screens/Home/Home';
import Layout from './Screens/Layout/Layout';
import Products from './Screens/Products/Products';
import ProductDetail from './Screens/ProductDetail/ProductDetail';
import { ChakraProvider } from '@chakra-ui/react'
import CheckOut from './Screens/CheckOut/CheckOut';

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
      {
        path: "checkout",
        element: <CheckOut />
      },
    ]
  },
]);

function App() {

  const dispatch = useDispatch()
  const todoList = useSelector((state) => state.todoSlice)

  console.log(todoList)

  return (
    <div className="App">
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </div>
  );
}

export default App;
