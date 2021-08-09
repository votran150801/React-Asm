import axiosClient from "./axiosClient";

export const getAll = () => {
    const url = `/products`;
    return axiosClient.get(url);
};
export const getPro = (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url)
};
export const add = (products) => {
    const url = `/products`;
    return axiosClient.post(url,products);
};
export const edit = (item) => {
    const url = `/products/${item.id}`;
    return axiosClient.put(url, item);
  };
export const remove = (id) => {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  };
  