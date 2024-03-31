import React from "react";
import empty from "../img/empty.svg";

const EmptyStage = () => {
  return (
    <div className="hidden last:block text-center py-12">
      <img className="mb-5" src={empty} />
      <h1 className="text-2xl">There is no Lists</h1>
    </div>
  );
};

export default EmptyStage;
