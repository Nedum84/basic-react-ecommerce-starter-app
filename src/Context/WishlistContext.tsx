import React, { ReactElement } from "react";

interface WishlistProps {
  product_id: number;
}
interface WishlistCtxProps {
  wishLists: WishlistProps[];
  updateWishlist: (product_id: number) => void;
}

const defaultValue: WishlistCtxProps = {
  wishLists: [],
  updateWishlist: () => {},
};

export const WishListContext = React.createContext(defaultValue);

export const WishListContextProvider = ({ children }: { children: ReactElement }) => {
  const [wishes, setWishes] = React.useState<WishlistProps[]>([]);
  const { Provider } = WishListContext;

  const setWishlistState = (wishes: WishlistProps[]) => {
    setWishes(wishes);
  };

  //--> update wishlist
  const updateWishlist = (product_id: number) => {
    const checkAdded = wishes.find((wish) => wish.product_id === product_id);
    if (checkAdded) {
      const newWishes = wishes.filter((wish) => wish.product_id !== product_id);
      setWishlistState(newWishes);
    } else {
      setWishlistState([...wishes, { product_id }]);
    }
  };

  const values: WishlistCtxProps = {
    wishLists: wishes,
    updateWishlist,
  };

  return <Provider value={values}>{children}</Provider>;
};

export const useWishList = () => {
  const ctx = React.useContext(WishListContext);

  if (!ctx) {
    throw new Error("useWishList must be used within a WishListContextProvider");
  }

  return ctx;
};
