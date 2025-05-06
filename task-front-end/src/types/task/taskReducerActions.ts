import { NewTaskItem, TaskItem, TaskStatus } from "./taskTypes";

export type TaskReducerAction =
    | { type: 'ADD_TASK', payload: NewTaskItem }
    | { type: 'UPDATE_TASK', payload: TaskItem }
    | { type: 'UPDATE_TASK_STATUS', payload: { id: string, status: TaskStatus } }
    | { type: 'DELETE_TASK', payload: { id: string } }