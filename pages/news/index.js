import Link from "next/link";
import React, { useState } from "react";

const NewsList = ({ newsList }) => {
  const [news, setNews] = useState(newsList);
  const [filter, setFilter] = useState("");

  const handleSearch = async () => {
    const queryString = filter ? `category=${filter}` : "";
    const response = await fetch(`http://localhost:4000/news?${queryString}`);
    const data = await response.json();
    setNews(data);
  };
  return (
    <div>
      <h1>List of recent News</h1>
      <div>
        <input
          type="text"
          name="article"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        ></input>
        <button onClick={handleSearch}>filter</button>
      </div>
      <hr />
      {news.map((news) => (
        <h2 key={news.id}>
          {news.title}: {news.category}: {news.description}
        </h2>
      ))}
    </div>
  );
};

export default NewsList;

export const getServerSideProps = async (context) => {
  const { category } = context.query;
  const queryString = category ? `category=${category}` : "";
  const response = await fetch(`http://localhost:4000/news?${queryString}`);
  const data = await response.json();

  return { props: { newsList: data } };
};
