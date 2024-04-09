import { Link } from "@tanstack/react-router";

export const FloatButton = () => {
  return (
    <Link
      to="/recommend"
      className="bg-blue-500 fixed bottom-6 right-6 rounded-3xl h-12 w-12 flex"
    >
      <img src="float-button-icon.svg" />
    </Link>
  );
};
