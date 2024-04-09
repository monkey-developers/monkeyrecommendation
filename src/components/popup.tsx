import { X } from "@phosphor-icons/react";
type Props = {
  text: string;
  title: string;
  closePopup: any;
};

export const Popup = ({ text, closePopup, title }: Props) => {
  return (
    <>
      <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-full backdrop-blur-sm flex items-center justify-center">
        <div className="relative p-4 w-full max-w-2xl max-h-full flex">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <X size={24} onClick={closePopup} cursor={"pointer"} />
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <span>{text}</span>
            </div>
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"></div>
          </div>
        </div>
      </div>
    </>
  );
};
