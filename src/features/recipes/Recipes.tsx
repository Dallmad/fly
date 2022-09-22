import React, { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { ReturnComponentType } from 'common';
import { Recipe } from 'features/recipes/recipe/Recipe';
import { AppRootStateType } from 'state';
import { fetchRecipes, RecipesType } from 'state/reducers/recipes/recipes-reducer';

export const Recipes: FC = (): ReturnComponentType => {
  const recipes = useSelector<AppRootStateType, RecipesType>(state => state.recipes);

  useEffect(() => {
    fetchRecipesHandler();
  }, []);
  const dispatch = useDispatch();

  const fetchRecipesHandler = (): any => {
    dispatch(fetchRecipes() as any);
  };

  return (
    <div>
      <button type="button" onClick={fetchRecipesHandler}>
        Request
      </button>
      {recipes.count}
      <div>Redux {recipes.count}</div>
      {recipes.results.map(({ name, thumbnailUrl, description, id }) => {
        return (
          <div key={id}>
            <Recipe name={name} url={thumbnailUrl} description={description} />
          </div>
        );
      })}
    </div>
  );
};
