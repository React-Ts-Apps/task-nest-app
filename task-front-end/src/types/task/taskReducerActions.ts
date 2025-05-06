import { NewTaskItem, TaskItem } from "./taskTypes";

export type TaskReducerAction =
    | { type: 'ADD_TASK', payload: NewTaskItem }
    | { type: 'UPDATE_TASK', payload: TaskItem }
    | { type: 'DELETE_TASK', payload: { id: string } }