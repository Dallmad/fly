import React, { FC } from 'react';

import style from './App.module.scss';

import { AppRoutes } from 'app';
import { ReturnComponentType } from 'common';
import { Footer, Header, LinkBar } from 'features';

export const App: FC = (): ReturnComponentType => {
  return (
    <div className={style.app}>
      <div>
        <Header />
        <LinkBar />
      </div>

      <AppRoutes />
      <Footer />
    </div>
  );
};
