import Link from "next/link";
import React from "react";

const NewsList = ({ newsList }) => {
  return (
    <div>
      <h1>List of recent News</h1>
      {newsList.map((news) => (
        <h2 key={news.id}>
          {news.title}: {news.category}: {news.description}
        </h2>
      ))}
    </div>
  );
};

export default NewsList;

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();
  return { props: { newsList: data } };
};
