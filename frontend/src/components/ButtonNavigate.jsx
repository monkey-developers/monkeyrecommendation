import "./buttonNavigate.scss";
import { Link } from "react-router-dom";

export const ButtonNavigate = ({ url, children }) => {
  return (
    <Link to={url} className="navigate-button">
      {children}
    </Link>
  );
};
