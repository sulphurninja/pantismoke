import { useState, useEffect,useContext } from "react";
import React from "react";
import moment from 'moment-timezone';
import { useRouter } from 'next/router'
import Cookie from 'js-cookie';
import { DataContext } from "../store/GlobalState";
import { Howl } from "howler";




export default function Time() {
  const [time, setTime] = useState(moment().tz("Asia/Kolkata"));
  const { state = {}, dispatch } = useContext(DataContext);
  const { auth = {} } = state;
  const router = useRouter();

const buttonClickSound4 = new Howl({
  src: ['/logout.mp3'],
});

const Router = useRouter();

function run() {

  Router.reload()


}

const handleLogoutClick = () => {
  setShowModal(false);
  handleLogout();
};

const handleCloseClick = () => {
  setShowModal(true);
};
const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(moment().tz("Asia/Kolkata"));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const nextToDraw = moment().tz("Asia/Kolkata").add(2 - (moment().tz("Asia/Kolkata").minute() % 2), 'minutes').seconds(0);
  function run() {
    window.location.reload();
  }

  const timeDiff = Math.floor((nextToDraw - time) / 1000);
  const minutes = Math.floor(timeDiff / 60);
  const seconds = timeDiff % 60;
  const timeToDraw = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  const nextToDrawtime = nextToDraw.format("hh:mm A");
  
  const handleLogout = () => {
    Cookie.remove('refreshtoken', { path: '/api/auth/refreshToken' })
    localStorage.removeItem('firstLogin')
    dispatch({ type: 'AUTH', payload: {} })
    router.push('/')
  }
  const isActive = (r) => {
    if (r === router.pathname) {
      return " active";
    } else {
      return "";
    }
  };

  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (auth && auth.user && auth.user.userName) {
      setUserName(auth.user.userName);
    }
    console.log(userName, "this is my user bitch");
  }, [auth]);



  const [isFullScreen, setIsFullScreen] = useState(false);

  const fullScreenButton = () => {
    if (!isFullScreen) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };


  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center h-full ">
        <p className="border-r-2 rounded-3xl h-full w-1/5 bg-black flex justify-around items-center text-3xl">
          Time- {time.format("hh:mm:ss A")}
        </p>
        <button className="h-auto w-fit text-5xl flex justify-center  bg-black text-white border-x-2 rounded-3xl" onClick={() => run()}>
        ↻
        </button>

        <p className="border-r-2 rounded-full h-full w-1/5 bg-black border-l-2 flex justify-around items-center text-5xl">
          {timeToDraw}
        </p>
        <img className='cursor-pointer h-[20px] lg:h-[40px]' src='/close.png' onClick={() => { buttonClickSound4.play(); handleCloseClick(); }} />
        <p className="border-l-2 rounded-3xl h-full w-1/5 bg-black flex justify-around items-center text-3xl">
          Draw @ {nextToDrawtime}
        </p>

        
      </div>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="relative bg-white w-80 rounded-lg shadow-lg">
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Logout</h2>
                <p className="text-gray-700">
                  Are you sure you want to logout?
                </p>
              </div>
              <div className="p-4 bg-gray-100 rounded-b-lg">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleLogoutClick}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
