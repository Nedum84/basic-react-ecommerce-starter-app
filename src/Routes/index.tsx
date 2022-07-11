import { lazy } from "react";

const AboutUs = lazy(() => import("../Pages/AboutUs"));
const Cart = lazy(() => import("../Pages/Cart"));
const CheckoutInfo = lazy(() => import("../Pages/CheckoutInfo"));
const CheckoutPayment = lazy(() => import("../Pages/CheckoutPayment"));
const Faqs = lazy(() => import("../Pages/Faqs"));
const Home = lazy(() => import("../Pages/Home"));
const ProductDetail = lazy(() => import("../Pages/ProductDetail"));
const Products = lazy(() => import("../Pages/Products"));

// type RouteType = {
//   [name: string]: {
//     path: string;
//     exact: boolean;
//     element: any;
//     index?: boolean;
//   };
// };

const ROUTES = {
  home: {
    path: "/",
    exact: true,
    element: Home,
    index: true,
  },
  aboutUs: {
    path: "/about-us",
    exact: true,
    element: AboutUs,
  },
  cart: {
    path: "/cart",
    exact: true,
    element: Cart,
  },
  checkoutInfo: {
    path: "/checkout-info",
    exact: true,
    element: CheckoutInfo,
  },
  checkoutPayment: {
    path: "/checkout-payment",
    exact: true,
    element: CheckoutPayment,
  },
  faqs: {
    path: "/faqs",
    exact: true,
    element: Faqs,
  },
  productDetail: {
    path: "/product/:productId",
    exact: true,
    element: ProductDetail,
  },
  products: {
    path: "/products",
    exact: true,
    element: Products,
  },
  error404: {
    path: "/:page-route",
    exact: true,
    element: () => <h2>Page not found</h2>,
  },
};

export default ROUTES;
