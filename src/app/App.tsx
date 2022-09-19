import React, { FC } from 'react';

import s from 'app/App.module.scss';
import { ReturnComponentType } from 'common/types/ReturnComponentType';

export const App: FC = (): ReturnComponentType => {
  return <div className={s.app}>Tasty food</div>;
};
