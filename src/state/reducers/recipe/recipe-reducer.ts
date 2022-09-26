import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';

import { requestAPI } from 'api';

const initialState: RecipeType = {
  is_one_top: false,
  cook_time_minutes: 0,
  promotion: '',
  keywords: '',
  show: {},
  servings_noun_plural: '',
  canonical_id: '',
  show_id: 0,
  draft_status: '',
  sections: {},
  tags: {},
  thumbnail_alt_text: '',
  credits: {},
  topics: {},
  slug: '',
  servings_noun_singular: '',
  video_url: '',
  prep_time_minutes: 0,
  name: '',
  buzz_id: null,
  thumbnail_url: '',
  is_shoppable: false,
  video_id: 0,
  compilations: {},
  num_servings: 0,
  brand: null,
  nutrition: {},
  tips_and_ratings_enabled: false,
  video_ad_content: '',
  seo_title: '',
  country: '',
  instructions: {},
  language: '',
  brand_id: null,
  aspect_ratio: '',
  description: '',
  inspired_by_url: null,
  total_time_minutes: 0,
  nutrition_visibility: '',
  facebook_posts: {},
  beauty_url: null,
  total_time_tier: {},
  yields: '',
  original_video_url: '',
  updated_at: 0,
  renditions: {},
  created_at: 0,
  approved_at: 0,
  user_ratings: {},
  id: 0,
};

const slice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    // @ts-ignore
    setRecipe(state, action: PayloadAction<RecipeType>) {
      return { ...action.payload };
    },
  },
});

export const recipeReducer = slice.reducer;
export const { setRecipe } = slice.actions;

// thunks
export const fetchRecipe = (id: number) => async (dispatch: Dispatch) => {
  try {
    const res = await requestAPI.getRecipe(id);

    console.log(res.data);
    dispatch(setRecipe(res.data));
  } catch (error) {
    if (error instanceof Error) {
      console.log(`error${error}`);
    }
  }
};

// types
export type RecipeType = {
  is_one_top: boolean;
  cook_time_minutes: number;
  promotion: string;
  keywords: string;
  show: any;
  servings_noun_plural: string;
  canonical_id: string;
  show_id: number;
  draft_status: string;
  sections: any;
  tags: any;
  thumbnail_alt_text: string;
  credits: any;
  topics: any;
  slug: string;
  servings_noun_singular: string;
  video_url: string;
  prep_time_minutes: number;
  name: string;
  buzz_id: null;
  thumbnail_url: string;
  is_shoppable: boolean;
  video_id: number;
  compilations: any;
  num_servings: number;
  brand: null;
  nutrition: any;
  tips_and_ratings_enabled: boolean;
  video_ad_content: string;
  seo_title: string;
  country: string;
  instructions: any;
  language: string;
  brand_id: null;
  aspect_ratio: string;
  description: string;
  inspired_by_url: null;
  total_time_minutes: number;
  nutrition_visibility: string;
  facebook_posts: any;
  beauty_url: null;
  total_time_tier: any;
  yields: string;
  original_video_url: string;
  updated_at: number;
  renditions: any;
  created_at: number;
  approved_at: number;
  user_ratings: any;
  id: number;
};
