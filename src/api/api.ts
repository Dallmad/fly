import { AxiosResponse } from 'axios';

import { instance } from 'api';

export const requestAPI = {
  get() {
    return instance.get<number, AxiosResponse>('');
  },
};
