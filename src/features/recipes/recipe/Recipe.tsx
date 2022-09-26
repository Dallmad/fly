import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import style from './Recipe.module.scss';

import { ReturnComponentType } from 'common';
import { RecipeItem } from 'features/recipes/recipe/recipeItem/RecipeItem';
import { fetchRecipe } from 'state/reducers/recipe/recipe-reducer';

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

  const dispatch = useDispatch();

  useEffect(() => {
    if (recipeId) {
      dispatch(fetchRecipe(+recipeId) as any);
    }
  }, [recipeId]);

  return (
    <div className={style.container}>
      {recipeId ? (
        <RecipeItem />
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
