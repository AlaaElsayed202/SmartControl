import React, { useState } from 'react';

export default function ConditionerPage() {
  const [temp, setTemp] = useState(0);
  const [isOn, setIsOn] = useState(false);

  
  function turnOnOff() {
    setTemp(0); 
    setIsOn(!isOn); 
  }

  function increase() {
    if (isOn && temp < 30) {
      setTemp(temp + 1);
    }
  }

 
  function decrease() {
    if (isOn && temp > 16) {
      setTemp(temp - 1);
    }
  }


  let moodMessage = "";
  if (!isOn) {
    moodMessage = "Power Off";
  } else if (temp === 0) {
    moodMessage = "🌡️ No Temperature Set";
  } else if (temp < 20) {
    moodMessage = "❄️ It's Cold";
  } else if (temp <= 26) {
    moodMessage = "🌤️ Perfect Weather";
  } else {
    moodMessage = "🔥 It's Hot";
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-700">
      <div className="bg-gray-800 text-white rounded-3xl p-8 shadow-2xl w-[280px] text-center border border-gray-600">

      
        <div className={`rounded-2xl py-6 mb-6 transition-all ${
          isOn ? "bg-[#00ffc3] shadow-[0_0_25px_#00ffc3]" : "bg-gray-600"
        }`}>
          <p className="text-6xl font-bold tracking-wider">
            {temp}°
          </p>
          <p className="text-sm uppercase mt-1 tracking-widest">
            {moodMessage}
          </p>
        </div>

   
        <button
          onClick={turnOnOff}
          className={`w-full py-3 rounded-xl mb-6 font-semibold text-lg transition-all ${
            isOn ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {isOn ? "Turn OFF" : "Turn ON"}
        </button>

        <div className="flex justify-between">
          <button
            onClick={decrease}
            disabled={!isOn || temp === 0}
            className="w-24 py-3 rounded-xl bg-gray-700 hover:bg-gray-600 disabled:bg-gray-500 text-xl"
          >
            –
          </button>

          <button
            onClick={increase}
            disabled={!isOn}
            className="w-24 py-3 rounded-xl bg-gray-700 hover:bg-gray-600 disabled:bg-gray-500 text-xl"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
