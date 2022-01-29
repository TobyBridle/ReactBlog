import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
    key: "bookmark-persist",
    storage: localStorage
});

const BookmarkAtom = atom({
    key: "BookmarkAtom",
    default: [],
    effects_UNSTABLE: [persistAtom],
})

export default BookmarkAtom;