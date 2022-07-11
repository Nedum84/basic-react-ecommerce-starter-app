import React, { ReactElement } from "react";
import { localStorageGetCartItems, localStorageUpdateCart } from "../Utils/CartLocalStorage";

type CartCtxProps = {
  cartItems: CartProps[];
  update(product_id: number, qty: number): void;
  remove(product_id: number): void;
  increment(product_id: number): void;
  decrement(product_id: number): void;
  clear(): void;
};

const defaultValues: CartCtxProps = {
  cartItems: [],
  update: () => {},
  remove: () => {},
  increment: () => {},
  decrement: () => {},
  clear: () => {},
};

export type CartProps = {
  product_id: number;
  qty: number;
};

const CartContext = React.createContext<CartCtxProps>(defaultValues);
const initialCarts = localStorageGetCartItems();

export function CartContextProvider({ children }: { children: ReactElement }) {
  const [carts, setCarts] = React.useState<CartProps[]>(initialCarts);
  const { Provider } = CartContext;

  const setCartState = (carts: CartProps[]) => {
    setCarts(carts);
    localStorageUpdateCart(carts);
  };

  const update = (product_id: number, qty: number) => {
    const checkAdded = carts.find((cart) => cart.product_id === product_id);
    if (checkAdded) {
      const newCarts = carts.map((cart) => {
        if (cart.product_id === product_id) {
          return { ...cart, qty };
        }
        return cart;
      });
      setCartState(newCarts);
    } else {
      const newCarts = [...carts, { product_id, qty }];
      setCartState(newCarts);
    }
  };

  const remove = (product_id: number) => {
    const checkAdded = carts.find((cart) => cart.product_id === product_id);
    if (checkAdded) {
      const newCarts = carts.filter((cart) => cart.product_id !== product_id);
      setCartState(newCarts);
    }
  };
  const increment = (product_id: number) => {
    const checkAdded = carts.find((cart) => cart.product_id === product_id);
    if (checkAdded) {
      update(product_id, checkAdded.qty + 1);
      // OR
      // const newCarts = carts.map((cart) => {
      //   if (cart.product_id === product_id) {
      //     return { ...cart, qty: cart.qty + 1 };
      //   }
      //   return cart;
      // });
      // setCarts(newCarts);
    } else {
      update(product_id, 1);
      // OR
      // setCarts((prev) => [...prev, { product_id, qty: 1 }]);
    }
  };
  const decrement = (product_id: number) => {
    const checkAdded = carts.find((cart) => cart.product_id === product_id);
    if (checkAdded) {
      if (checkAdded.qty === 1) {
        remove(product_id);
      } else {
        update(product_id, checkAdded.qty - 1);
      }
    }
  };
  const clear = () => setCartState([]);

  return (
    <Provider value={{ cartItems: carts, update, remove, increment, decrement, clear }}>
      {children}
    </Provider>
  );
}

export function useCartContext() {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }

  return context;
}
