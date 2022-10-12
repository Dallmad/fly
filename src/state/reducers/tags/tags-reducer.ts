import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';

import { requestAPI } from 'api';

const initialState: TagsType = {
  count: 0,
  results: [],
  prev: null,
  next: null,
};

const slice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    setTags(state, action: PayloadAction<TagsType>) {
      return { ...action.payload };
    },
  },
});

export const tagsReducer = slice.reducer;
export const { setTags } = slice.actions;

// thunks
export const fetchTags = () => async (dispatch: Dispatch) => {
  try {
    const res = await requestAPI.getTags();

    dispatch(setTags(res.data));
  } catch (error) {
    if (error instanceof Error) {
      console.log(`error${error}`);
    }
  }
};

// types
export type TagsType = {
  count: number;
  results: TagType[];
  prev: string | null;
  next: string | null;
};
export type TagType = {
  id: number;
  type: string;
  name: string;
  display_name: string;
};
