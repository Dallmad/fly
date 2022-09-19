import React, { FC, ReactElement } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { ReturnComponentType } from 'common/types/ReturnComponentType';
import { PATH } from 'enums/Paths';
import { Error404, Main, News, Products, Recipes, Restaurants } from 'features';

type Page = {
  id: number;
  route: string;
  page: ReactElement;
};

export const pages: Page[] = [
  { id: 1, route: PATH.RECIPE, page: <Recipes /> },
  { id: 2, route: PATH.PRODUCT, page: <Products /> },
  { id: 3, route: PATH.NEW, page: <News /> },
  { id: 4, route: PATH.RESTAURANT, page: <Restaurants /> },
  { id: 5, route: PATH.ERROR404, page: <Error404 /> },
  { id: 6, route: PATH.MAIN, page: <Main /> },
  { id: 7, route: PATH.ANOTHER, page: <Navigate to={PATH.ERROR404} /> },
];

export const AppRoutes: FC = (): ReturnComponentType => {
  return (
    <div>
      <Main />
      <Routes>
        {pages.map(({ route, page, id }) => (
          <Route path={route} element={page} key={id} />
        ))}
      </Routes>
    </div>
  );
};
