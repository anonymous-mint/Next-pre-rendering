import { useRouter } from "next/router";
import React from "react";

const Article = ({ articles }) => {
  console.log(articles);
  return (
    <div>
      {articles.map((news) => {
        return (
          <div key={news.id}>
            <h1>{news.title}</h1>
            <p>{news.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Article;

export const getServerSideProps = async (context) => {
  const { category } = context.params;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();

  return { props: { articles: data } };
};
