import logo from "../../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__iner">
          <a href="#" className="logo">
            <img src={logo} alt="TealuxE" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
