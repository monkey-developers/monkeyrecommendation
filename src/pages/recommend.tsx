import { useState } from "react";
import { SearchAnimeField } from "../components";
import axios from "axios";
import { useNavigate } from "@tanstack/react-router";
import clsx from "clsx";
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const Recommend = () => {
  const [animeData, setAnimeData] = useState();

  const [err, setErr] = useState("")
  const [inputs, setInputs] = useState({
    author: ""
  });
  const navigate = useNavigate()
  const notify = () => toast.success('Recommended! Redirecting now...', {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "colored",
    onClose: () => navigate({to:"/"})
    })
    const notifyErr = () => toast.error('Error on recommendation =(', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
      })

  const handleChange = (e: any) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  function recommendAnime(){
    if(animeData && inputs.author){
      setErr("")
      const data = {name: animeData.titles.en_jp, image: animeData.posterImage.small, episodes: animeData.episodeCount, status:animeData.status, description: animeData.description, author: inputs.author}
      axios.post(`${import.meta.env.VITE_API}/api/animes/`, data).then((res) => {
        if(res){
          notify()
        }
      })
    }else{
      setErr('Error on recommend, try again')
      notifyErr()
    }
  }

  return (
    <div className="h-full w-full">
      <div className="flex flex-col gap-2 w-1/2">
        <SearchAnimeField setAnimeData={setAnimeData} />
        {animeData && (
          <div>
            Recommendation:{" "}
            <span className="text-main-color uppercase font-bold">
              {animeData.titles.en_jp}
            </span>
          </div>
        )}
        <div className="flex flex-col">
          <label>Author</label>
          <input
            onChange={handleChange}
            name="author"
            value={inputs.author}
            className={clsx({"border-2 border-red-500":err != "" && inputs.author == ""}, "text-black")}
          />
        </div>
        <button className="bg-main-color active:bg-transparent active:border-2 active:border-main-color" onClick={recommendAnime}>Recommend</button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
    </div>
  );
};
