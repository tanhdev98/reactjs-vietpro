import { BASE_URL } from "../shared/constants/app";

export const getImageProduct = (imageName) => {
    return `${BASE_URL}/assets/uploads/products/${imageName}`;
}

export const formatPrice = (number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
}

export const formatText = (text) => {
    return text.split('\n \r').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
    ));
}