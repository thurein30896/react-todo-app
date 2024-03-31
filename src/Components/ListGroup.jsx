import React, { useContext } from "react";
import EmptyStage from "./EmptyStage";
import List from "./List";
import { GeneralContext } from "../contexts/GeneralContext";

const ListGroup = () => {
  const {tasks} = useContext(GeneralContext);
  
  return (
    <div
      id="listGroup"
      className=" overflow-y-scroll overflow-x-hidden pt-3 pe-2"
    >
      <EmptyStage/>
      {tasks.map((task) => <List key={task.id} task={task} />)}
    </div>
  );
};

export default ListGroup;
