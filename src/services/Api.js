import Http from "./Http"

export const getProduct = (config) => {
    return Http.get("/products", config);
}

export const getCategories = (config) => {
    return Http.get("/categories", config);
}

export const getCategory = (id, config) => {
    return Http.get(`/categories/${id}`, config);
}

export const getProductsCategory = (id, config) => {
    return Http.get(`/categories/${id}/products`, config);
}

export const getProductDetail = (id, config) => {
    return Http.get(`/products/${id}`, config)
}

export const getCommentProduct = (id, config) => {
    return Http.get(`/products/${id}/comments`, config);
}

export const createCommentProduct = (id, data) => {
    return Http.post(`/products/${id}/comments`, data);
}

export const createOrder = (data) => {
    return Http.post(`/order`, data);
}

export const getSliders = (config) => {
    return Http.get(`/sliders`, config);
}

export const getBanners = (config) => {
    return Http.get(`/banners`, config);
}

export const createRegister = (data) => {
    return Http.post(`/customers/register`, data);
}

export const createLogin = (data) => {
    return Http.post(`/customers/login`, data);
}

export const updateCustomer = (id, data) => {
    return Http.post(`/customers/${id}/update`, data);
}

export const getOrders = (id) => {
    return Http.get(`/customers/${id}/orders`);
}

export const getCancelOrder = (id) => {
    return Http.get(`/customer/orders/${id}/canceled`);
}