import axiosClient from "./axiosClient";

export const getAllCate = () => {
    const url = `/categories`;
    return axiosClient.get(url);
}
export const getCate = (id) => {
    const url = `/categories/${id}`;
    return axiosClient.get(url);
}
export const addCate = (category) => {
    const url= `/categories`;
    return axiosClient.post(url,category);
}
export const editCate = (item) => {
    const url = `/categories/${item.id}`;
    return axiosClient.put(url,item);
}
export const CateDelete = (id) => {
    const url=`/categories/${id}`;
    return axiosClient.delete(url);
}