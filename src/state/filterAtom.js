import { atom } from "recoil";

const FilterAtom = atom({
    key: "FilterAtom",
    default: "Following",
})

export default FilterAtom;