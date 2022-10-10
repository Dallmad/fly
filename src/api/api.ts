import { AxiosResponse } from 'axios';

import { instance } from 'api';

export const requestAPI = {
  getRecipes(from: string, size: string, search?: string) {
    return instance.get<number, AxiosResponse>(
      search
        ? `recipes/list?from=${from}&size=${size}&q=${search}`
        : `recipes/list?from=${from}&size=${size}`,
    );
  },
  getRecipe(id: number) {
    return instance.get<number, AxiosResponse>(`recipes/get-more-info?id=${id}`);
  },
};
