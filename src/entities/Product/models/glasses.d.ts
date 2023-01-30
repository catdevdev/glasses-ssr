interface Glasses {
  id: number;
  name: string;
  configuration_name: string;
  default_collection_name?: string | null;
  cost_breakdown: {
    id: number;
    materials: number;
    labour: number;
    transport: number;
    taxes: number;
    bloobloom_price: number;
    retail_price: number;
  };
  glass_variants: Array<{
    id: number;
    barcode?: string | null;
    harmonized_system_code?: string | null;
    stock_keeping_unit?: string | null;
    inventory: boolean;
    home_trial_available: boolean;
    price: number;
    default_glass_variant: boolean;
    frame_variant: {
      id: number;
      name: string;
      configuration_name: string;
      barcode?: string | null;
      harmonized_system_code?: string | null;
      stock_keeping_unit?: string | null;
      status: string;
      colour: {
        id: number;
        name: string;
        media: Array<{
          id: number;
          medium_type: string;
          mime_type: string;
          file_location: string;
          file_name: string;
          original_file_name: string;
          size: number;
          url: string;
          position: number;
        }>;
      };
    };
    media: Array<{
      id: number;
      medium_type: string;
      mime_type: string;
      file_location: string;
      file_name: string;
      original_file_name: string;
      size: number;
      url: string;
      position: number;
    }>;
  }>;
}

export interface GlassesInitialState {
  page: number;
  glasses: Glasses[];
  isLoading: boolean;
  hasMore: boolean;
  error: string | null | undefined;
}

export interface GlassesResponse {
  glasses: Glasses[];
  meta: {
    total_count: number;
  };
}

export interface GlassesParams {
  sort: {
    type: string;
    order: string;
  };
  filters: {
    lens_variant_prescriptions: string[];
    lens_variant_types: string[];
    frame_variant_home_trial_available: boolean;
    glass_variant_frame_variant_colour_tag_configuration_names: string[];
    glass_variant_frame_variant_frame_tag_configuration_names: string[];
  };
  page: {
    limit: number;
    number: number;
  };
}
