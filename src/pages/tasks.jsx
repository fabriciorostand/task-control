import { Header } from '../components/header';
import { TaskList } from '../components/task-list';

export function Tasks() {
  return (
    <div className="min-h-screen">
      <Header />
      <div>
        <div className="mx-auto mt-4 max-w-4xl px-4">
          <TaskList />
        </div>
      </div>
    </div>
  );
}