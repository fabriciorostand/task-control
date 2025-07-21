import { CirclePlus } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/Logo.svg';
import { CreateTaskModal } from './modals/create-task-modal';
import { Image } from './ui/image';

export function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="bg-gray-200 pt-4 pb-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center">
          <Image alt="logo" className="w-28 py-8 sm:w-36" src={logo} />
        </div>
      </div>

      <div className="-mt-6 mx-auto flex w-full max-w-4xl gap-2 px-4">
        <input
          className="flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm sm:text-base"
          placeholder="Pesquisar tarefa"
          type="search"
        />
        <button
          className="flex flex-shrink-0 cursor-pointer items-center gap-2 rounded-lg bg-blue-900 px-4 py-2 text-sm text-white sm:px-6 sm:text-base"
          onClick={() => setShowModal(true)}
          type="button"
        >
          Criar
          <CirclePlus className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>

      <CreateTaskModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}