import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import { ReturnComponentType } from 'common';
import { pages } from 'constants/index';
import { makeName } from 'utils';

const maxLimitLink = 5;

export const LinkBar: FC = (): ReturnComponentType => {
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
