import { AxiosResponse } from 'axios';

import { instance } from 'api';

export const requestAPI = {
  getRecipes(from: string, size: string) {
    return instance.get<number, AxiosResponse>(
      `recipes/list?from=${from}&size=${size}&tags=under_15_minutes`,
    );
  },
  getRecipe(id: number) {
    return instance.get<number, AxiosResponse>(`recipes/get-more-info?id=${id}`);
  },
};
