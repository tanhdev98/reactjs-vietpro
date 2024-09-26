import Http from "./Http"

export const getProduct = (config) => {
    return Http.get("/products", config);
}

export const getCategory = (config) => {
    return Http.get("/categories", config);
}