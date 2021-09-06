import React, { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();

  const [values, handleInputChange] = useForm("");

  useEffect(() => {}, [values]);

  const handleOrderClick = (e) => {
    e.preventDefault();
    const order = e.target.textContent;
    const action = { type: order };
    dispatch(action);
  };

  const handlePlatformClick = (e) => {
    e.preventDefault();
    const platform = e.target.textContent;
    const action = { type: platform };
    dispatch(action);
  };

  const handleCategoryClick = (e) => {
    e.preventDefault();
    const category = e.target.textContent;
    const action = { type: category };
    dispatch(action);
  };

  const { orderSelect } = useSelector((state) => state.order);
  const { platformSelect } = useSelector((state) => state.platform);
  const { categorySelect } = useSelector((state) => state.category);

  return (
    <div>
      <Navbar
        className="navbar navbar-expand-lg navbar-dark bg-dark p-4 fs-5 bg-dark bg-gradient ps-5 position"
        expand="md"
      >
        <NavbarBrand href="/" className="ms-1 me-5">
          <i className="far fa-hand-scissors"></i> <i>PlayForFree.com</i>
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Order: {orderSelect}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={handleOrderClick}>
                  Popularity
                </DropdownItem>
                <DropdownItem onClick={handleOrderClick}>
                  Alphabetical
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Platform: {platformSelect}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={handlePlatformClick}>
                  Windows (PC)
                </DropdownItem>
                <DropdownItem onClick={handlePlatformClick}>
                  Browser (Web)
                </DropdownItem>
                <DropdownItem onClick={handlePlatformClick}>All</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Category: {categorySelect}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={handleCategoryClick}>
                  MMORPG
                </DropdownItem>
                <DropdownItem onClick={handleCategoryClick}>
                  Shooter
                </DropdownItem>
                <DropdownItem onClick={handleCategoryClick}>
                  Strategy
                </DropdownItem>
                <DropdownItem onClick={handleCategoryClick}>MOBA</DropdownItem>
                <DropdownItem onClick={handleCategoryClick}>
                  Racing
                </DropdownItem>
                <DropdownItem onClick={handleCategoryClick}>
                  Sports
                </DropdownItem>
                <DropdownItem onClick={handleCategoryClick}>
                  Open World
                </DropdownItem>
                <DropdownItem onClick={handleCategoryClick}>PvP</DropdownItem>
                <DropdownItem onClick={handleCategoryClick}>
                  First Person
                </DropdownItem>
                <DropdownItem onClick={handleCategoryClick}>
                  Third Person
                </DropdownItem>
                <DropdownItem onClick={handleCategoryClick}>Anime</DropdownItem>
                <DropdownItem onClick={handleCategoryClick}>Card</DropdownItem>
                <DropdownItem onClick={handleCategoryClick}>
                  Battle Royale
                </DropdownItem>
                <DropdownItem onClick={handleCategoryClick}>
                  Fantasy
                </DropdownItem>
                <DropdownItem onClick={handleCategoryClick}>
                  Fighting
                </DropdownItem>
                <DropdownItem onClick={handleCategoryClick}>
                  Action
                </DropdownItem>
                <DropdownItem onClick={handleCategoryClick}>
                  Military
                </DropdownItem>
                <DropdownItem onClick={handleCategoryClick}>
                  Flight
                </DropdownItem>
                <DropdownItem onClick={handleCategoryClick}>
                  Horror
                </DropdownItem>
                <DropdownItem onClick={handleCategoryClick}>All</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem className="input-search">
              <form className="d-flex form-navbar search">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search by game name"
                  value={values}
                  onChange={handleInputChange}
                />
              </form>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
