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