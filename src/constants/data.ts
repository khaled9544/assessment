import { Brand, Model } from 'src/model/data';

const BMWModels: Array<Model> = [{
    id: 'x1',
    label: 'x1',
    year: 2009,
    description: 'lorem ipsum'
}, {
    id: 'x2',
    label: 'x2',
    year: 2010,
    description: 'lorem ipsum'
},
{
    id: 'x3',
    label: 'x3',
    year: 2011,
    description: 'lorem ipsum'
}];

const MercedesModels: Array<Model> = [{
    id: 'a-c',
    label: 'A-Class',
    year: 2014,
    description: 'lorem ipsum'
}, {
    id: 'g-c',
    label: 'G-Class',
    year: 2019,
    description: 'lorem ipsum'
}, {
    id: 'c-c',
    label: 'C-Class',
    year: 2020,
    description: 'lorem ipsum'
}];

const AudiModels: Array<Model> = [{
    id: 'a3',
    label: 'A3',
    year: 2008,
    description: 'lorem ipsum'
}, {
    id: 's3',
    label: 'S3',
    year: 2018,
    description: 'lorem ipsum'
}, {
    id: 'a5',
    label: 'A5',
    year: 2005,
    description: 'lorem ipsum'
}];

export const Brands: Array<Brand> = [{
    id: 'bmw',
    label: 'BMW',
    logo: '/assets/brands/bmw.png',
    models: BMWModels
}, {
    id: 'mercedes',
    label: 'Mercedes-Benz',
    logo: '/assets/brands/mercedes.png',
    models: MercedesModels
}, {
    id: 'audi',
    label: 'Audi',
    logo: '/assets/brands/audi.png',
    models: AudiModels
}];
