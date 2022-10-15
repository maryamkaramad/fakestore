import React from "react";
import Container from "../../container/Container";
import { ReactComponent as Search } from "../../../assets/svg/Search.svg";
import { ReactComponent as Person } from "../../../assets/svg/Person.svg";
import { ReactComponent as Carticon } from "../../../assets/svg/Card.svg";
import IconButton from "../../IconButton/IconButton";
import "./navbar-style.scss";
import { Link } from "react-router-dom";
import Cart from "../../Cart/Cart";
import { useState } from "react";
const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const menuItem = [
    {
      title: "فروشگاه",
      href: "/",
    },
    {
      title: " درباره ی ما",
      href: "/abouteus",
    },
  ];
  return (
    <nav className="navbarHeader">
      <Container>
        <div className="navbar__contant">
          <div>
            <ul>
              {menuItem.map((item) => (
                <li key={item.title}>
                  <Link to={item.href}> {item.title} </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <IconButton>
                  <a href="/">
                    <Search />
                  </a>
                </IconButton>
              </li>
              <li>
                <IconButton>
                  <a href="/">
                    <Person />
                  </a>
                </IconButton>
              </li>

              <li className="">
                <IconButton onClick={() => setShowCart(true)}>
                  <badge>
                    <Carticon />
                  </badge>
                </IconButton>
                <Cart open={showCart} handleClose={() => setShowCart(false)} />
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
