export interface Car {
    model: string;
    year: number;
    brand: BrandsType;
    description: string;
};

export type BrandsType = 'mercedes' | 'bmw' | 'audi';

// export enum Brand {
//     mercedes = 'mercedes',
//     bmw = 'bmw' ,
//     audi = 'audi'
// };