import { Brand, Model } from 'src/model/data';

const BMWModels: Array<Model> = [{
    id: 'x1',
    label: 'x1',
    year: 2009,
    description: 'lorem ipsum',
    branches: [{
        type: 'Point',
        branchName: 'Branch name 1',
        address: 'Beirut',
        coordinates: [71.86873, -81.24260]
    }, {
        type: 'Point',
        branchName: 'Branch name 2',
        address: 'Beirut',
        coordinates: [54.34292, -100.65229]
    }, {
        type: 'Point',
        branchName: 'Branch name 3',
        address: 'Beirut',
        coordinates: [-8.51103, -80.3291]
    }]
}, {
    id: 'x2',
    label: 'x2',
    year: 2010,
    description: 'lorem ipsum',
    branches: [{
        type: 'Point',
        branchName: 'Branch name 1',
        address: 'Beirut',
        coordinates: [ 51.64409, -81.2226]
    }, {
        type: 'Point',
        branchName: 'Branch name 2',
        address: 'Beirut',
        coordinates: [46.24123, 121.85131]
    }, {
        type: 'Point',
        branchName: 'Branch name 3',
        address: 'Beirut',
        coordinates: [65.40709, -157.47197]
    }]
},
{
    id: 'x3',
    label: 'x3',
    year: 2011,
    description: 'lorem ipsum',
    branches: [{
        type: 'Point',
        branchName: 'Branch name 1',
        address: 'Beirut',
        coordinates: [41.73071, 142.32038]
    }, {
        type: 'Point',
        branchName: 'Branch name 2',
        address: 'Beirut',
        coordinates: [13.37425, 109.71161]
    }, {
        type: 'Point',
        branchName: 'Branch name 3',
        address: 'Beirut',
        coordinates: [ -25.01662, 24.50025]
    }]
}];

const MercedesModels: Array<Model> = [{
    id: 'a-c',
    label: 'A-Class',
    year: 2014,
    description: 'lorem ipsum',
    branches: [{
        type: 'Point',
        branchName: 'Branch name 1',
        address: 'Beirut',
        coordinates: [13.76858, -88.11626]
    }, {
        type: 'Point',
        branchName: 'Branch name 2',
        address: 'Beirut',
        coordinates: [-6.84807, 13.76663]
    }, {
        type: 'Point',
        branchName: 'Branch name 3',
        address: 'Beirut',
        coordinates: [-18.49912, -43.37045]
    }]
}, {
    id: 'g-c',
    label: 'G-Class',
    year: 2019,
    description: 'lorem ipsum',
    branches: [{
        type: 'Point',
        branchName: 'Branch name 1',
        address: 'Beirut',
        coordinates: [15.01156, -6.65427]
    }, {
        type: 'Point',
        branchName: 'Branch name 2',
        address: 'Beirut',
        coordinates: [65.29784, 155.91909]
    }, {
        type: 'Point',
        branchName: 'Branch name 3',
        address: 'Beirut',
        coordinates: [ 60.39271, 27.30247]
    }]
}, {
    id: 'c-c',
    label: 'C-Class',
    year: 2020,
    description: 'lorem ipsum',
    branches: [{
        type: 'Point',
        branchName: 'Branch name 1',
        address: 'Beirut',
        coordinates: [23.51853, 85.58918]
    }, {
        type: 'Point',
        branchName: 'Branch name 2',
        address: 'Beirut',
        coordinates: [31.26771, 48.04295]
    }, {
        type: 'Point',
        branchName: 'Branch name 3',
        address: 'Beirut',
        coordinates: [ -31.14162, -54.86479]
    }]
}];

const AudiModels: Array<Model> = [{
    id: 'gti',
    label: 'Golf GTI',
    year: 2008,
    description: 'lorem ipsum',
    branches: [{
        type: 'Point',
        branchName: 'Branch name 1',
        address: 'Beirut',
        coordinates: [72.34303, -52.71653]
    }, {
        type: 'Point',
        branchName: 'Branch name 2',
        address: 'Beirut',
        coordinates: [-35.33048, 81.20665]
    }, {
        type: 'Point',
        branchName: 'Branch name 3',
        address: 'Beirut',
        coordinates: [58.73949, 101.85627]
    }]
}, {
    id: 'beetle',
    label: 'Beetle',
    year: 2018,
    description: 'lorem ipsum',
    branches: [{
        type: 'Point',
        branchName: 'Branch name 1',
        address: 'Beirut',
        coordinates: [44.20117, 8.00805]
    }, {
        type: 'Point',
        branchName: 'Branch name 2',
        address: 'Beirut',
        coordinates: [18.37987, -143.58500]
    }, {
        type: 'Point',
        branchName: 'Branch name 3',
        address: 'Beirut',
        coordinates: [30.34217,  6.23823]
    }]
}, {
    id: 'jetta',
    label: 'Jetta',
    year: 2005,
    description: 'lorem ipsum',
    branches: [{
        type: 'Point',
        branchName: 'Branch name 1',
        address: 'Beirut',
        coordinates: [22.96117, -96.22645]
    }, {
        type: 'Point',
        branchName: 'Branch name 2',
        address: 'Beirut',
        coordinates: [7.16866, 63.05658]
    }, {
        type: 'Point',
        branchName: 'Branch name 3',
        address: 'Beirut',
        coordinates: [19.17004, -107.68880]
    }]
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
    id: 'volkswagen',
    label: 'Volkswagen',
    logo: '/assets/brands/golf.png',
    models: AudiModels
}];
