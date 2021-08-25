import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { useDispatch } from "react-redux";

export const NavBar = () => {
  const dispatch = useDispatch();

  const [values, handleInputChange] = useForm("");

  useEffect(() => {}, [values]);

  const handlePlataformClick = (e) => {
    e.preventDefault();
    const plataform = e.target.id;
    const action = { type: plataform };
    dispatch(action);
  };

  const handleCategoryClick = (e) => {
    e.preventDefault();
    const category = e.target.id;
    const action = { type: category };
    dispatch(action);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4 fs-5 bg-dark bg-gradient ps-5 position">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <i className="far fa-hand-scissors"></i> <i>DalePlay.com</i>
        </NavLink>
        <div className="collapse navbar-collapse ms-5" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Plataforma
              </NavLink>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li onClick={handlePlataformClick}>
                  <NavLink
                    activeClassName=""
                    className="dropdown-item"
                    to="/"
                    id="Pc"
                  >
                    Windows (PC)
                  </NavLink>
                </li>
                <li onClick={handlePlataformClick}>
                  <NavLink
                    activeClassName=""
                    className="dropdown-item"
                    to="/"
                    id="Web"
                  >
                    Browser (Web)
                  </NavLink>
                </li>
                <li onClick={handlePlataformClick}>
                  <NavLink
                    activeClassName=""
                    className="dropdown-item"
                    to="/"
                    id="Todas Plataformas"
                  >
                    Todas
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categoria
              </NavLink>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li onClick={handleCategoryClick}>
                  <NavLink
                    activeClassName=""
                    className="dropdown-item"
                    to="/"
                    id="MMORPG"
                  >
                    MMORPG
                  </NavLink>
                </li>
                <li onClick={handleCategoryClick}>
                  <NavLink
                    activeClassName=""
                    className="dropdown-item"
                    to="/"
                    id="Shooter"
                  >
                    Shooter
                  </NavLink>
                </li>
                <li onClick={handleCategoryClick}>
                  <NavLink
                    activeClassName=""
                    className="dropdown-item"
                    to="/"
                    id="Estrategia"
                  >
                    Estrategia
                  </NavLink>
                </li>
                <li onClick={handleCategoryClick}>
                  <NavLink
                    activeClassName=""
                    className="dropdown-item"
                    to="/"
                    id="MOBA"
                  >
                    MOBA
                  </NavLink>
                </li>
                <li onClick={handleCategoryClick}>
                  <NavLink
                    activeClassName=""
                    className="dropdown-item"
                    to="/"
                    id="Carrera"
                  >
                    Carrera
                  </NavLink>
                </li>
                <li onClick={handleCategoryClick}>
                  <NavLink
                    activeClassName=""
                    className="dropdown-item"
                    to="/"
                    id="Deporte"
                  >
                    Deporte
                  </NavLink>
                </li>
                <li onClick={handleCategoryClick}>
                  <NavLink
                    activeClassName=""
                    className="dropdown-item"
                    to="/"
                    id="Mundo Abierto"
                  >
                    Mundo Abierto
                  </NavLink>
                </li>
                <li onClick={handleCategoryClick}>
                  <NavLink
                    activeClassName=""
                    className="dropdown-item"
                    to="/"
                    id="PvP"
                  >
                    PvP
                  </NavLink>
                </li>
                <li onClick={handleCategoryClick}>
                  <NavLink
                    activeClassName=""
                    className="dropdown-item"
                    to="/"
                    id="Primera Persona"
                  >
                    Primera Persona
                  </NavLink>
                </li>
                <li onClick={handleCategoryClick}>
                  <NavLink
                    activeClassName=""
                    className="dropdown-item"
                    to="/"
                    id="Tercera Persona"
                  >
                    Tercera Persona
                  </NavLink>
                </li>
                <li onClick={handleCategoryClick}>
                  <NavLink
                    activeClassName=""
                    className="dropdown-item"
                    to="/"
                    id="Anime"
                  >
                    Anime
                  </NavLink>
                </li>
                <li onClick={handleCategoryClick}>
                  <NavLink
                    activeClassName=""
                    className="dropdown-item"
                    to="/"
                    id="Card"
                  >
                    Card
                  </NavLink>
                </li>
                <li onClick={handleCategoryClick}>
                  <NavLink
                    activeClassName=""
                    className="dropdown-item"
                    to="/"
                    id="Battle Royale"
                  >
                    Battle Royale
                  </NavLink>
                </li>
                <li onClick={handleCategoryClick}>
                  <NavLink
                    activeClassName=""
                    className="dropdown-item"
                    to="/"
                    id="Fantasía"
                  >
                    Fantasía
                  </NavLink>
                </li>
                <li onClick={handleCategoryClick}>
                  <NavLink
                    activeClassName=""
                    className="dropdown-item"
                    to="/"
                    id="Lucha"
                  >
                    Lucha
                  </NavLink>
                </li>
                <li onClick={handleCategoryClick}>
                  <NavLink
                    activeClassName=""
                    className="dropdown-item"
                    to="/"
                    id="Acción"
                  >
                    Acción
                  </NavLink>
                </li>
                <li onClick={handleCategoryClick}>
                  <NavLink
                    activeClassName=""
                    className="dropdown-item"
                    to="/"
                    id="Militar"
                  >
                    Militar
                  </NavLink>
                </li>
                <li onClick={handleCategoryClick}>
                  <NavLink
                    activeClassName=""
                    className="dropdown-item"
                    to="/"
                    id="Vuelo"
                  >
                    Vuelo
                  </NavLink>
                </li>
                <li onClick={handleCategoryClick}>
                  <NavLink
                    activeClassName=""
                    className="dropdown-item"
                    to="/"
                    id="Horror"
                  >
                    Horror
                  </NavLink>
                </li>
                <li onClick={handleCategoryClick}>
                  <NavLink
                    activeClassName=""
                    className="dropdown-item"
                    to="/"
                    id="Todas Categorias"
                  >
                    Todas
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                aria-current="page"
                exact
                to="/donations"
              >
                Donaciones
              </NavLink>
            </li>
          </ul>
        </div>

        <form className="d-flex  form-navbar">
          <input
            className="form-control"
            type="text"
            placeholder="Buscar por nombre del de juego"
            value={values}
            onChange={handleInputChange}
          />
        </form>
      </div>
    </nav>
  );
};
