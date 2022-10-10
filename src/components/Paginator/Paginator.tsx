import React, { useState } from 'react';

import s from './Paginator.module.scss';

import { ReturnComponentType } from 'common';
import { PaginatorTypeProps } from 'components';

export const Paginator = ({
  page,
  setPage,
  totalPages,
}: PaginatorTypeProps): ReturnComponentType => {
  const portionSize = 3;
  const pages: number[] = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(totalPages / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionNumber = portionNumber * portionSize;

  const changePageHandle = (page: number): void => {
    setPage(page);
  };

  return (
    <div className={s.container}>
      <button
        type="button"
        className={s.button}
        onClick={() => {
          setPortionNumber(1);
        }}
        disabled={portionNumber <= 1}
      >
        {'<<'}
      </button>
      <button
        type="button"
        className={s.button}
        onClick={() => {
          setPortionNumber(portionNumber - 1);
        }}
        disabled={portionNumber <= 1}
      >
        {'<'}
      </button>
      <button
        className={page === 1 ? s.selectedPage : s.simplePage}
        type="button"
        onClick={() => {
          setPage(1);
        }}
      >
        1
      </button>
      {'\u00A0'}.{'\u00A0'}.{'\u00A0'}.{'\u00A0'}
      {pages
        .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
        .map((p, i) => {
          return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
            <button
              type="button"
              key={p}
              onClick={() => {
                changePageHandle(p);
              }}
              className={page === p ? s.selectedPage : s.simplePage}
            >
              {p}
              {'\u00A0'}
            </button>
          );
        })}
      {'\u00A0'}.{'\u00A0'}.{'\u00A0'}.{'\u00A0'}
      <button
        className={page === totalPages ? s.selectedPage : s.simplePage}
        type="button"
        onClick={() => {
          setPage(totalPages);
        }}
      >
        {totalPages}
      </button>
      <button
        type="button"
        className={s.button}
        onClick={() => {
          setPortionNumber(portionNumber + 1);
        }}
        disabled={portionCount <= portionNumber}
      >
        {'>'}
      </button>
      <button
        type="button"
        className={s.button}
        onClick={() => {
          setPortionNumber(portionCount);
        }}
        disabled={portionCount <= portionNumber}
      >
        {'>>'}
      </button>
    </div>
  );
};
