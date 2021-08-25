import React from "react";
import { useSelector } from "react-redux";
import { useFetch } from "../hooks/useFetch";
import { Cards } from "./Cards";

export const HomeScreen = () => {
  const { plataform, plataformSelect } = useSelector(
    (state) => state.plataform
  );

  const { category, categorySelect } = useSelector((state) => state.category);

  const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity${plataform}${category}`;

  const { data, loading } = useFetch(url);

  return (
    <div className="home-screen">
      <div className="banner">
        <h1>
          <i className="far fa-hand-scissors"></i> DalePlay.com
        </h1>
        <h4>
          <i>Los mejores juegos Free To Play encontralos Acá!</i>
        </h4>
      </div>
      <div className="filter-search">
        <h3 className="categories">
          Mas Populares {plataform !== "" && `> ${plataformSelect}`}{" "}
          {category !== "" && `> ${categorySelect}`}
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
