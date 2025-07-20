import logo from '../assets/Logo.svg';
import { TaskList } from '../components/task-list';
import { Image } from '../components/ui/image';

export function Tasks() {
  return (
    <div className="min-h-screen">
      <header className="bg-gray-200 pb-5">
        <div className="mx-auto flex max-w-4xl flex-col items-center">
          <Image alt="logo" className="w-32 py-8" src={logo} />
        </div>
      </header>

      <div className="-mt-6 mx-auto flex max-w-4xl gap-4 px-4 sm:px-6">
        <input
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2"
          placeholder="Pesquisar tarefa"
          type="search"
        />
        <div>
          <button
            className="h-full cursor-pointer rounded-lg bg-blue-900 px-8 text-white"
            type="button"
          >
            Criar
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-4xl">
        <TaskList />
      </div>
    </div>
  );
}