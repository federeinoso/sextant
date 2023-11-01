import Logo from "../../assets/cisco-logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <img src={Logo} alt="cisco logo" className="header-logo" />
      <span className="header-text">Software Engineering</span>
    </div>
  );
};

export default Header;
