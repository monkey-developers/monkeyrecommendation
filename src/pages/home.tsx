import { useEffect, useState } from "react";
import { Card, FloatButton } from "../components";
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios";

export const Homepage = () => {
  const [animes, getAnimes] = useState<[{id:number, name: string, image: string, episodes: number, status: string, description: string, author: string}]>([{id: 0, name: 'none', image:'none', episodes:0, status:"none", description: "none", author: "none"}])
  const notify = () => toast.success('Deleted!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "colored",
    })

  function getAllAnimes(){
    axios.get(`${import.meta.env.VITE_API}/api/animes`).then((res) => getAnimes(res.data.data))
  }

  useEffect(() => {
    getAllAnimes()
  },[])

  function deleteRecommendation(id: number){
    axios.delete(`${import.meta.env.VITE_API}/api/anime/${id}`).then(notify)
    getAllAnimes()
  }

  return (
    <div className="h-full w-full flex flex-col gap-2 relative">
      {animes.map((item, index) => (
        <Card
          key={index}
          id={item.id}
          image={item.image}
          episodes={item.episodes}
          status={item.status}
          title={item.name}
          description={item.description}
          author={item.author}
          deleteFunc={deleteRecommendation}
        />
      ))}
      <FloatButton />
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
