import React, { FC, useState } from 'react';

import { requestAPI } from 'api';
import s from 'app/App.module.scss';
import { AppRoutes } from 'app/Routes/AppRoutes';
import { ReturnComponentType } from 'common/types/ReturnComponentType';
import { Footer, Header } from 'features';

export const App: FC = (): ReturnComponentType => {
  // const [recipes, setRecipes] = useState<string[]>([]);

  const [count, setCount] = useState(0);
  const getRecipes = (): any => {
    requestAPI.get().then(res => {
      // console.log(res.data);
      // setRecipes(res.data.data.results.name);
      setCount(res.data.count);
    });

    /* try {
      const res = await requestAPI.get();

      console.log(res.data);
      setRecipes(res.data as any);
    } catch (error) {
      if (error instanceof Error) {
        console.log(`error${error}`);
      } */
  };

  return (
    <div className={s.app}>
      <Header />
      Tasty food
      <button type="button" onClick={() => getRecipes()}>
        Request
      </button>
      <div>{count}</div>
      <AppRoutes />
      <Footer />
    </div>
  );
};
