export interface Collection {
  id: number;
  name: string;
  configuration_name: string;
}

export interface CollectionsResponse {
  collections: Collection[];
  meta: { total_count: number };
}

export interface CollectionsInitialState {
  collections: Collection[];
  selectedCollection: Collection | null;
  error: string | null | undefined;
}
