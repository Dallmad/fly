import React, { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useSearchParams } from 'react-router-dom';

import style from './Recipes.module.scss';

import { ReturnComponentType } from 'common';
import { Select } from 'components/Select/Select';
import { PATH } from 'enums';
import { ARRAY_FOR_SELECT } from 'enums/ArrayForSelect';
import { Recipe } from 'features/recipes/recipe/Recipe';
import { AppRootStateType } from 'state';
import { fetchRecipes, RecipesType } from 'state/reducers/recipes/recipes-reducer';

export const Recipes: FC = (): ReturnComponentType => {
  const recipes = useSelector<AppRootStateType, RecipesType>(state => state.recipes);
  const [numberItems, setNumberItems] = useSearchParams({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes(recipes.from, String(numberItems)) as any);
  }, [numberItems]);

  return (
    <div className={style.container}>
      <Select
        className={style.select}
        value={`${numberItems}`}
        onChangeOption={() => setNumberItems({ size: `${recipes.size}` })}
        options={ARRAY_FOR_SELECT}
      />
      <div className={style.box}>
        {recipes
          ? // eslint-disable-next-line camelcase
            recipes.results.map(({ name, thumbnail_url, description, id }) => {
              return (
                <NavLink key={id} to={`${PATH.RECIPE}/${id}`} className={style.link}>
                  {/* eslint-disable-next-line camelcase */}
                  <Recipe name={name} url={thumbnail_url} description={description} />
                </NavLink>
              );
            })
          : ''}
      </div>
    </div>
  );
};
