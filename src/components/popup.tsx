import { X } from "@phosphor-icons/react";

type Props = {
  text: string;
  closePopup: any;
};

export const Popup = ({ text, closePopup }: Props) => {
  return (
    <div className="fixed w-screen h-screen flex items-center justify-center z-50">
      <div className="bg-gray-800 h-fit w-1/2 p-5 rounded-xl">
        <div className="flex justify-between pb-2 border-gray-600 border-b">
          <div className="text-xl font-bold">Synopsis</div>
          <X size={24} onClick={closePopup} cursor={"pointer"} />
        </div>
        <div className="pt-2">{text}</div>
      </div>
    </div>
  );
};
