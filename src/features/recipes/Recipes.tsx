import React, { FC, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useSearchParams } from 'react-router-dom';

import style from './Recipes.module.scss';

import { ReturnComponentType } from 'common';
import { Paginator } from 'components';
import { Select } from 'components/Select/Select';
import { PATH } from 'enums';
import { ARRAY_FOR_SELECT } from 'enums/ArrayForSelect';
import { Recipe } from 'features/recipes/recipe/Recipe';
import { usePagination } from 'hooks';
import { AppRootStateType } from 'state';
import { fetchRecipes, RecipesType } from 'state/reducers/recipes/recipes-reducer';

export const Recipes: FC = (): ReturnComponentType => {
  const recipes = useSelector<AppRootStateType, RecipesType>(state => state.recipes);

  const [numberItems, setNumberItems] = useState(recipes.size);

  const dispatch = useDispatch();

  const { firstContentIndex, page, setPage, totalPages } = usePagination({
    contentPerPage: +recipes.size,
    count: recipes.count,
  });

  const [, setSizeParams] = useSearchParams();

  useEffect(() => {
    dispatch(
      fetchRecipes(`${firstContentIndex}`, `${numberItems}`, recipes.search) as any,
    );
    setSizeParams(
      recipes.search
        ? {
            from: `${firstContentIndex}`,
            size: `${numberItems}`,
            q: `${recipes.search}`,
          }
        : { from: `${firstContentIndex}`, size: `${numberItems}` },
    );
  }, [numberItems, page, recipes.search]);

  return (
    <div className={style.container}>
      <Select
        className={style.select}
        value={numberItems}
        onChangeOption={setNumberItems}
        options={ARRAY_FOR_SELECT}
      />
      <Paginator page={page} setPage={setPage} totalPages={totalPages} />
      <div className={style.box}>
        {recipes.results.length
          ? recipes.results
              // eslint-disable-next-line camelcase
              .map(({ name, thumbnail_url, description, id }) => {
                return (
                  <NavLink key={id} to={`${PATH.RECIPE}/${id}`} className={style.link}>
                    {/* eslint-disable-next-line camelcase */}
                    <Recipe name={name} url={thumbnail_url} description={description} />
                  </NavLink>
                );
              })
          : 'No results'}
      </div>
    </div>
  );
};
