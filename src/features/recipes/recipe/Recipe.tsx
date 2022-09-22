import React from 'react';

import style from './Recipe.module.scss';

import { ReturnComponentType } from 'common';

type RecipeType = {
  name: string;
  url: string;
  description: string;
};

export const Recipe = ({ name, url, description }: RecipeType): ReturnComponentType => {
  return (
    <div className={style.container}>
      <h4>{name}</h4>
      <img src={`${url}`} alt="recipe-logo" className={style.logo} />
      <p>{description}</p>
    </div>
  );
};
