import { clsx } from "clsx";

type Props = {
  id: number
  image: string;
  title: string;
  episodes: number;
  status: string;
  description: string;
  author: string;
  deleteFunc: any
};

export const Card = ({
  id,
  image,
  description,
  episodes,
  status,
  title,
  author,
  deleteFunc,
}: Props) => {
  
  function deleteAnime(){
    deleteFunc(id)
  }
  return (
    <div className="bg-main-color-transparent flex h-full w-full">
      <img src={image} className="h-full" />
      <div className="p-2 relative w-full">
        <div className="flex absolute top-2 right-2 gap-2">
          <button onClick={deleteAnime}>
            <img src="del-icon.svg" className="h-6" />
          </button>
        </div>
        <span className="font-bold uppercase">{title}</span>
        <div className="flex gap-5">
          <div>
            <span>{episodes} episodes</span>
          </div>
          <div>
            <span
              className={clsx({
                "text-green-500": status.toLocaleLowerCase() == "airing",
                "text-blue-500": status.toLocaleLowerCase() == "finished",
              })}
            >
              {status}
            </span>
          </div>
        </div>
        {description && <p className="text-xs py-2">{description}</p>}
        {author && (
          <div className="text-base s absolute bottom-2 right-2 opacity-50 lowercase">
            {author}
          </div>
        )}
      </div>
    </div>
  );
};
