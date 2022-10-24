import { useRouter } from "next/router";
import React from "react";

const Post = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const paths = data.slice(0, 5).map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();


  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return { props: { post: data } };
};
