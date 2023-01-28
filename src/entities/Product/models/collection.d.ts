export interface Collection {
  id: number;
  name: string;
  configuration_name: string;
}

export interface Collections {
  collections: Collection[];
  meta: { total_count: number };
}
