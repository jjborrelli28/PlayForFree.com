import React, { useState, useEffect } from "react";
import { Pagination } from "./Pagination";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const Cards = ({ data }) => {
  const handlePlay = (url) => {
    window.location = `${url}`;
  };

  const { search } = useSelector((state) => state.search);

  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [search]);

  const gamesFilter = data.filter((game) =>
    game.title.toLocaleLowerCase().includes(search.toLowerCase())
  );

  const numberOfPages = Math.ceil(gamesFilter.length / 20);

  let pages = [];

  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(i);
  }

  const games = gamesFilter.slice((page - 1) * 20, [page * 20]);

  return (
    <main>
      {gamesFilter.length === 0 ? (
        <h1 className="message animate__animated animate__fadeIn animate__slow">
          No se encontraron resultados para su busqueda
        </h1>
      ) : (
        <div className="cards-container">
          {games.map((game) => (
            <div
              key={game.title}
              className="card bg-dark animate__animated animate__fadeIn animate__slow"
            >
              <div>
                <img
                  src={game.thumbnail}
                  alt={game.title}
                  className="thumbnail"
                />
              </div>
              <div className="description-container">
                <h4>{game.title}</h4>
                <p>
                  <b>GENRE</b>: {game.genre.toUpperCase()}
                </p>
                <p>
                  <b>DEVELOPER</b>: {game.developer.toUpperCase()}
                </p>
                <p>
                  <b>PLATFORM</b>: {game.platform.toUpperCase()}
                </p>
                <NavLink className="more-info" exact to={`/game/${game.id}`}>
                  More info...
                </NavLink>
              </div>
              <div className="btn-card-container">
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block btn-card"
                  onClick={() => handlePlay(game.game_url)}
                >
                  PLAY <b>FREE</b> NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {<Pagination page={page} pages={pages} setPage={setPage} />}
    </main>
  );
};
