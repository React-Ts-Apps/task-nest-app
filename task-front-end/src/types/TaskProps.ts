// Types
export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'DONE';

export type TaskColumnData = {
  id: TaskStatus;
  title: string;
};

export type TaskColumnList = TaskColumnData[];

export type TaskItem = {
  id: number;
  title: string;
  description: string;
  assignee: string;
  status: TaskStatus;
};

export type TaskList = TaskItem[];

export type TaskColWrapperProps = {
  $status: TaskStatus;
};

export type TaskColumnProps = {
  tasks: TaskList;
  column: TaskColumnData;
};

