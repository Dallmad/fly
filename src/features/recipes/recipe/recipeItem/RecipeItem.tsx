import React from 'react';

import { useSelector } from 'react-redux';

import { ReturnComponentType } from 'common';
import { AppRootStateType } from 'state';
import { RecipeType } from 'state/reducers/recipe/recipe-reducer';

export const RecipeItem = (): ReturnComponentType => {
  const recipe = useSelector<AppRootStateType, RecipeType>(state => state.recipe);

  return (
    <div>
      <h4>{recipe.name}</h4>
      <div>{recipe.description}</div>
      <ul>
        {recipe.instructions.map(
          // eslint-disable-next-line camelcase
          ({ display_text, id, startTime, endTime, temperature, appliance }) => {
            return (
              <li key={id}>
                {/* eslint-disable-next-line camelcase */}
                {display_text}
              </li>
            );
          },
        )}
      </ul>
    </div>
  );
};
