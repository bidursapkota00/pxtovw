import { createSlice } from "@reduxjs/toolkit";

const tagsReducer = createSlice({
  name: "tags",
  initialState: {
    loading: false,
    allTags: {},
    error: null,
  },
  reducers: {
    getTagsData: (state, { payload: { loadingVariable } }) => {
      state[loadingVariable] = true;
    },
    setTagsData: (state, { payload: { data, type } }) => {
      state.allTags = data;
      state[type] = false;
    },
    setTagsError: (state, { payload: { error, type } }) => {
      state.error = error;
      state[type] = false;
    },
  },
});

const { reducer, actions } = tagsReducer;
export const { getTagsData, setTagsError, setTagsData } = actions;

export default reducer;
