import React, { useContext, useState } from "react";
import { GeneralContext } from "../contexts/GeneralContext";
import EditInput from "./EditInput";
import Swal from "sweetalert2";

const List = ({ task: { id, job, isDone } }) => {
  const { deleteTask, doneTask, updateTaskJob } = useContext(GeneralContext);
  const [edit, setEdit] = useState(false);
  const [updateInput, setUpdateInput] = useState(job);

  const handleCheck = () => {
    doneTask(id);
  };

  const handleDelBtn = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        deleteTask(id);
      }
    });
  };

  const handleEditBtn = () => {
    setEdit(true);
  };

  const handleUpdateInput = (event) => {
    setUpdateInput(event.target.value);
  };

  const handleInputBlur = () => {
    setEdit(false);
    updateTaskJob(id, updateInput);
  };
  return (
    <div
      className={`list animate__animated animate__fadeInDown shadow-md bg-slate-100 flex gap-1 items-center px-4 py-3 rounded-2xl mb-2`}
    >
      <div className="flex gap-2 items-center flex-grow list-checker">
        <input
          id={`textInput` + id}
          checked={isDone}
          onChange={handleCheck}
          className="list-check"
          type="checkbox"
        />
        {edit ? (
          <EditInput
            updateInput={updateInput}
            handleUpdateInput={handleUpdateInput}
            handleInputBlur={handleInputBlur}
          />
        ) : (
          <label
            className={`list-name select-none ${isDone && "line-through"}`}
            htmlFor={`textInput` + id}
          >
            {job}
          </label>
        )}
      </div>

      <div className="flex gap-1 items-center">
        <button
          onClick={handleEditBtn}
          className={`${
            isDone && "hidden"
          } list-edit-btn shadow-md bg-yellow-400 p-2 rounded-lg active:scale-90 duration-100`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 text-slate-500 pointer-events-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>
        </button>
        <button
          onClick={handleDelBtn}
          className="list-del-btn shadow-md bg-red-400 p-2 rounded-lg active:scale-90 duration-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 text-slate-500 pointer-events-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default List;
