import "./navbarStyle.scss";

export const Navbar = () => {
  return (
    <nav>
      <div className="main-name">
        <span>Monkey</span>
        <a href="https://github.com/monkey-developers/monkeyrecommendation" target={"_blank"} className="name-link">recommendation</a>
      </div>
      <div className="secondary-name">
        <span>Made by:</span>
        <a href="https://github.com/iguoliveira" target={"_blank"} className="name-link"> iguoliveira</a>
      </div>
    </nav>
  );
};
