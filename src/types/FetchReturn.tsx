export interface FetchReturn<Data> {
  data: Data | null;
  status: 'fetching' | 'ok';
  error: string | null;
}
