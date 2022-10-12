import React, { FC } from 'react';

import style from './Footer.module.scss';

import { ReturnComponentType } from 'common';

export const Footer: FC = (): ReturnComponentType => {
  return (
    <footer className={style.footer}>
      Footer
      <div>some information</div>
    </footer>
  );
};
