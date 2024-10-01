import { BASE_URL } from "../shared/constants/app";

export const getImageProduct = (imageName) => {
    return `${BASE_URL}/assets/uploads/products/${imageName}`;
}

export const formatPrice = (number) => {
    const string = number.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    const price = new Intl.NumberFormat('vi-VN', string).format(string);
    return price;
}

export const formatText = (text) => {
    return text.split('\n \r').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
    ));
}