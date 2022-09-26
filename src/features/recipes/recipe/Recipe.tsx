import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import style from './Recipe.module.scss';

import { ReturnComponentType } from 'common';
import { AppRootStateType } from 'state';
import { fetchRecipe, RecipeType } from 'state/reducers/recipe/recipe-reducer';

type SmallRecipeType = {
  name?: string;
  url?: string;
  description?: string;
};

export const Recipe = ({
  name,
  url,
  description,
}: SmallRecipeType): ReturnComponentType => {
  const params = useParams();
  const recipeId = params.id;
  const recipe = useSelector<AppRootStateType, RecipeType>(state => state.recipe);
  const dispatch = useDispatch();

  useEffect(() => {
    if (recipeId) {
      dispatch(fetchRecipe(+recipeId) as any);
    }
  }, [recipeId]);

  return (
    <div className={style.container}>
      {recipeId ? (
        <>
          <h4>{recipe.name}</h4>
          <div>{recipe.description}</div>
          <div>{recipe.cook_time_minutes}</div>
        </>
      ) : (
        <>
          <h4>{name}</h4>
          <img src={`${url}`} alt="recipe-logo" className={style.logo} />
          <p>{description}</p>
        </>
      )}
    </div>
  );
};
