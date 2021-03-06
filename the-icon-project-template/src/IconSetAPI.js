import Clover from './assets/Clover.svg';
import Daisy from './assets/Daisy.svg';
import Fuchsia from './assets/Fuchsia.svg';
import Tulip from './assets/Tulip.svg';

// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const IconSetAPI = {
    iconSets: [
        {
            id: 1,
            name: 'Flower',
            type: 'Flat',
            price: 9,
            icons: [
                { id: 1, name: 'Daisy',         src: Clover,  type: 'Flat', price: 2, backColor: 'blue',       author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 2, name: 'Clover',        src: Daisy,   type: 'Flat', price: 2, backColor: 'red',        author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 3, name: 'Fuchsia',       src: Fuchsia, type: 'Flat', price: 2, backColor: 'deeppurple', author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 4, name: 'Tulip',         src: Tulip,   type: 'Flat', price: 2, backColor: 'pink',       author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 5, name: 'Forget Me Not', src: Clover,  type: 'Flat', price: 2, backColor: 'amber',      author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 6, name: 'Lilac',         src: Daisy,   type: 'Flat', price: 2, backColor: 'green',      author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 7, name: 'Periwinkle',    src: Fuchsia, type: 'Flat', price: 2, backColor: 'red',        author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 8, name: 'House',         src: Tulip,   type: 'Flat', price: 2, backColor: 'amber',      author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 9, name: 'Cactus',        src: Clover,  type: 'Flat', price: 2, backColor: 'blue',       author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' }
            ]
        },
        {
            id: 2,
            name: 'Flower',
            type: 'Flat',
            price: 14,
            icons: [
                { id: 1, name: 'Daisy',         src: Clover,  type: 'Flat', price: 2, backColor: 'blue',       author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 2, name: 'Clover',        src: Daisy,   type: 'Flat', price: 2, backColor: 'red',        author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 3, name: 'Fuchsia',       src: Fuchsia, type: 'Flat', price: 2, backColor: 'deeppurple', author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 4, name: 'Tulip',         src: Tulip,   type: 'Flat', price: 2, backColor: 'pink',       author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 5, name: 'Forget Me Not', src: Clover,  type: 'Flat', price: 2, backColor: 'amber',      author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 6, name: 'Lilac',         src: Daisy,   type: 'Flat', price: 2, backColor: 'green',      author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 7, name: 'Periwinkle',    src: Fuchsia, type: 'Flat', price: 2, backColor: 'red',        author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 8, name: 'House',         src: Tulip,   type: 'Flat', price: 2, backColor: 'amber',      author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 9, name: 'Cactus',        src: Clover,  type: 'Flat', price: 2, backColor: 'blue',       author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' }
            ]
        },
        {
            id: 3,
            name: 'Flower',
            type: 'Flat',
            price: 7,
            icons: [
                { id: 1, name: 'Daisy',         src: Clover,  type: 'Flat', price: 2, backColor: 'blue',       author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 2, name: 'Clover',        src: Daisy,   type: 'Flat', price: 2, backColor: 'red',        author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 3, name: 'Fuchsia',       src: Fuchsia, type: 'Flat', price: 2, backColor: 'deeppurple', author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 4, name: 'Tulip',         src: Tulip,   type: 'Flat', price: 2, backColor: 'pink',       author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 5, name: 'Forget Me Not', src: Clover,  type: 'Flat', price: 2, backColor: 'amber',      author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 6, name: 'Lilac',         src: Daisy,   type: 'Flat', price: 2, backColor: 'green',      author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 7, name: 'Periwinkle',    src: Fuchsia, type: 'Flat', price: 2, backColor: 'red',        author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 8, name: 'House',         src: Tulip,   type: 'Flat', price: 2, backColor: 'amber',      author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 9, name: 'Cactus',        src: Clover,  type: 'Flat', price: 2, backColor: 'blue',       author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' }
            ]
        },
        {
            id: 4,
            name: 'Flower',
            type: 'Flat',
            price: 19,
            icons: [
                { id: 1, name: 'Daisy',         src: Clover,  type: 'Flat', price: 2, backColor: 'blue',       author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 2, name: 'Clover',        src: Daisy,   type: 'Flat', price: 2, backColor: 'red',        author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 3, name: 'Fuchsia',       src: Fuchsia, type: 'Flat', price: 2, backColor: 'deeppurple', author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 4, name: 'Tulip',         src: Tulip,   type: 'Flat', price: 2, backColor: 'pink',       author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 5, name: 'Forget Me Not', src: Clover,  type: 'Flat', price: 2, backColor: 'amber',      author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 6, name: 'Lilac',         src: Daisy,   type: 'Flat', price: 2, backColor: 'green',      author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 7, name: 'Periwinkle',    src: Fuchsia, type: 'Flat', price: 2, backColor: 'red',        author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 8, name: 'House',         src: Tulip,   type: 'Flat', price: 2, backColor: 'amber',      author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 9, name: 'Cactus',        src: Clover,  type: 'Flat', price: 2, backColor: 'blue',       author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' }
            ]
        },
        {
            id: 5,
            name: 'Flower',
            type: 'Flat',
            price: 9,
            icons: [
                { id: 1, name: 'Daisy',         src: Clover,  type: 'Flat', price: 2, backColor: 'blue',       author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 2, name: 'Clover',        src: Daisy,   type: 'Flat', price: 2, backColor: 'red',        author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 3, name: 'Fuchsia',       src: Fuchsia, type: 'Flat', price: 2, backColor: 'deeppurple', author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 4, name: 'Tulip',         src: Tulip,   type: 'Flat', price: 2, backColor: 'pink',       author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 5, name: 'Forget Me Not', src: Clover,  type: 'Flat', price: 2, backColor: 'amber',      author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 6, name: 'Lilac',         src: Daisy,   type: 'Flat', price: 2, backColor: 'green',      author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 7, name: 'Periwinkle',    src: Fuchsia, type: 'Flat', price: 2, backColor: 'red',        author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 8, name: 'House',         src: Tulip,   type: 'Flat', price: 2, backColor: 'amber',      author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 9, name: 'Cactus',        src: Clover,  type: 'Flat', price: 2, backColor: 'blue',       author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' }
            ]
        },
        {
            id: 6,
            name: 'Flower',
            type: 'Flat',
            price: 29,
            icons: [
                { id: 1, name: 'Daisy',         src: Clover,  type: 'Flat', price: 2, backColor: 'blue',       author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 2, name: 'Clover',        src: Daisy,   type: 'Flat', price: 2, backColor: 'red',        author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 3, name: 'Fuchsia',       src: Fuchsia, type: 'Flat', price: 2, backColor: 'deeppurple', author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 4, name: 'Tulip',         src: Tulip,   type: 'Flat', price: 2, backColor: 'pink',       author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 5, name: 'Forget Me Not', src: Clover,  type: 'Flat', price: 2, backColor: 'amber',      author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 6, name: 'Lilac',         src: Daisy,   type: 'Flat', price: 2, backColor: 'green',      author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 7, name: 'Periwinkle',    src: Fuchsia, type: 'Flat', price: 2, backColor: 'red',        author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 8, name: 'House',         src: Tulip,   type: 'Flat', price: 2, backColor: 'amber',      author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' },
                { id: 9, name: 'Cactus',        src: Clover,  type: 'Flat', price: 2, backColor: 'blue',       author: 'Ali Coşkun', tag: ['flower', 'plant', 'leaf', 'nature'], licence: 'Basic Licence' }
            ]
        },
    ],
    all: function () { return this.iconSets },
    // getFirstThree: function () { return this.iconsets.filter((icon) => icon.id < 4); },
    // getSecondThree: function () { return this.iconsets.filter((icon) => icon.id > 6); },
    get: function (id) {
        const isIconSet = p => p.id === id
        return this.iconSets.find(isIconSet)
    }
}

export default IconSetAPI