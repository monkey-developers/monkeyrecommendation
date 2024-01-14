import { clsx } from "clsx";

type Props = {
  image: string;
  title: string;
  episodes: number;
  status: string;
  description?: string;
  author?: string;
};

export const Card = ({
  image,
  description,
  episodes,
  status,
  title,
  author,
}: Props) => {
  return (
    <div className="bg-main-color-transparent flex h-full w-full">
      <img src={image} className="h-full" />
      <div className="p-2 relative w-full">
        <div className="flex absolute left-2 bottom-2 gap-2">
          <button>
            <img src="del-icon.svg" className="h-5" />
          </button>
          <button>
            <img src="edit-icon.svg" className="h-5" />
          </button>
        </div>
        <span className="font-bold uppercase">{title}</span>
        <div className="flex gap-5">
          <div>
            <span>{episodes}eps</span>
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
        {description && <p className="text-sm p-2">{description}</p>}
        {author && (
          <div className="text-sm absolute bottom-2 right-2 opacity-50 lowercase">
            {author}
          </div>
        )}
      </div>
    </div>
  );
};
