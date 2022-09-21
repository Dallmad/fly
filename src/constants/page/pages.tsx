import { Navigate } from 'react-router-dom';

import { Page } from './types';

import { PATH } from 'enums';
import { Error404, Main, News, Products, Recipes, Restaurants } from 'features';

export const pages: Page[] = [
  { id: 1, route: PATH.RECIPE, page: <Recipes /> },
  { id: 2, route: PATH.PRODUCT, page: <Products /> },
  { id: 3, route: PATH.NEW, page: <News /> },
  { id: 4, route: PATH.RESTAURANT, page: <Restaurants /> },
  { id: 5, route: PATH.ERROR404, page: <Error404 /> },
  { id: 6, route: PATH.MAIN, page: <Main /> },
  { id: 7, route: PATH.ANOTHER, page: <Navigate to={PATH.ERROR404} /> },
];
