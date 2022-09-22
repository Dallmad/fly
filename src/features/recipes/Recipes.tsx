import React, { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from './Recipes.module.scss';

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
    <div className={style.container}>
      {/* eslint-disable-next-line camelcase */}
      {recipes.results.map(({ name, thumbnail_url, description, id }) => {
        return (
          <div key={id}>
            {/* eslint-disable-next-line camelcase */}
            <Recipe name={name} url={thumbnail_url} description={description} />
          </div>
        );
      })}
    </div>
  );
};
