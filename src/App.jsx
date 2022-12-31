import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import arrow from './assets/next.svg'
import "./App.css";

function App() {
  const [width, setWidth] = useState(0);
  const [scrollTime, setScrollTime] = useState(1);
  const [btnWitdth, setBtbWidth] = useState(0);
  const scroll = () => {
    const container = document.querySelector("#carousel");
    if (scrollTime !== 4) {
      let size = window.screen.width;
      container.style.transform = `translateX(${-size * scrollTime}px)`;
      setScrollTime((l) => l + 1);
    } else {
      container.style.transform = `translateX(${0}px)`;
      setScrollTime(1);
    }
  };
  window.addEventListener("resize", (ev) => {
    setWidth(window.screen.width *4);
  });
  useEffect(() => {
    setWidth(window.screen.width*4);
  },[]);
  return (
    <div className={`relative w-[${width/4}]`}>
     <img src={arrow} alt="Next Icon" className="md:hidden sm:hidden absolute top-[30%] right-0 z-10 w-[50px] " onClick={scroll} />
      <div
        className={`md:hidden sm:hidden  flex items-center  justify-start h-[150px] transition-all duration-700`} style={{width:width}}
        id="carousel"
      >
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold  w-[20%]  h-[60px] rounded-md m-[3%]`}
          id="btn"
        >
          Bouton 1
        </button>
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold  w-[20%]  h-[60px] rounded-md m-[3%]`}
          id="btn"
        >
          Bouton 2
        </button>
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold  w-[20%]  h-[60px] rounded-md m-[3%]`}
          id="btn"
        >
          Bouton 3
        </button>
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold  w-[20%]  h-[60px] rounded-md m-[3%]`}
          id="btn"
        >
          Bouton 4
        </button>
      </div>
     
    </div>
  );
}

export default App;
