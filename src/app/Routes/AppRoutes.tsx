import React, { FC } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { ReturnComponentType } from 'common';
import { PATH } from 'enums';
import { Error404 } from 'features/error404/Error404';
import { Main } from 'features/main/Main';
import { News } from 'features/news/News';
import { Products } from 'features/products/Products';
import { Recipe } from 'features/recipes/recipe/Recipe';
import { Recipes } from 'features/recipes/Recipes';
import { Restaurants } from 'features/restaurants/Restaurants';

export const AppRoutes: FC = (): ReturnComponentType => {
  return (
    <div>
      <Routes>
        <Route path={`${PATH.MAIN}`} element={<Main />} />
        <Route path={`${PATH.RECIPE}`} element={<Recipes />} />
        <Route path={`${PATH.RECIPE}/:id`} element={<Recipe />} />
        <Route path={`${PATH.PRODUCT}`} element={<Products />} />
        <Route path={`${PATH.NEW}`} element={<News />} />
        <Route path={`${PATH.RESTAURANT}`} element={<Restaurants />} />
        <Route path={`${PATH.ERROR404}`} element={<Error404 />} />
        <Route path={`${PATH.ANOTHER}`} element={<Navigate to={PATH.ERROR404} />} />
      </Routes>
    </div>
  );
};
