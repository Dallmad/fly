import React, { FC } from 'react';

import { ReturnComponentType } from 'common';
import { Tags } from 'features/main/tags/Tags';

export const Main: FC = (): ReturnComponentType => {
  return (
    <div>
      <Tags />
      <div>recipes</div>
      <div>products</div>
      <div>news</div>
      <div>restaurants</div>
    </div>
  );
};
