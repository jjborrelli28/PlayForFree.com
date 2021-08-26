import React from "react";
import { useSelector } from "react-redux";
import { useFetch } from "../hooks/useFetch";
import { Cards } from "./Cards";

export const HomeScreen = () => {
  const { platform, platformSelect } = useSelector((state) => state.platform);
  const { order, orderSelect } = useSelector((state) => state.order);
  const { category, categorySelect } = useSelector((state) => state.category);
  const { search } = useSelector((state) => state.search);

  const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=${order}${platform}${category}`;

  const { data, loading } = useFetch(url);

  return (
    <div className="home-screen">
      <div className="banner">
        <h1>
          <i className="far fa-hand-scissors"></i> PlayForFree.com
        </h1>
        <h4>
          <i>The best Free To Play games find them Here!</i>
        </h4>
      </div>
      <div className="filter-search">
        <h3 className="categories animate__animated animate__fadeIn animate__slow">
          Home {`> ${orderSelect}`}{" "}
          {platformSelect !== "All" && `> ${platformSelect}`}{" "}
          {categorySelect !== "All" && `> ${categorySelect}`}{" "}
          {search !== "" &&
            `> Filter by name: ${
              search.charAt(0).toUpperCase() + search.slice(1)
            }`}
        </h3>
      </div>
      {loading ? (
        <div className="text-center mt-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <Cards data={data} />
      )}
    </div>
  );
};
