import React, { useEffect, useReducer } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { childProps } from "../../types/shared/contextTypes";
import { TaskList } from "../../types/task/taskTypes";
import { taskReducer } from "./taskReducer";
import { TaskContext } from "./TaskContext";


export const TaskProvider = ({ children }: childProps) => {
    const [storedTasks, setStoredTasks] = useLocalStorage<TaskList>('tasks', [])
    const [tasks, dispatch] = useReducer(taskReducer, storedTasks)

    useEffect(() => {
        setStoredTasks(tasks)
    }, [tasks])

    return (<div>
        <TaskContext.Provider value={{ tasks, dispatch }}>
            {children}
        </TaskContext.Provider>
    </div>)
}