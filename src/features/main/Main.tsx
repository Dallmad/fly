import React, { FC } from 'react';

import { ReturnComponentType } from 'common';
import { Tags } from 'features/main/tags/Tags';

export const Main: FC = (): ReturnComponentType => {
  return (
    <div>
      <Tags />
      <h4>Recipes</h4>
      <h4>Products</h4>
      <h4>News</h4>
      <h4>Restaurants</h4>
    </div>
  );
};
