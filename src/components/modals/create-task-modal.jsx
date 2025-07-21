import { X } from 'lucide-react';

export function CreateTaskModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-semibold text-lg">Criar Tarefa</h2>
          <button
            className="rounded-full p-1 text-gray-600 hover:bg-gray-200"
            onClick={onClose}
            type="button"
          >
            <X className="h-5 w-5 cursor-pointer" />
          </button>
        </div>

        <form className="space-y-4">
          <div>
            <label
              className="block font-medium text-gray-700 text-sm"
              htmlFor="nome"
            >
              Nome
            </label>
            <input
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
              type="text"
            />
          </div>

          <div>
            <label
              className="block font-medium text-gray-700 text-sm"
              htmlFor="descrição"
            >
              Descrição
            </label>
            <textarea
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
              rows={3}
            />
          </div>

          <div>
            <label
              className="block font-medium text-gray-700 text-sm"
              htmlFor="prazo"
            >
              Prazo
            </label>
            <input
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
              type="date"
            />
          </div>

          <div>
            <label
              className="block font-medium text-gray-700 text-sm"
              htmlFor="prioridade"
            >
              Prioridade
            </label>
            <select className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm">
              <option value="">Selecione</option>
              <option value="baixa">Baixa</option>
              <option value="media">Média</option>
              <option value="alta">Alta</option>
            </select>
          </div>

          <div className="flex justify-center">
            <button
              className="mt-2 cursor-pointer rounded-lg bg-blue-900 px-10 py-2 text-sm text-white hover:opacity-90"
              type="submit"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}