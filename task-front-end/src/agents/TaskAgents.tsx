import { Dispatch } from "react";
import { TaskItem } from "../types/task/taskTypes";
import { TaskReducerAction } from "../types/task/taskReducerActions";

export interface TaskAgent {
    name: string;
    role: string;
    act: (tasks: TaskItem[], dispatch: Dispatch<TaskReducerAction>) => Promise<string>;
}

export const prioritizerAgent: TaskAgent = {
    name: 'Prioritizer',
    role: 'Prioritize tasks based on their urgency',
    act: async (tasks, dispatch) => {
        let log = '';
        for (const task of tasks) {
            if (task.status === 'BACKLOG' && task.title.toLowerCase().includes('urgent')) {
                dispatch({ type: 'UPDATE_TASK_STATUS', payload: { id: task.id, status: 'TODO' } });
                log += `Task #${task.taskNumber}: ${task.title} moved to TODO\n`;
            }
        }
        if (!log.trim().length) {
            log = 'There are no urgent tasks  to prioritize';
        }
        return log;
    }
}