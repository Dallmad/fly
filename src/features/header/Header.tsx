import React, { ChangeEvent, FC, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import style from './Header.module.scss';

import lens from 'assets/images/lens.png';
import logo from 'assets/images/tasty-food-logo.png';
// import { ReturnComponentType } from 'common';
import { PATH } from 'enums';
import { setSearch } from 'state/reducers/recipes/recipes-reducer';

export const Header: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const toHomeHandle = (): void => {
    navigate(`${PATH.MAIN}`);
  };
  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.currentTarget.value);
  };
  const onSearchHandle = (): void => {
    dispatch(setSearch(title));
  };

  return (
    <header className={style.header}>
      <button type="button" onClick={toHomeHandle} className={style.button_logo}>
        <img src={logo} alt="logo" className={style.logo} />
      </button>
      <div className={style.search}>
        <input
          type="search"
          className={style.input}
          value={title}
          onChange={e => {
            onSearchChange(e);
          }}
        />
        <button type="button" onClick={onSearchHandle} className={style.button}>
          <img src={lens} alt="search" className={style.lens} />
        </button>
      </div>
    </header>
  );
};
