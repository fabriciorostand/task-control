import { useQuery } from '@tanstack/react-query';
import { Circle, Pencil, Trash2 } from 'lucide-react';

export function TaskList() {
  const { data, isLoading } = useQuery({
    queryKey: ['get-tasks'],
    queryFn: async () => {
      const response = await fetch(
        'http://localhost:3333/tasks?completed=false'
      );
      const result = await response.json();

      return result;
    },
  });

  return (
    <div>
      {isLoading && (
        <div className="flex h-40 items-center justify-center">
          <p className="text-center text-muted-foreground text-sm">
            Carregando ...
          </p>
        </div>
      )}

      {data?.map((task) => {
        return (
          <div
            className="rounde-lg m-3 flex items-center justify-between rounded-lg border p-4 hover:bg-accent"
            key={task.id}
          >
            <button
              className="mr-2 cursor-pointer rounded-full p-2 transition hover:bg-gray-200"
              type="button"
            >
              <Circle className="h-5 w-5" />
            </button>

            <div className="flex-1">
              <h3 className="font-medium">{task.name}</h3>
            </div>

            <div className="flex items-center">
              <button
                className="cursor-pointer rounded-full p-2 transition hover:bg-gray-200"
                type="button"
              >
                <Pencil className="h-5 w-5" />
              </button>
              <button
                className="cursor-pointer rounded-full p-2 transition hover:bg-gray-200"
                type="button"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}