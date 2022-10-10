// import { Navigate } from 'react-router-dom';

import { Page } from './types';

import { PATH } from 'enums';
import { Error404 } from 'features/error404/Error404';
import { Main } from 'features/main/Main';
import { News } from 'features/news/News';
import { Products } from 'features/products/Products';
import { Recipes } from 'features/recipes/Recipes';
import { Restaurants } from 'features/restaurants/Restaurants';

// import { Recipe } from 'features/recipes/recipe/Recipe';

export const pages: Page[] = [
  { id: 1, route: PATH.RECIPE, page: <Recipes /> },
  { id: 2, route: PATH.PRODUCT, page: <Products /> },
  { id: 3, route: PATH.NEW, page: <News /> },
  { id: 4, route: PATH.RESTAURANT, page: <Restaurants /> },
  { id: 5, route: PATH.ERROR404, page: <Error404 /> },
  { id: 6, route: PATH.MAIN, page: <Main /> },
  // { id: 7, route: `${PATH.RECIPE}/:id`, page: <Recipe /> },
  // { id: 8, route: PATH.ANOTHER, page: <Navigate to={PATH.ERROR404} /> },
];
