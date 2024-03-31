import React, { useEffect, useRef } from "react";


const EditInput = ({handleInputBlur,handleUpdateInput,updateInput}) => {
    const editInputRef = useRef();
    useEffect(() => {
        editInputRef.current.focus();
      },[])


  return (
    <input ref={editInputRef} onBlur={handleInputBlur} onChange={handleUpdateInput} value={updateInput} className="border focus-visible:outline-none border-slate-500 ps-2 w-2/3" />
  );
};

export default EditInput;
