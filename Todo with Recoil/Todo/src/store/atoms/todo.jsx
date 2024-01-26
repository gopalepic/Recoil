import {atom} from 'recoil'
import { selector } from 'recoil'

export const TitleAtom = atom(
    {
        key:'TitleAtom',
        default:''
    }
)

export const DescriptionAtom = atom(
    {
        key:'DescriptionAtom',
        default:''
    }
)


export const TodosAtom = atom(
    {
        key:'TodoAtom',
        default:{Title:'',
            description:''}
    }
)

export const TodoSelector = selector({
    key:'TodoSelector',
    get:({get}) => {
        const title = get(TitleAtom);
        const description= get(DescriptionAtom);
        return { title,description};
    },
    set:({set},newValue) => {
        set(TitleAtom,newValue.title);
        set(DescriptionAtom,newValue.description);
    },
})



