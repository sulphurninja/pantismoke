import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function Winnings() {
  const [drawTime, setDrawTime] = useState("");
  const [result, setResult] = useState("");

  // Calculate the current draw time with 5-minute intervals
  const now = new Date();
  const currentMinutes = now.getMinutes();
  const nearestMultipleOfFive = (Math.floor(currentMinutes / 2) * 2);
  const currentDrawTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    now.getHours(),
    nearestMultipleOfFive,
    0
  ).toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 0)); // Delay for 1 second
      try {
        const response = await axios.get(
          `/api/getPrior?drawTime=${currentDrawTime}`
        );
        const result = response.data.couponNum;
        if (result !== undefined) {
          setResult(result);
          setDrawTime(currentDrawTime);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    function open(){
      const hide = "ml:[100%]"
      return hide
    }
  }, [currentDrawTime]);

  return (
    <div className="h-full rounded-3xl relative">
      {result !== undefined && (
        <div className="w-full h-full object-cover ">
          <img
            className="h-full w-full rounded-3xl p-2 absolute "
            src={`/images/${result === 0 ? "0.png" : result + ".png"}`}
            alt={`Winning Image for ${result}`}
          />
          <motion.div
            initial="left"
            animate="mid"
            variants={{
              left: {
                position: 'relative',
                transition: {
                  delay: 0.4,
                  
                },
              },
              mid: {
                position: 'relative',
                transition: {
                  delay: 0.4,
                },
              },
            }}
          >
            <img src="l.jpg" className="w-full h-full absolute" />
            <img src="r.jpg" className="w-full h-full absolute" />
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Winnings;
