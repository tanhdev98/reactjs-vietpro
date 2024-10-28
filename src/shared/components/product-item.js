import { Link } from "react-router-dom";
import { getImageProduct } from "../../ultils";

const ProductItem = ({ item }) => {
    const string = item.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    const price = new Intl.NumberFormat('vi-VN', string).format(string);
    return (
        <div className="product-item card text-center">
            <Link to={`/product-detail-${item._id}`}><img src={getImageProduct(item.image)} alt={item.name} /></Link>
            <h4><Link to={`/product-detail-${item._id}`}>{item.name}</Link></h4>
            <p>Giá Bán: <span>{price}đ</span></p>
        </div>
    )
}

export default ProductItem;