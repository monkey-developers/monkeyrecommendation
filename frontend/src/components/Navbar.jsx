import "./navbar.scss";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <div>
        <div className="main-name">
          <Link to="/">
            <span>Monkey</span>
            <span className="project-name">recommendation</span>
          </Link>
        </div>
        <div className="secondary-name">
          <span>Made by:</span>
          <a
            href="https://github.com/iguoliveira"
            target={"_blank"}
            className="name-link"
          >
            {" "}
            iguoliveira
          </a>
        </div>
      </div>
    </nav>
  );
};
