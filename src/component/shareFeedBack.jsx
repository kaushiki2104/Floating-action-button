import { TextareaAutosize } from "@mui/material";
import React, { useState } from "react";
import './ran.css'
import { red } from "@mui/material/colors";
const FeedBackForm = () => {
  const [textareaValue, setTextareaValue] = useState('');
  const [file, setFile] = useState(null);
  const [required, setRequired]=useState(true);

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
    if(event.target.value.length>0){
      setRequired(false);
    }
    else{
      setRequired(true);
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <form className="absolute bottom-20 p-4 rounded-md w-80 right-0 shadow-md flex flex-col gap-5 form_background ">
      <h1 className="text-lg font-medium pt-2 pb-5 border-b-2  flex flex-wrap justify-center border-gray-800">
        Let us know about the <span className="font-semibold">Feedback</span> about us!
      </h1>

      <div className="relative"> {/* Ensure enough height for the container */}
      <p>Describe the suggestion in detail <span style={{color:"red"}}>* </span></p>
        <textarea
         minRows={5}
         className="pr-10  pl-5 w-full pt-2 pb-5"
         placeholder="Write here..."
          value={textareaValue}
          onChange={handleTextareaChange}
          style={{ width: '100%', height: '120px', resize: 'none', border: 'none' }}
        />
        {/* Only show the file input field if there's no file selected */}
        {!file && (
       
          <div className="relative">
            <input
              type="file"
              onChange={handleFileChange}
              className="absolute bottom-0 left-0 w-full h-full opacity-0 cursor-pointer"
              style={{ zIndex: 10 }}
            />
            <img
              src={"/assets/Attach.png"}
              alt=""
              className="absolute bottom-0 left-0"
              style={{ transform: 'translateY(100%)', cursor: 'pointer' }}
              onClick={() => document.querySelector('input[type="file"]').click()} // Trigger file input click
            />
          </div>
       
        )}
      </div>
      
      {file && <p>Selected File: {file.name}</p>}
      
      <button
        type="submit"
        className={`bg-gray-700 text-white font-semibold rounded-md px-4 py-2 self-end ${required ? '' : 'hover:bg-gray-800'}`}
        
        disabled={required}
      >
        Submit
      </button>
    </form>
  );
};

export default FeedBackForm;
