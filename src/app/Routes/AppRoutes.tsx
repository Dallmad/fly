import React, { FC } from 'react';

import { Route, Routes } from 'react-router-dom';

import { ReturnComponentType } from 'common';
import { Page, pages } from 'constants/index';

export const AppRoutes: FC = (): ReturnComponentType => {
  return (
    <div>
      <Routes>
        {pages.map(({ route, page, id }: Page) => (
          <Route path={route} element={page} key={id} />
        ))}
      </Routes>
    </div>
  );
};
