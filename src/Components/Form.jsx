import React, { useContext, useRef } from "react";
import { GeneralContext } from "../contexts/GeneralContext";

const Form = () => {
  const {addTask} = useContext(GeneralContext);
    const inputRef = useRef();
    const handleClick = () => {
        // console.dir(inputRef.current.value);
        const newTask = {
          id : Date.now(),
          job : inputRef.current.value,
          isDone : false
        }
        if(inputRef.current.value === ""){
          inputRef.current.focus();
        }else{
          addTask(newTask);
          inputRef.current.value = "";
        }
    }

    const handleKeyUp = (e) => {
      if(e.key === "Enter"){
        handleClick();
      }
    }
  return (
    <div className="flex gap-2">
      <input
      ref={inputRef}
      onKeyUp={handleKeyUp}
        id="inputText"
        type="text"
        className="flex-grow animate__animated px-5 focus-visible:outline-none rounded-2xl"
      />
      <button
      onClick={handleClick}
        id="addBtn"
        className="bg-blue-400 animate__animated active:scale-90 duration-100 text-zinc-50 p-4 rounded-2xl"
      >
        Add
      </button>
    </div>
  );
};

export default Form;
