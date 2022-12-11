import { IProduct } from "../@types/product";
import { ImageEdge, Product } from "./shema";

function normalizeProductImages({ edges }: { edges: Array<ImageEdge> }) {
  return edges.map(({ node }) => {
    return {
      url: `/images/${node.originalSrc}`,
    };
  });
}

export function normalizeProduct(ProductNode: Product): IProduct {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageConnection,
    ...rest
  } = ProductNode;
  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ""),
    images: normalizeProductImages(imageConnection),
    ...rest,
  };
  return product;
}
