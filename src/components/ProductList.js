import React from "react";
import GridView from "./Gridview";
import ListView from "./ListView";
import { useFilterContext } from "../Contexts/filter_context";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no products matched your search
      </h5>
    );
  }
  if (grid_view === false) {
    return <ListView products={products} />;
  }

  return <GridView products={products}>product list</GridView>;
};

export default ProductList;
