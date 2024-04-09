import { Link, useNavigate } from "@tanstack/react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUser } from "../storage/localStorage";

export const Register = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
    username: "",
  });

  const user = getUser();

  const navigate = useNavigate();

  const notify = () =>
    toast.success(`Welcome ${inputs.username}! Redirecting now...`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
      onClose: () => navigate({ to: "/login" }),
    });

  const notifyErr = () =>
    toast.error("Error on sign up =(", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });

  useEffect(() => {
    if (user) {
      navigate({ to: "/" });
    }
  }, []);

  function registerUser() {
    const data = {
      email: inputs.email,
      password: inputs.password,
      name: inputs.name,
      username: inputs.username,
    };
    axios
      .post(`${import.meta.env.VITE_API}/api/user/`, data)
      .then((res) => {
        if (res) {
          notify();
        }
      })
      .catch(() => {
        notifyErr();
      });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-[calc(100vh-64px)] w-full flex flex-col items-center justify-center gap-2">
      <Link to="/" className="hover:text-blue-500">
        Return to home
      </Link>
      <div className="bg-gray-900 h-fit w-fit p-5 flex flex-col items-center gap-4 rounded-xl">
        <div className="flex flex-col">
          <label>Name</label>
          <input
            className="w-72 bg-transparent border-b border-1 focus:outline-none text-white"
            onChange={handleChange}
            name="name"
            value={inputs.name}
          />
        </div>
        <div className="flex flex-col">
          <label>Email</label>
          <input
            className="w-72 bg-transparent border-b border-1 focus:outline-none text-white"
            onChange={handleChange}
            name="email"
            value={inputs.email}
          />
        </div>
        <div className="flex flex-col">
          <label>Password</label>
          <input
            className="w-72 bg-transparent border-b border-1 focus:outline-none text-white"
            onChange={handleChange}
            name="password"
            value={inputs.password}
            type="password"
          />
        </div>
        <div className="flex flex-col">
          <label>Username</label>
          <input
            className="w-72 bg-transparent border-b border-1 focus:outline-none text-white"
            onChange={handleChange}
            name="username"
            value={inputs.username}
          />
        </div>
        <button
          className="bg-blue-500 py-1 px-4 rounded"
          onClick={registerUser}
        >
          Sign Up
        </button>
      </div>
      <Link to="/login" className="hover:text-blue-500">
        Login now!
      </Link>
      <ToastContainer />
    </div>
  );
};
