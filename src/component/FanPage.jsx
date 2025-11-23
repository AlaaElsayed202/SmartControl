import React, { useState } from 'react'

export default function FanPage() {

const [FanState, setFanState] = useState(false);
const [FanSpeed, setFanSpeed] = useState(0);
 const Toggle = () => {
  setFanState(!FanState);
  if (FanState) setFanSpeed(0);
};
 const Speed = () => {
  if (!FanState) return;
  if (FanSpeed < 3) setFanSpeed(FanSpeed + 1);
  else setFanSpeed(1);
};
  const spinDuration = FanSpeed === 1 ? ".4s" : FanSpeed === 2 ? ".3s" : FanSpeed === 3 ? "0.2s" : "0s";

  return (
    <>
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white  gap-10"> 
    <div className="flex gap-2 items-center">
      <span className=" flex gap-2 items-center">Fan is :</span>
      <h1 className={FanState ? "text-green-500 text-xl font-bold" : "text-red-500 text-xl font-bold "}>
        {FanState ? "open" : "close"}
      </h1>

    </div>

    <div className={`relative w-48 h-48 rounded-full flex items-center justify-center`}
     style={{boxShadow :FanState ? "0 0 40px #00f" : "none" }}
    >   

    <div className="absolute w-40 h-40 border-4 border-blue-500 rounded-full "
       style={{
        animation: FanState? `spin ${spinDuration} linear infinite` :"none",
       }}
    >
    </div>
 {[...Array(6)].map((_, i) => (
  <div
    key={i}
    className="absolute w-1 h-12 bg-blue-400 rounded-full opacity-70"
    style={{
      transform: `rotate(${i * 60}deg) translateY(-50%)`,
      animation: FanState ? `spin ${spinDuration} linear infinite` : "none",
    }}
  ></div>
))}


    </div>

    <h2 className="text-lg">Fan speed: {FanSpeed}</h2>

     <div className="flex gap-4">
        <button
          onClick={Toggle}
          className="px-6 py-2 rounded-full bg-red-600 hover:bg-red-500 transition-colors shadow-lg"
        >
          Power
        </button>
        <button
          onClick={Speed}
          className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg"
        >
          Speed
        </button>
      </div>

   <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
  </div>
    </>
  )
}
