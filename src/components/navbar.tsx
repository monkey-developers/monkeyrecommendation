import { getUser, logoutUser } from "../storage/localStorage";

export const Navbar = () => {
  const user = getUser();

  function handleLogout() {
    logoutUser();
    window.location.reload();
  }

  return (
    <nav className="flex justify-between items-center bg-main-theme text-white sm:px-20 py-2 px-2 w-screen">
      <div>
        <img src="mkdevs-logo.svg" className="h-7" />
      </div>
      <div>
        {user && (
          <div className="flex items-center gap-5">
            <span>Welcome, {user.name}</span>
            <button className="bg-blue-500 p-2 rounded" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <span className="text-xl">
          Monkey<span className="text-blue-500">recommendation</span>
        </span>
        <span className="text-sm text-end">
          Developed by{" "}
          <span className="text-blue-500">
            {"<"}MKDevs Group {"/>"}
          </span>
        </span>
      </div>
    </nav>
  );
};
