type Props = {
    videoId: string
    closePopup: any
}

export const TrailerPopup = ({ videoId, closePopup }: Props) => {
    return(
        <div className="fixed w-screen h-screen flex items-center justify-center">
            <div className="bg-gray-900 h-fit w-1/2 p-5 rounded-xl">
                <div className="flex justify-between pb-2 border-gray-600 border-b">
                    <div className="text-xl font-bold">Trailer</div>
                    <button onClick={closePopup} className="bg-main-color p-1 rounded active:bg-transparent active:border-2 active:border-main-color">Close</button>
                </div>
                <div className="flex justify-center">
                    <iframe
                        className="h-96 w-full"
                        title="Youtube player"
                        sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
                        src={`https://youtube.com/embed/${videoId}?autoplay=1`}
                    ></iframe>
                </div>
            </div>
        </div>
    )
}