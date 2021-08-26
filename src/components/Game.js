import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import CarouselComponent from "./CarouselComponent";
import { NavLink } from "react-router-dom";

export const Game = () => {
  const { gameId } = useParams();

  const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`;

  const { data, loading } = useFetch(url);

  return (
    <div className="game-screen">
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
          {}
          <NavLink to="/">Home</NavLink> {`> Game`}
          {data && `> ${data.platform}`}
          {data && ` > ${data.genre}`}
        </h3>
      </div>
      {loading ? (
        <div className="text-center mt-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="game-container animate__animated animate__fadeIn animate__slow">
          <div className="game-info-container">
            <div className="img-container">
              <img src={data.thumbnail} alt="thumbnail" />
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block btn-img"
              >
                PLAY <b>FREE</b> NOW
              </button>
            </div>
            <div className="info-container">
              <div className="data-container">
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <div className="info-add">
                  <div>
                    <p>
                      <b>DEVELOPER: </b>
                      {data.developer}
                    </p>
                    <p>
                      <b>PUBLISHER: </b>
                      {data.publisher}
                    </p>
                  </div>
                  <div>
                    <p>
                      <b>RELEASE DATA: </b>
                      {data.release_date}
                    </p>
                    <p>
                      <b>GENRE: </b>
                      {data.genre}
                    </p>
                  </div>
                  <div>
                    <p>
                      <b>PLATFORM: </b>
                      {data.platform}
                    </p>
                    <p>
                      <b>STATUS: </b>
                      {data.status}
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel"></div>
              <CarouselComponent images={data.screenshots} title={data.title} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
