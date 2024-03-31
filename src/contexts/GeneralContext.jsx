import React, { createContext, useState } from 'react'

export const GeneralContext = createContext();

const GeneralContextProvider = ({children}) => {
    const [tasks,setTasks] = useState([])

    const addTask = (newTask) => {
        setTasks([...tasks,newTask]);
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id != id));
    }

    const doneTask = (id) => {
        setTasks(tasks.map((task) => task.id === id ? {...task,isDone : !task.isDone} : task))
    }

    const updateTaskJob = (id,newJob) => {
        setTasks(tasks.map((el) => el.id === id ? {...el,job : newJob } : el))
      }


  return (
    <GeneralContext.Provider value={{tasks,addTask,deleteTask,doneTask,updateTaskJob}}>
        {children}
    </GeneralContext.Provider>
  )
}

export default GeneralContextProvider