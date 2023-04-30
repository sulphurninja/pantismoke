import Link from "next/link";
import React, { useEffect, useState } from "react";

import SalesPerc from "../components/SalesPerc";
import Time from "./time";

const AdminPanel = () => {
  const imgs = Array.from({ length: 12 }, (_, i) => `${i}.png`);
  const imageNames = [
    "chatri",
    "ball",
    "suraj",
    "panti",
    "gai",
    "bucket",
    "patang",
    "bhavrah",
    "gulab",
    "pakuli",
    "kabutar",
    "sasah",
  ];
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState(new Date());
  const [winningNumbers, setWinningNumbers] = useState(Array(12).fill(null));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const nextToDraw = new Date(
    time.getFullYear(),
    time.getMonth(),
    time.getDate(),
    time.getHours(),
    Math.floor((time.getMinutes() + 2) / 2) * 2,
    0,
    0
  );

  const timeDiff = Math.floor((nextToDraw - time) / 1000);
  const minutes = Math.floor(timeDiff / 60);
  const seconds = timeDiff % 60;
  const timeToDraw = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
  const nextToDrawtime = nextToDraw.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  console.log(nextToDrawtime);
 
  {
    /** iMAGE BETS */
  }

  const handleBetClick = async (index) => {
    const imgname = imageNames[index];
    try {
      const response = await fetch("/api/updateWinningNumber", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          couponNum: index ,
          nextToDrawtime: nextToDrawtime,
        }),
      });
      const data = await response.json();
      if (data.success) {
        const newWinningNumbers = [...winningNumbers];
        newWinningNumbers[index] = index + 1;
        setWinningNumbers(newWinningNumbers);
      }
    } catch (err) {
      console.error(err);
    }
    console.log(`${imgname}`);
  };

  return (
    <body>
      <main className="bg-black w-screen h-screen">
        <div className="h-1/6">
        <Time/>
        </div>
        <div className="h-16">
        
          {/* <HandleResults /> */}
        
          <Link href='/secretregister'>
           <h1 className='text-white text-2xl mt-[8%] font-bold'>Create User ID</h1>
           </Link>
            <Link href='/userlist'>
           <h1 className='text-white text-2xl ml-[] mt-[-10%] font-bold'>User List</h1>
           </Link>
           <div className="absolute mt-[-25%] ml-[80%]">
     
            <SalesPerc/>
            </div>
        </div>
        
       
        
        <div className="h-1/2 w-full">
        
          <div className="grid grid-rows-2 grid-cols-6 w-full h-full">
          
            {imgs.map((img, i) => (
              <button key={i} onClick={() => handleBetClick(i)}>
                <img
                  src={`/images/${img}`}
                  className={`w-full h-full   ${
                    i === index
                      ? "border-white border-4 border-dashed rounded-xl"
                      : "border-transparent"
                  } `}
                  alt={img}
                />
              </button>
            ))}
          
          </div>
        </div>
      </main>
    </body>
  );
};

export default AdminPanel;
