import { createContext, Dispatch } from "react";
import { childProps } from "../../types/shared/contextTypes";
import { TaskList } from "../../types/task/taskTypes";

type taskContextTypes = {
    tasks: TaskList,
    dispatch: Dispatch<any>,
    taskNumber: number,
    incrementCounter: () => void
}

export const TaskContext = createContext<taskContextTypes | null>(null)