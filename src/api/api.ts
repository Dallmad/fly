import { AxiosResponse } from 'axios';

import { instance } from 'api';
import { TagsType } from 'state/reducers/tags/tags-reducer';

export const requestAPI = {
  getRecipes(from: string, size: string, search?: string) {
    return instance.get<string, AxiosResponse>(
      search
        ? `recipes/list?from=${from}&size=${size}&q=${search}`
        : `recipes/list?from=${from}&size=${size}`,
    );
  },
  getRecipe(id: number) {
    return instance.get<string, AxiosResponse>(`recipes/get-more-info?id=${id}`);
  },
  getTags() {
    return instance.get<string, AxiosResponse<TagsType>>(`tags/list`);
  },
};
