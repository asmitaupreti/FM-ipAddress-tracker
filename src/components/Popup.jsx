import React from 'react'

const Popup = ({ message, displayPopup }) => {
  return (
    <div
      className="absolute bg-black/25 p-5 top-0 bottom-0 right-0 left-0 h-screen w-screen  flex justify-center items-center z-20"
      data-testid="popuperror"
    >
      <div className="bg-white p-4 rounded-lg w-[500px] h-[150px] flex flex-col items-center justify-center space-y-5 shadow-xl transition-all ease-in">
        <p className=" text-center text-lg w-full ">{message}</p>
        <button
          className="py-2 px-4 rounded-lg bg-black text-white"
          onClick={displayPopup}
        >
          Ok
        </button>
      </div>
    </div>
  )
}

export default Popup
