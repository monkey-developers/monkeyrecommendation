import { Card, FloatButton } from "../components";

const animes = [
  {
    image: "placeholder-anime-image.jpg",
    episodes: 12,
    status: "Airing",
    title: "Jujutsu Kaisen",
    description: "Anime de lutinha muito bom",
    author: "Togers",
  },
  {
    image: "placeholder-anime-image.jpg",
    episodes: 12,
    status: "Airing",
    title: "Golden Time",
    description: "Anime de romance beijos e tudo mais muito bom",
    author: "Abe",
  },
  {
    image: "placeholder-anime-image.jpg",
    episodes: 12,
    status: "Finished",
    title: "Jaku-Chara Tomozaki-kun",
    description: "",
    author: "",
  },
  {
    image: "placeholder-anime-image.jpg",
    episodes: 12,
    status: "Finished",
    title: "Jaku-Chara Tomozaki-kun",
    description: "",
    author: "",
  },
  {
    image: "placeholder-anime-image.jpg",
    episodes: 12,
    status: "Finished",
    title: "Jaku-Chara Tomozaki-kun",
    description: "",
    author: "",
  },
];
export const Homepage = () => {
  return (
    <div className="h-full w-full flex flex-col gap-2 relative">
      {animes.map((item, index) => (
        <Card
          key={index}
          image={item.image}
          episodes={item.episodes}
          status={item.status}
          title={item.title}
          description={item.description}
          author={item.author}
        />
      ))}
      <FloatButton />
    </div>
  );
};
