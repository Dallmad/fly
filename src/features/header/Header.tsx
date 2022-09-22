import React from 'react';

import { useNavigate } from 'react-router-dom';

import style from './Header.module.scss';

import lens from 'assets/images/lens.png';
import logo from 'assets/images/tasty-food-logo.png';
import { ReturnComponentType } from 'common';
import { PATH } from 'enums';

export const Header = (): ReturnComponentType => {
  const navigate = useNavigate();
  const homeHandle = (): any => {
    navigate(`${PATH.MAIN}`);
  };

  return (
    <div className={style.header}>
      <button type="button" onClick={homeHandle} className={style.button_logo}>
        <img src={logo} alt="logo" className={style.logo} />
      </button>
      <div className={style.search}>
        <input type="search" className={style.input} />
        <button type="button" onClick={() => {}} className={style.button}>
          <img src={lens} alt="search" className={style.lens} />
        </button>
      </div>
    </div>
  );
};
