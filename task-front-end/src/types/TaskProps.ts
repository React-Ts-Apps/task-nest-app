export type TaskProps = {
  id: number;
  title: string;
  assignee: string;
  status: 'to-do' | 'in-progress' | 'done';
};
