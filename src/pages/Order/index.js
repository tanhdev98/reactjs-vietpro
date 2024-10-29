import { useEffect, useState } from 'react';
import { getCancelOrder, getOrders } from '../../services/Api';
import './order.css'
import { useSelector } from 'react-redux';
import moment from 'moment';
import { formatPrice } from '../../ultils';

const Order = () => {
    const { customer } = useSelector((state) => state.Auth);
    const [orders, setOrder] = useState([]);

    const fetchOrders = () => {
        getOrders(customer?._id)
            .then(({ data }) => {
                setOrder(data.data.docs);
            })
            .catch(error => console.log(error));
    };

    useEffect(() => {
        fetchOrders();
    }, [customer]);

    const clickCancelOrder = (orderId) => {
        getCancelOrder(orderId).then(
            fetchOrders()
        ).catch(error => console.log(error));
    }

    return (
        <div id="my-cart">
            <div className="row">
                <div className="cart-nav-item col-lg-7 col-md-7 col-sm-12">Đơn hàng của bạn</div>
                <div className="cart-nav-item col-lg-5 col-md-5 col-sm-12">Tổng tiền</div>
            </div>
            <form method="post">
                {
                    orders?.map((order, index) => {
                        const date = moment(order.createdAt).format("MMMM DD YYYY");
                        const time = moment(order.createdAt).format("h:mm:ss a");
                        return (
                            <div className={`cart-item row ${order.status === 0 ? "alert-danger" : order.status === 2 ? "alert-success" : ""}`} key={index}>
                                <div className="cart-thumb col-lg-7 col-md-7 col-sm-12">
                                    <h4>Đơn hàng đã mua vào ngày: <span className="text-secondary">{date} hồi {time}</span></h4>
                                    <p>Mã Đơn (MĐ): {order._id}</p>
                                </div>
                                <div className="cart-price col-lg-2 col-md-2 col-sm-12"><b>{formatPrice(order.totalPrice)}</b></div>
                                <div className="cart-quantity col-lg-3 col-md-3 col-sm-12">
                                    <button type="button" className="btn btn-outline-dark mb-1">Chi tiết đơn hàng</button>
                                    {order.status === 0 && (
                                        <button type="button" className="btn btn-danger mb-1">Đơn đã huỷ</button>
                                    )}

                                    {order.status === 1 && (
                                        <>
                                            <button type="button" className="btn btn-outline-danger mb-1" onClick={() => clickCancelOrder(order._id)}>Huỷ đơn</button>
                                            <button type="button" className="btn btn-outline-success mb-1">Đơn đang giao</button>
                                        </>
                                    )}

                                    {order.status === 2 && (
                                        <button type="button" className="btn btn-success mb-1">Đơn đã giao</button>
                                    )}
                                </div>
                            </div>
                        )
                    })
                }


                <div className="row">
                    <div className="cart-thumb col-lg-7 col-md-7 col-sm-12">
                        <button id="update-cart" className="btn btn-success" type="submit" name="sbm">Quay về
                            trang chủ</button>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12">
                        <ul className="pagination mt-4">
                            <li className="page-item disabled">
                                <span className="page-link">Trang trước</span>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item active" aria-current="page">
                                <span className="page-link">2</span>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#">Trang sau</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </form>
        </div>

    );
}

export default Order;