import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { combineReducers } from 'redux';
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk';

import { recipeReducer } from 'state/reducers/recipe/recipe-reducer';
import { recipesReducer } from 'state/reducers/recipes/recipes-reducer';
import { tagsReducer } from 'state/reducers/tags/tags-reducer';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  recipe: recipeReducer,
  tags: tagsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
});
export const useTypedDispatch = (): TypedDispatch => useDispatch<TypedDispatch>();
export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppActionType = any;
export type TypedDispatch = ThunkDispatch<AppRootStateType, any, AppActionType>;

// @ts-ignore
window.store = store;
