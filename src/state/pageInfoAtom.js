import { atom } from "recoil";

const pageInfoAtom = atom({
  key: "pageInfo",
  default: {
    page: {
      owner: null,
      owner_abbr: null,
    },
    info: {
      isSet: false,
    },
  },
});
