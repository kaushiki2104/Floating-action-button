import { useState } from "react";
import RandomPassword from "./component/RandomPassword";
import "./App.css";
// import GeneratedContent from './component/GenerateComponent';
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Container } from "@mui/material";
import PopUp from "./component/PopUp";
function App() {
  let [color, setColor] = useState("olive");
  const [changeColor, setChangeColor] = useState("black");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <br></br>
        <RandomPassword color={changeColor} />
      </div>

      {/* footer */}
      {/* <div className='footer'> */}
      <div className="fixed flex flex-wrap justify-center  bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "red" }}
            onClick={() => {
              setColor("red");
              setChangeColor("yellow");
            }}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "green" }}
            onClick={() => {
              setColor("green");
              setChangeColor("orange");
            }}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "black" }}
            onClick={() => {
              setColor("black");
              setChangeColor("white");
            }}
          >
            Black
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg "
            style={{ backgroundColor: "yellow" }}
            onClick={() => {
              setColor("yellow");
              setChangeColor("black");
            }}
          >
            Yellow
          </button>
          {/* <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "blue" }}
            onClick={() => {
              setColor("blue");
              setChangeColor("white");
            }}
          >
            Blue
          </button> */}
          {/* <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "pink" }}
            onClick={() => {
              setColor("pink");
              setChangeColor("black");
            }}
          >
            Pink
          </button> */}
          {/* <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg "
            style={{ backgroundColor: "white" }}
            onClick={() => {
              setColor("white");
              setChangeColor("blue");
            }}
          >
            White
          </button> */}
        </div>
      </div>
      <PopUp />

    </>
  );
}

export default App;
