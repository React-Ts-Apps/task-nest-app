import React, { useEffect, useReducer } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { childProps } from "../../types/shared/contextTypes";
import { TaskList } from "../../types/task/taskTypes";
import { taskReducer } from "./taskReducer";
import { TaskContext } from "./TaskContext";


export const TaskProvider = ({ children }: childProps) => {
    const [storedTasks, setStoredTasks] = useLocalStorage<TaskList>('tasks', [])
    const [tasks, dispatch] = useReducer(taskReducer, storedTasks)
    const [taskNumber, setTaskNumber] = useLocalStorage('taskNumber', 1)

    useEffect(() => {
        setStoredTasks(tasks)
    }, [tasks])

    const incrementCounter = () => {
        setTaskNumber((prev) => prev + 1)
    }

    return (<div>
        <TaskContext.Provider value={{ tasks, dispatch, taskNumber, incrementCounter }}>
            {children}
        </TaskContext.Provider>
    </div>)
}