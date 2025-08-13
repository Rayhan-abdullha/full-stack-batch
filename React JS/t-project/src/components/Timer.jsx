import React, { useEffect, useState } from "react";
import { useRef } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);
    const timerRef = useRef(null)

    const startTimer = () => {
        timerRef.current = setInterval(() => {
            setTimer(prev => prev+1)
        }, 1000)
    }

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setTimer(prev => prev + 1)
        }, 1000)

        return () => {
            clearInterval(timerRef.current)
        }
    }, [])
  return (
    <div className="p-28">
          <h1 className="text-4xl mb-5">Timer: {timer}</h1>
          <button onClickCapture={() => clearInterval(timerRef.current)} className="cursor-pointer border border-sky-100 px-2 py-1 bg-red-400 text-white text-xl" >Stop Watch</button>
          <button onClickCapture={startTimer} className="cursor-pointer border border-sky-100 px-2 py-1 bg-green-400 text-white text-xl" >Start Watch</button>
    </div>
  );
};

export default Timer;
