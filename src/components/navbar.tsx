export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-main-theme text-white sm:px-20 py-2 px-2 w-screen">
      <div>
        <img src="mkdevs-logo.svg" className="h-7" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl">
          Monkey<span className="text-main-color">recommendation</span>
        </span>
        <span className="text-sm text-end">
          Developed by{" "}
          <span className="text-main-color">
            {"<"}iguoliveira {"/>"}
          </span>
        </span>
      </div>
    </nav>
  );
};
