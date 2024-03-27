export function useApiFetch(path: string, options: any) {
  return useFetch("http://149.154.68.150:8002/api/V1" + path, {
    ...options,
    watch: false,
  });
}
