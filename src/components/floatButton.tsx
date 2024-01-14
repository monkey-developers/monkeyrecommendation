import { Link } from "@tanstack/react-router";

export const FloatButton = () => {
  return (
    <Link
      to="/recommend"
      className="bg-[rgba(0,0,0,.25)] fixed bottom-2 right-2 rounded-3xl h-7 w-7"
    >
      <img src="float-button-icon.svg" />
    </Link>
  );
};
