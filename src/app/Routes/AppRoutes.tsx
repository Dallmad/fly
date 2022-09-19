import React, { FC, ReactElement } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { ReturnComponentType } from 'common/types/ReturnComponentType';
import { PATH } from 'enums/Paths';
import { Error404, News, Products, Recipes, Restaurants } from 'features';

type Page = {
  id: number;
  route: string;
  page: ReactElement;
  name: string;
};

const pages: Page[] = [
  { id: 1, route: PATH.RECIPES, page: <Recipes />, name: 'Recipes' },
  { id: 2, route: PATH.PRODUCTS, page: <Products />, name: 'Products' },
  { id: 3, route: PATH.NEWS, page: <News />, name: 'News' },
  { id: 4, route: PATH.RESTAURANTS, page: <Restaurants />, name: 'Restaurants' },
  { id: 5, route: PATH.ERROR404, page: <Error404 />, name: 'Error' },
  { id: 6, route: '/', page: <Navigate to={PATH.RECIPES} />, name: 'Error' },
  { id: 7, route: '*', page: <Navigate to={PATH.ERROR404} />, name: 'Error' },
];

export const AppRoutes: FC = (): ReturnComponentType => {
  return (
    <div>
      <Routes>
        {pages.map(({ route, page, id, name }) => (
          <Route path={route} element={page} key={id} />
        ))}
      </Routes>
    </div>
  );
};
