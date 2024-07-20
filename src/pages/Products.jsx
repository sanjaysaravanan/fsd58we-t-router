import { Link } from "react-router-dom";
import Product from "./Product";
import products from "./products.json";

const Products = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((pd) => (
        <Link
          key={pd.id}
          //to={`/products/${pd.id}`}
          to={`/products/product?id=${pd.id}`}
        >
          <Product key={pd.id} {...pd} />
        </Link>
      ))}
    </div>
  );
};

export default Products;
