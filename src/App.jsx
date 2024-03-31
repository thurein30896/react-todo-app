import React, { useState } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import ListGroup from "./Components/ListGroup";
import Status from "./Components/Status";

const App = () => {
  return (
    <div>
      <div className="h-screen flex justify-center py-10">
        <div className="w-80 md:w-96 flex flex-col gap-3 p-4 rounded-2xl shadow-2xl bg-fuchsia-200">
          <Header/>
          <Form/>
          <Status/>
          <ListGroup/>
        </div>
      </div>
    </div>
  );
};

export default App;
