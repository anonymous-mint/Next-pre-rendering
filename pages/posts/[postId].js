import React from "react";

const post = ({ post }) => {
  console.log(post);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default post;

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
  console.log(paths);
  return {
    paths,
    // paths: [
    //   {
    //     params: { postId: "1" },
    //   },
    //   {
    //     params: { postId: "2" },
    //   },
    //   {
    //     params: { postId: "3" },
    //   },
    //   {
    //     params: { postId: "4" },
    //   },
    //   {
    //     params: { postId: "5" },
    //   },
    // ],
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  console.log(params, "------", context);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  return { props: { post: data } };
};
