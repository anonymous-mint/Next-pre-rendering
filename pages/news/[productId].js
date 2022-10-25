import { useRouter } from "next/router";
import React from "react";

const Product = ({ product }) => {
  const route = useRouter();

  if (route.isFallback) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.price}</p>
    </div>
  );
};

export default Product;

export const getStaticPaths = async () => {
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();

  const paths = [
    {
      params: {
        productId: `1`,
      },
    },
    {
      params: {
        productId: `2`,
      },
    },
  ];
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const response = await fetch(
    `http://localhost:4000/products/${params.productId}`
  );
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }
  console.log('regenerated');
  return { props: { product: data }, revalidate: 1 };
};
