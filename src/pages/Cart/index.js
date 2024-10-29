import { useDispatch, useSelector } from 'react-redux';
import './cart.css'
import { formatPrice, getImage } from '../../ultils';
import { updateCart, deleteItemCart, resetCart } from '../../redux-setup/reducers/cart';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createOrder } from '../../services/Api';

const Cart = () => {
    const [inputCustomer, setInputCustomer] = useState({});
    const items = useSelector((({ Cart }) => Cart.items));
    const newItems = items.map((item) => ({ prd_id: item._id, price: item.price, qty: item.qty }));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const changeQty = (e, id) => {
        const value = Number(e.target.value);
        if (value === 0) {
            const isConfirm = window.confirm("Bạn có muốn xoá sản phẩm khỏi giỏ hàng không?");
            return isConfirm ? dispatch(deleteItemCart({
                _id: id
            })) : false;
        }

        dispatch(updateCart({
            _id: id,
            qty: value,
        }));
    }

    const handleDeleteItem = (e, id) => {
        e.preventDefault();
        const isConfirm = window.confirm("Bạn có muốn xoá sản phẩm khỏi giỏ hàng không?");
        return isConfirm ? dispatch(deleteItemCart({
            _id: id
        })) : false;
    }

    const changeInputCustomer = (e) => {
        const { name, value } = e.target;
        return setInputCustomer({ ...inputCustomer, [name]: value });
    }

    const clickOrder = (e) => {
        e.preventDefault();
        createOrder({
            ...inputCustomer,
            customer_id: "614717de271a0400ee8ef1cd",
            items: newItems,
        }).then(() => {
            dispatch(resetCart());
            return navigate("/success");
        }).catch(error => console.log(error));
    }

    return (<>
        <div id="my-cart">
            <div className="row">
                <div className="cart-nav-item col-lg-7 col-md-7 col-sm-12">Thông tin sản phẩm</div>
                <div className="cart-nav-item col-lg-2 col-md-2 col-sm-12">Tùy chọn</div>
                <div className="cart-nav-item col-lg-3 col-md-3 col-sm-12">Giá</div>
            </div>
            <form method="post">
                {
                    items?.map((item, index) => (
                        <div className="cart-item row" key={index}>
                            <div className="cart-thumb col-lg-7 col-md-7 col-sm-12">
                                <img src={getImage("producs", item?.image)} alt={item?.name} />
                                <h4>{item?.name}</h4>
                            </div>
                            <div className="cart-quantity col-lg-2 col-md-2 col-sm-12">
                                <input onChange={(e) => changeQty(e, item?._id)} type="number" id="quantity" className="form-control form-blue quantity" value={item?.qty} />
                            </div>
                            <div className="cart-price col-lg-3 col-md-3 col-sm-12">
                                <b>{formatPrice(item?.qty * item?.price)}</b>
                                <Link onClick={(e) => handleDeleteItem(e, item?._id)}>Xóa</Link>
                            </div>
                        </div>
                    ))
                }

                <div className="row">
                    <div className="cart-thumb col-lg-7 col-md-7 col-sm-12"></div>
                    <div className="cart-total col-lg-2 col-md-2 col-sm-12"><b>Tổng cộng:</b></div>
                    <div className="cart-price col-lg-3 col-md-3 col-sm-12"><b>{
                        formatPrice(items?.reduce((total, item) => total + item.qty * item.price, 0))
                    }</b></div>
                </div>
            </form>
        </div>
        <div id="customer">
            <form method="post">
                <div className="row">
                    <div id="customer-name" className="col-lg-4 col-md-4 col-sm-12">
                        <input onChange={changeInputCustomer} placeholder="Họ và tên (bắt buộc)" type="text" name="fullName" className="form-control" required />
                    </div>
                    <div id="customer-phone" className="col-lg-4 col-md-4 col-sm-12">
                        <input onChange={changeInputCustomer} placeholder="Số điện thoại (bắt buộc)" type="text" name="phone" className="form-control" required />
                    </div>
                    <div id="customer-mail" className="col-lg-4 col-md-4 col-sm-12">
                        <input onChange={changeInputCustomer} placeholder="Email (bắt buộc)" type="text" name="email" className="form-control" required />
                    </div>
                    <div id="customer-add" className="col-lg-12 col-md-12 col-sm-12">
                        <input onChange={changeInputCustomer} placeholder="Địa chỉ nhà riêng hoặc cơ quan (bắt buộc)" type="text" name="address" className="form-control" required />
                    </div>
                </div>
            </form>
            <div className="row">
                <div className="by-now col-lg-6 col-md-6 col-sm-12">
                    <Link onClick={clickOrder} href="#">
                        <b>Mua ngay</b>
                        <span>Giao hàng tận nơi siêu tốc</span>
                    </Link>
                </div>
                <div className="by-now col-lg-6 col-md-6 col-sm-12">
                    <Link href="#">
                        <b>Trả góp Online</b>
                        <span>Vui lòng call (+84) 0988 550 553</span>
                    </Link>
                </div>
            </div>
        </div>
    </>);
}

export default Cart;