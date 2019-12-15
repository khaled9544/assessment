export interface Car {
    model: string;
    year: number;
    brand: Brand;
    description: string;
};

export interface Brand {
    id: BrandType;
    label: string;
    logo: string;
};

export type BrandType = 'mercedes' | 'bmw' | 'audi';
