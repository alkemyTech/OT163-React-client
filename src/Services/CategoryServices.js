import { GET_PRIVATE_API, PATCH_PRIVATE_API, POST_PRIVATE_API, DELETE_PRIVATE_API } from './privateApiService';

export const getCategory = (id = '') => {
  const response = GET_PRIVATE_API(`${process.env.REACT_APP_API_CATEGORY}`, id);
  return response;
};

export const pathCategory = (id, data) => {
  const response = PATCH_PRIVATE_API(`${process.env.REACT_APP_API_CATEGORY}/${id}`, data);

  return response;
};

export const postCategory = (data) => {
  const response = POST_PRIVATE_API(`${process.env.REACT_APP_API_CATEGORY}`, data);
  return response;
};

export const deleteCategory = (id) => {
  const response = DELETE_PRIVATE_API(`${process.env.REACT_APP_API_CATEGORY}/${id}`);
  return response;
};
