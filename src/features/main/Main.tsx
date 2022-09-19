import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import { pages } from 'app/Routes/AppRoutes';
import { ReturnComponentType } from 'common/types/ReturnComponentType';
import { makeName } from 'utils';

const maxLimitLink = 5;

export const Main: FC = (): ReturnComponentType => {
  return (
    <div>
      {pages.map(
        ({ id, route }) =>
          id < maxLimitLink && (
            <NavLink to={route} key={id}>
              {makeName(route)}
            </NavLink>
          ),
      )}
    </div>
  );
};
