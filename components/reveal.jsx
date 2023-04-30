import { useState, useEffect } from "react";

export default function Reveal() {
  const [time, setTime] = useState(new Date());
  const [playL, setPlayL] = useState(false);
  const [playR, setPlayR] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const nextToDraw = new Date(
      time.getFullYear(),
      time.getMonth(),
      time.getDate(),
      time.getHours(),
      Math.floor(time.getMinutes() / 2) * 2 + 2,
      0,
      0
    );
    const timeToDraw = Math.floor((nextToDraw - time) / 1000);
    if( timeToDraw < 30 || timeToDraw > 90 ){
      setPlayL(true);
      setPlayR(true);
    } else {
      setPlayR(false);
      setPlayL(false);
    }
    console.log(timeToDraw);

  }, [time]);

  return (
 
        <div className="w-full h-full relative flex">
          <img
          src={"/l.jpg"}
          alt={`left`}
          className={`w-1/2 h-full transition-all bg-black rounded-l-3xl pl-5 py-5 object-fill duration-1000 ${playL ? 'ml-[0%] opacity-100' : 'ml-[-50%] opacity-0'}`}
        />
        <img
          src={"/r.jpg"}
          alt={`left`}
          className={` w-1/2 h-full absolute transition-all bg-black rounded-r-3xl pr-5 py-5 object-fill duration-1000 ${playR ? 'ml-[50%] opacity-100' : 'ml-[100%] opacity-0'}`}
        />
        </div>

  );
}
