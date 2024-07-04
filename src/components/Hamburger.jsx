import hamburger from "../assets/images/hamburger.png";
import close from "../assets/images/close.png";
import { listStyle } from "./Config";
import {useState } from "react";
const Hamburger = () => {
  const [isMenu, setIsMenu] = useState("false");
  return (
    <>
      {isMenu ? (
        <img
          className="w-[100%] md:hidden"
          src={hamburger}
          alt="hamburger menu"
          onClick={() => {
            setIsMenu(false);
          }}
        />
      ) : (
        <div className="w-[36px]">
          <img
            className="w-[100%] md:hidden"
            src={close}
            alt="list menu"
            onClick={() => {
              setIsMenu(true);
            }}
          />
          <div className="w-full h-[250px] bg-ivory absolute md:hidden left-0 top-[4.5rem]">
            <ul className="w-[100%] h-[100%] flex flex-col justify-around items-center">
              <li><a className={listStyle} href="#features">Home</a></li>
              <li><a className={listStyle} href="#pricing">Services</a></li>
              <li><a className={listStyle} href="#about-us">Vehicles</a></li>
              <li><a className={listStyle} href="#contact">Contact</a></li>
              <button
              className="px-[25px] text-[18px] font-medium font-display rounded-md tracking-wider"
            >
              Login
            </button>
              <button
              className="px-[25px] text-[18px] font-medium font-display rounded-md tracking-wider"
            >
              Signup
            </button>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
export default Hamburger;