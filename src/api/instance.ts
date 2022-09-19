import axios from 'axios';

export const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}recipes/list?from=0&size=20&tags=under_15_minutes`,
  headers: {
    'X-RapidAPI-Key': `${process.env.REACT_APP_X_RAPID_API_KEY}`,
    'X-RapidAPI-Host': `${process.env.REACT_APP_X_RAPID_API_HOST}`,
  },
});
