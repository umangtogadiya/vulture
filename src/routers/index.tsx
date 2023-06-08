import { RouteObject } from "react-router";
import { lazy } from "react";

const Home = lazy(() => import("../views/home"));
const Shop = lazy(() => import("../views/shop"));
const Product = lazy(() => import("../views/product"));
const Checkout = lazy(() => import("../views/checkout"));
const PageNotFound = lazy(() => import("../views/pagenotfound"));
const Contact = lazy(() => import("../views/contact"));
const Working = lazy(() => import("../views/working"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/working",
    element: <Working />,
  }
];

export default routes;
