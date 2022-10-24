import Link from "next/link";
import React from "react";

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <h1 key={post.id}>
          <Link href={`posts/${post.id}`}>
            <a>
              {post.id}: {post.title}
            </a>
          </Link>
        </h1>
      ))}
    </div>
  );
};

export default PostList;

const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return { props: { posts: data.slice(0, 5) } };
};

export { getStaticProps };
