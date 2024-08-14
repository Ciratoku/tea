import logo from "../../images/logo.svg";
import user from "../../images/user.svg";
import card from "../../images/card.svg";
import search from "../../images/search.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <a href="#" className="logo">
            <img src={logo} alt="TealuxE" />
          </a>
          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Black
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Green
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  White
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Oolong
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Pu-erh
                </a>
              </li>
            </ul>
          </nav>
          <ul className="user_actions">
            <li className="user_actions__item">
              <a href="#" className="user-actions__link">
                <img src={card} alt="" />
              </a>
            </li>
            <li className="user_actions__item">
              <a href="#" className="user-actions__link">
                <img src={user} alt="" />
              </a>
            </li>
            <li className="user_actions__item user_actions__item_search">
              <a href="#" className="user-actions__link">
                <img src={search} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
