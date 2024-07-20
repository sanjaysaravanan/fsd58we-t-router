import { useParams, useSearchParams } from "react-router-dom";
import products from "./products.json";

/* eslint-disable react/prop-types */
const Product = ({ productName, image, price, quantity }) => {
  const params = useParams();

  const [searchParams] = useSearchParams();

  const product = products.find(
    (pd) => pd.id === (params.productId || searchParams.get("id"))
  );

  return (
    <div
      style={{
        margin: 8,
        padding: 8,
        border: "1px solid",
        borderRadius: "4px",
      }}
    >
      <img
        src={image || product?.image || ""}
        style={{ height: 200, width: 300, objectFit: "contain" }}
      />
      <h2>{productName || product?.productName || ""}</h2>
      <h3>{price || product?.price || ""}</h3>
      <h4>Qty: {quantity || product?.quantity || ""}</h4>
    </div>
  );
};

export default Product;
