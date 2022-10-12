import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { ReturnComponentType } from 'common';
import { AppRootStateType, useTypedDispatch } from 'state';
import { fetchTags, TagsType } from 'state/reducers/tags/tags-reducer';

export const Tags = (): ReturnComponentType => {
  const dispatch = useTypedDispatch();
  const tags = useSelector<AppRootStateType, TagsType>(state => state.tags);

  useEffect(() => {
    dispatch(fetchTags());
  }, []);
  const arrTypes = Array.from(new Set(tags.results.map(({ type }) => type)));

  return (
    <>
      <h4>Popular tags:</h4>
      {arrTypes.map(el => (
        <div key={el}>{el}</div>
      ))}
    </>
  );
};
