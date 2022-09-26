import React, { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import style from './Recipes.module.scss';

import { ReturnComponentType } from 'common';
import { PATH } from 'enums';
import { Recipe } from 'features/recipes/recipe/Recipe';
import { AppRootStateType } from 'state';
import { fetchRecipes, RecipesType } from 'state/reducers/recipes/recipes-reducer';

export const Recipes: FC = (): ReturnComponentType => {
  const recipes = useSelector<AppRootStateType, RecipesType>(state => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipes() as any);
  }, []);
  const dispatch = useDispatch();

  return (
    <div className={style.container}>
      {recipes
        ? // eslint-disable-next-line camelcase
          recipes.results.map(({ name, thumbnail_url, description, id }) => {
            return (
              <NavLink key={id} to={`${PATH.RECIPE}/${id}`}>
                {/* eslint-disable-next-line camelcase */}
                <Recipe name={name} url={thumbnail_url} description={description} />
              </NavLink>
            );
          })
        : ''}
    </div>
  );
};
