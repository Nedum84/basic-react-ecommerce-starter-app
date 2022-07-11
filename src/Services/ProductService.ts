const products = [
  {
    id: 1,
    category_id: 2,
    price: 200,
    discount_price: 150,
    sku: "JUS-120",
    vemdor: "Justrite",
    name: "Wheel Barrow",
    brand: "Toyota",
    desc: "long description",
    images: ["https://dsdsd.cpm"],
    collection: "Men", //Women, Accessories,
    reviews: 4.5,
    additional_properties: {
      height: "180 cm - 5' 11”",
      bust: "3 cm - 32”",
      waist: "57 cm - 22”",
      hips: "57 cm - 22”",
    },
    related_products: [1, 4, 2, 7, 8],
  },
  {
    id: 2,
    category_id: 2,
    price: 200,
    discount_price: 150,
    sku: "JUS-120",
    vemdor: "Justrite",
    name: "Wheel Barrow",
    brand: "Toyota",
    desc: "long description",
    images: ["https://dsdsd.cpm"],
    collection: "Men", //Women, Accessories,
    reviews: 4.5,
    additional_properties: {
      height: "180 cm - 5' 11”",
      bust: "3 cm - 32”",
      waist: "57 cm - 22”",
      hips: "57 cm - 22”",
    },
    related_products: [1, 4, 2, 7, 8],
  },
];

export const getAllProducts = () => {
  return products;
};

export const getProductById = (product_id: number) => {
  return products.find((product) => product.id === product_id);
};
export const getRelatedProducts = (product_id: number) => {
  const currentProduct = getProductById(product_id);
  return products.filter((product) => currentProduct?.related_products?.includes(product.id));
};
export const getRand6Products = (product_id: number) => {
  /// generate any random 6 products
};
