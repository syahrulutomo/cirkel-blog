import { useQuery } from "@tanstack/react-query";
import { getDynamicHome } from "@/models/home/api/get-dynamic-home";

export const useGetDynamicHome = () => {
  const {
    isSuccess,
    isError,
    isFetching,
    isLoading,
    fetchStatus,
    error,
    data,
    refetch,
  } = useQuery({
    queryKey: ["get-dynamic-home"],
    queryFn: () => getDynamicHome(),
    retry: 0,
  });

  return {
    isSuccess,
    isError,
    isLoading,
    isFetching,
    fetchStatus,
    error,
    data,
    refetch,
  };
};
