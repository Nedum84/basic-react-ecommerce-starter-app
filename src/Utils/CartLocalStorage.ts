import { CartProps } from "../Context/CartContext";

const cartItems = "CART_ITEMS";

export function localStorageUpdateCart(carts: CartProps[]) {
  localStorage.setItem(cartItems, JSON.stringify(carts));
}

export function localStorageGetCartItems(): CartProps[] {
  const items = localStorage.getItem(cartItems);
  if (!items) return [];

  try {
    return JSON.parse(items);
  } catch (error) {
    return [];
  }
}
