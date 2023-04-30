import { useState, useEffect } from "react";

export default function Images() {
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


  const handleBetClick = (betId) => {
    const imgname = imageNames[betId];
    console.log(`Placing bet with image ${imgname}`);
  };


  // const win = fetch(`/api/results?drawTime=${drawTime}`).then(res => res.json())
  // console.log(win)

  return (
    <div className="grid grid-rows-2 grid-cols-6 w-full h-full">
      {imgs.map((img, i) => (
        <button key={i} onClick={() => handleBetClick(i)}>
          <img
            src={`/images/${img}`}
            className={`w-full h-full   ${
              i === index
                ? "border rounded-2xl"
                : "rounded-2xl border"
            } `}
            alt={img}
          />
        </button>
      ))}
    </div>
  );
}
