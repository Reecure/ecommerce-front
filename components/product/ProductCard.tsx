import React from "react";
import { IProduct } from "../../@types/product";

interface Props {
  product: IProduct;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return <div>{product.name}</div>;
};

export default ProductCard;
