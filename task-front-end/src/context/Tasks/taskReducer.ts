import { TaskReducerAction } from "../../types/task/taskReducerActions";
import { TaskList, TaskStatus } from "../../types/task/taskTypes";

export const taskReducer = (state: TaskList, action: TaskReducerAction): TaskList => {
    switch (action.type) {
        case 'ADD_TASK': {
            const newTask = {
                ...action.payload,
                id: crypto.randomUUID(),
                createdAt: Date.now().toString(),
                status: 'TODO' as TaskStatus
            }
            return [newTask, ...state]
        };
        case 'UPDATE_TASK': {
            return state.map((task) => task.id === action.payload.id ?
                { ...task, ...action.payload } : task)
        };

        case 'UPDATE_TASK_STATUS': {
            return state.map((task) =>
                task.id === action.payload.id ?
                    { ...task, status: action.payload.status }
                    : task)
        }
        default: return state
    }
}
