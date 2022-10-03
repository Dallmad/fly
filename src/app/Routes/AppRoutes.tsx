import React, { FC, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { ReturnComponentType } from 'common';
import { Page, pages } from 'constants/index';
import { PATH } from 'enums';
import { Recipe } from 'features/recipes/recipe/Recipe';
import { AppRootStateType } from 'state';

export const AppRoutes: FC = (): ReturnComponentType => {
  const size = useSelector<AppRootStateType, string>(state => state.recipes.size);

  useEffect(() => {}, [size]);

  return (
    <div>
      <Routes>
        {pages.map(({ route, page, id }: Page) => (
          <Route path={route} element={page} key={id} />
        ))}
        <Route path={`${PATH.RECIPE}?size=${size}`} element={<Recipe />} />
        <Route path={`${PATH.RECIPE}/:id`} element={<Recipe />} />
      </Routes>
    </div>
  );
};
