import { useQuery } from '@tanstack/react-query';

export function useTasks() {
  return useQuery({
    queryKey: ['get-tasks'],
    queryFn: async () => {
      const response = await fetch(
        'http://localhost:3333/tasks?completed=false'
      );
      const result = await response.json();

      return result;
    },
  });
}