import Link from "next/link";
import React from "react";

const ProductsList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <h1 key={product.id}>
          <Link href={`products/${product.id}`}>
            <a>
              {product.id}: {product.title}: {product.price}
            </a>
          </Link>
        </h1>
      ))}
    </div>
  );
};

export default ProductsList;

const getStaticProps = async () => {
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();
  return { props: { products: data } };
};

export { getStaticProps };
