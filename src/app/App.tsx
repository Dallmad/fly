import React, { FC } from 'react';

import style from './App.module.scss';

import { AppRoutes } from 'app';
import { ReturnComponentType } from 'common';
import { Footer } from 'features/footer/Footer';
import { Header } from 'features/header/Header';
import { LinkBar } from 'features/linkBar/LinkBar';

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
