import { TaskList } from "../components/task-list";

export function Tasks() {
  return (
    <div className="min-h-screen p-4">
      <div className="mx-auto max-w-4xl">
        <TaskList />
      </div>
    </div>
  );
}