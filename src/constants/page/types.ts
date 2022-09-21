import { ReactElement } from 'react';

export type Page = {
  id: number;
  route: string;
  page: ReactElement;
};
