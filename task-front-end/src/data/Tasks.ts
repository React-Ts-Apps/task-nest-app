import { TaskColumnData, TaskColumnList, TaskList } from '../types/TaskProps';

export const COLUMNS: TaskColumnList = [
  { id: 'TODO', title: 'To Do' },
  { id: 'IN_PROGRESS', title: 'Work in Progress' },
  { id: 'DONE', title: 'Completed' },
];

export const INITIAL_TASKS: TaskList = [
  {
    id: 1,
    title: 'Create Theme',
    description: 'Create dark and light themes',
    assignee: 'Shiji Bijo',
    status: 'TODO',
  },
  {
    id: 2,
    title: 'Create Columns',
    description: 'Create columns for task board',
    assignee: 'Isabel',
    status: 'IN_PROGRESS',
  },
  {
    id: 3,
    title: 'Create Navbar',
    description: 'Create navbar for the taskboard',
    assignee: 'Rita',
    status: 'DONE',
  },
  {
    id: 4,
    title: 'Add Task Button ',
    description: 'Add button to create new task',
    assignee: 'Rita',
    status: 'IN_PROGRESS',
  },
  {
    id: 5,
    title: 'Drag And Drop',
    description: 'Implement drag and drop to move tasks in between columns',
    assignee: 'Alen',
    status: 'TODO',
  },
];
