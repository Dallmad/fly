import React, { FC, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import style from './LinkBar.module.scss';

import { ReturnComponentType } from 'common';
import { Select } from 'components/Select/Select';
import { pages } from 'constants/index';
import { ARRAY_FOR_SELECT } from 'enums/ArrayForSelect';
import { AppRootStateType } from 'state';
import { fetchRecipes, RecipesType } from 'state/reducers/recipes/recipes-reducer';
import { makeName } from 'utils';

const maxLimitLink = 5;

export const LinkBar: FC = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const recipes = useSelector<AppRootStateType, RecipesType>(state => state.recipes);
  const [numberItems, setNumberItems] = useState(recipes.size);

  useEffect(() => {
    dispatch(fetchRecipes(recipes.from, numberItems) as any);
  }, [numberItems]);

  return (
    <div className={style.container}>
      <div className={style.linkBox}>
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
      <Select
        className={style.select}
        value={numberItems}
        onChangeOption={setNumberItems}
        options={ARRAY_FOR_SELECT}
      />
    </div>
  );
};
