import { AxiosResponse } from 'axios';

import { instance } from 'api/instance';

export const requestAPI = {
  get() {
    return instance.get<number, AxiosResponse>('');
  },
};
