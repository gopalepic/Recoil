 import { atom, selector } from 'recoil'
export const countAtom = atom({
    key:'countAtom',
    default :0 

}) 
export const EvenSelector = selector({

    key:'EvenSelector',
    get:({get}) => {
        const value = get(countAtom);
        return value%2;
    }
})