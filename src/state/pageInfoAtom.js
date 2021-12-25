// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   page: {
//     owner: null,
//     owner_abbr: null,
//   },
//   info: {
//     isSet: false,
//   },
// };

// export const pageInfoSlice = createSlice({
//   name: "pageInfo",
//   initialState,
//   reducers: {
//     setPageInfo: (state, action) => {
//       state.page = action.payload.page;
//       state.info.isSet = true;
//     },
//   },
// });

// export const { setPageInfo } = pageInfoSlice.actions;

// export const getPageInfo = (state) => state.pageInfo;

// export default pageInfoSlice.reducer;

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
