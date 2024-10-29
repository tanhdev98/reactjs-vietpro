import { BASE_URL } from "../shared/constants/app";

export const getImage = (folderName, imageName) => {
    return `${BASE_URL}/assets/uploads/${folderName}/${imageName}`;
}

export const formatPrice = (number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
}

export const formatText = (text) => {
    return text.split('\n \r').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
    ));
}