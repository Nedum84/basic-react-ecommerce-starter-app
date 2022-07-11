type Category = {
  id: number;
  name: string;
  icon: string;
  banner: string;
};
const categories: Category[] = [
  {
    id: 1,
    name: "Electronics",
    icon: "https://dsdsd.cpm",
    banner: "https://dsdsd.cpm",
  },
  {
    id: 2,
    name: "Fashion",
    icon: "https://dsdsd.cpm",
    banner: "https://dsdsd.cpm",
  },
  {
    id: 3,
    name: "Housing",
    icon: "https://dsdsd.cpm",
    banner: "https://dsdsd.cpm",
  },
];

export const getAllCategories = () => {
  return categories;
};

export const getCategoryById = (product_id: number) => {
  return categories.find((product) => product.id === product_id);
};
