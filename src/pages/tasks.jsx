import { useQuery } from '@tanstack/react-query';

export function Tasks() {
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
      {isLoading && <p>Carregando...</p>}
      <div className='flex flex-col gap-1'>
        {data?.map((task) => {
          return <p key={task.id}>{task.name}</p>;
        })}
      </div>
    </div>
  );
}