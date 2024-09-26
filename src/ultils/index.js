import { BASE_URL } from "../shared/constants/app";

export const getImageProduct = (imageName) => {
    return `${BASE_URL}/assets/uploads/products/${imageName}`;
}