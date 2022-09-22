import React from 'react';

import { ReturnComponentType } from 'common';

type RecipeType = {
  name: string;
  url: string;
  description: string;
};

export const Recipe = ({ name, url, description }: RecipeType): ReturnComponentType => {
  return (
    <div>
      <h4>{name}</h4>
      <img src={url} alt="recipe-logo" />
      <p>{description}</p>
    </div>
  );
};
