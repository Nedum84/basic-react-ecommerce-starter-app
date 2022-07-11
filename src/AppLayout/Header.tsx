import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../Routes";
import { ReactComponent as Logo } from "../Assets/logo.svg";
import { useCartContext } from "Context/CartContext";

function Header() {
  const { cartItems } = useCartContext();

  return (
    <div className="h-12 flex items-center space-x-12">
      <Logo className="h-10 w-20 mr-10" />
      <Link to={ROUTES.home.path}>Home</Link>
      <Link to={ROUTES.aboutUs.path}>About Us</Link>
      <Link to={ROUTES.cart.path}>Cart</Link>
      <Link to={ROUTES.checkoutPayment.path}>CheckoutPayment</Link>
      <Link to={ROUTES.faqs.path}>Faqs</Link>
      <Link to={ROUTES.products.path}>Products</Link>

      <div>
        <b>CART</b>: {cartItems.length} items
      </div>
    </div>
  );
}

export default Header;
