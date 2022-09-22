import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import style from './LinkBar.module.scss';

import { ReturnComponentType } from 'common';
import { pages } from 'constants/index';
import { makeName } from 'utils';

const maxLimitLink = 5;

export const LinkBar: FC = (): ReturnComponentType => {
  return (
    <div className={style.container}>
      {pages.map(
        ({ id, route }) =>
          id < maxLimitLink && (
            <div key={id} className={`${style.link} ${style.active}`}>
              <NavLink
                to={route}
                className={navData => (navData.isActive ? style.active : style.link)}
              >
                {makeName(route)}
              </NavLink>
            </div>
          ),
      )}
    </div>
  );
};
