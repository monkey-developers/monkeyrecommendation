import { Link, useNavigate } from '@tanstack/react-router'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import { getUser, loginUser } from '../storage/localStorage';
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    })

    const user = getUser()

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
        onClose: () => navigate({ to: "/" }),
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
      if(user){
        navigate({ to: "/" })
      }
    },[])

    function handleLoginUser(){
        const data = {
            username: inputs.username,
            password: inputs.password
        }
        axios
        .post(`${import.meta.env.VITE_API}/api/user/login`, data)
        .then((res) => {
          if (res) {
            loginUser(res.data.data)
            console.log(user)
            notify();
          }
        })
        .catch(() => {
            notifyErr();
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
      };

    return(
        <div className="h-[calc(100vh-64px)] w-full flex flex-col items-center justify-center gap-2">
            <div className="bg-gray-900 h-fit w-fit p-5 flex flex-col items-center gap-4 rounded-xl">
                <div className="flex flex-col">
                    <label>Username</label>
                    <input
                        className="w-72 border-b border-1 bg-transparent focus:outline-none"
                        onChange={handleChange}
                        name="username"
                        value={inputs.username}
                    />
                </div>
                <div className="flex flex-col">
                    <label>Password</label>
                    <input
                        className="w-72 bg-transparent border-b border-1 focus:outline-none"
                        onChange={handleChange}
                        name="password"
                        value={inputs.password}
                    />
                </div>
                <button className="bg-main-color py-1 px-4 rounded" onClick={handleLoginUser}>Sign Up</button>
            </div>
            <Link to="/" className="hover:text-main-color">Return to home</Link>
            <ToastContainer />
        </div>
    )
}