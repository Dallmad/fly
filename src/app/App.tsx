import React, { FC } from 'react';

import style from './App.module.scss';

import { AppRoutes } from 'app';
import { ReturnComponentType } from 'common';
import { Footer, Header, LinkBar } from 'features';

export const App: FC = (): ReturnComponentType => {
  // const [recipes, setRecipes] = useState<string[]>([]);

  /*  const [count, setCount] = useState(0);
  // @ts-ignore
  const getRecipes = async (): any => {
    try {
      const res = await requestAPI.get();

      console.log(res.data);
      setCount(res.data.count);
    } catch (error) {
      if (error instanceof Error) {
        console.log(`error${error}`);
      }
    }
  }; */

  return (
    <div className={style.app}>
      <Header />
      Tasty food
      <LinkBar />
      {/* <button type="button" onClick={() => getRecipes()}>
        Request
      </button>
      <div>{count}</div> */}
      <AppRoutes />
      <Footer />
    </div>
  );
};
