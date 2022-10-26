import "./navbarStyle.scss";

export const Navbar = () => {
  return (
    <nav>
      <div className="main-name">
        <span>Monkey</span>
        <a className="name-link">recommendation</a>
      </div>
      <div className="secondary-name">
        <span>Made by:</span>
        <span className="name-link"> iguoliveira</span>
      </div>
    </nav>
  );
};
