import { CloudinaryResource } from '@/types/Cloudinary';
import { useQuery, useQueryClient } from '@tanstack/react-query';

interface UseResources{
    initialResources?: Array<CloudinaryResource>
}

export function useResources(options?: UseResources){
  const queryClient = useQueryClient();

  const { data: resources } = useQuery({
    queryKey: ['resources'],
    queryFn: async ()=>{
      const { data } = await fetch('/api/resources').then(r=>r.json());
      return data;
    },
    initialData: options?.initialResources
  })

  function addResources(results: Array<CloudinaryResource>){
    queryClient.setQueryData(['resources'], (old: Array<CloudinaryResource>)=>{
      return [...results, ...old];
    })
    queryClient.invalidateQueries({
      queryKey: ['resources']
    })
    console.log("results:", results)
  }

  return {
    resources,
    addResources
  }
  console.log(resources);
}