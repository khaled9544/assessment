export interface Model {
    id: string;
    label: string;
    year: number;
    description: string;
    branches?: Array<Location>;
};

export interface Brand {
    id: BrandTypes;
    label: string;
    logo: string;
    models: Array<Model>
};

export interface Location {
    type: GeoJSON;
    address?: string;
    coordinates: Array<number>;
};


// Reference for the GeoJson https://docs.mongodb.com/manual/reference/geojson/
export type GeoJSON  = 'Point' | 'LineString' | 'Polygon' | 'MultiPoint' | 'MultiLineString' | 'MultiPolygon' | 'GeometryCollection';
export type BrandTypes = 'mercedes' | 'bmw' | 'volkswagen';
