import { useParams } from 'react-router-dom';
import './order_details.css'
import { useEffect, useState } from 'react';
import { getOrderDetail } from '../../services/Api';
import { formatPrice, getImage } from '../../ultils';

const OrderDetail = () => {
    const { id } = useParams();
    const [orderDetails, setOrderDetails] = useState([]);
    const [totalPrice, setTotalPrice] = useState(null);

    useEffect(() => {
        getOrderDetail(id)
            .then(({ data }) => {
                setOrderDetails(data.data.items);
                setTotalPrice(data.data.totalPrice);
            })
            .catch(error => console.log(error));
    }, [id]);
    return (
        <div id="my-cart">
            <div className="row">
                <div className="cart-nav-item col-lg-7 col-md-7 col-sm-12">
                    Thông tin sản phẩm
                </div>
                <div className="cart-nav-item col-lg-2 col-md-2 col-sm-12">Số lượng</div>
                <div className="cart-nav-item col-lg-3 col-md-3 col-sm-12">Giá</div>
            </div>
            <form method="post">
                {
                    orderDetails.map((order, item) => (
                        <div className="cart-item row">
                            <div className="cart-thumb col-lg-7 col-md-7 col-sm-12">
                                <img src={getImage("products", order.image)} />
                                <h4>{order.name}</h4>
                            </div>
                            <div className="cart-quantity col-lg-2 col-md-2 col-sm-12">
                                <p>{order.qty}</p>
                            </div>
                            <div className="cart-price col-lg-3 col-md-3 col-sm-12"><b>{formatPrice(order.price)}</b></div>
                        </div>
                    ))
                }

                <div className="row">
                    <div className="cart-thumb col-lg-7 col-md-7 col-sm-12">
                    </div>
                    <div className="cart-total col-lg-2 col-md-2 col-sm-12"><b>Tổng cộng:</b></div>
                    <div className="cart-price col-lg-3 col-md-3 col-sm-12"><b>{formatPrice(totalPrice)}</b></div>
                </div>
            </form>
        </div>

    );
}

export default OrderDetail;