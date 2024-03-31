import React, { useContext } from "react";
import { GeneralContext } from "../contexts/GeneralContext";

const Status = () => {
  const {tasks} = useContext(GeneralContext);
  const doneCount = tasks.filter((task) => task.isDone === true);

  return (
    <div className="flex justify-between items-center">
      <p className="font-medium text-base">Your Lists</p>
      <div className="bg-slate-100 text-sm text-slate-600 px-3 py-1 rounded-full">
        done(
        <span id="doneCount">{doneCount.length}</span>/<span id="totalCount">{tasks.length}</span>)
      </div>
    </div>
  );
};

export default Status;
