import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateCustomer } from "../../services/Api";
import { updateCustomerInfo } from "../../redux-setup/reducers/auth";

const Customer = () => {
    const dispatch = useDispatch();
    const customer = useSelector((state) => state.Auth.customer);
    const [formData, setFormData] = useState({
        fullName: customer?.fullName || "",
        password: customer?.password || "",
        email: customer?.email || "",
        phone: customer?.phone || "",
        address: customer?.address || "",
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const inputCustomerChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const onSubmitUpdate = (e) => {
        e.preventDefault();
        updateCustomer(customer._id, formData).then(() => {
            setSuccess(true);
            setError(null);
            dispatch(updateCustomerInfo(...customer));
        }).catch((error) => {
            setSuccess(false);
            setError("Số điện thoại đã tồn tại!");
        })
    }
    return (
        <div id="customer">
            {error && <div className="alert alert-danger text-center">{error}</div>}
            {success && <div className="alert alert-success text-center">Cập nhật thông tin thành công!</div>}
            <h3 className="text-center">Thông tin tài khoản</h3>
            <form method="post">
                <div className="row">
                    <div id="customer-name" className="col-lg-6 col-md-6 col-sm-12">
                        <input onChange={inputCustomerChange} placeholder="Họ và tên (bắt buộc)" type="text" name="fullName" className="form-control" defaultValue={formData.fullName} required />
                    </div>
                    <div id="customer-pass" className="col-lg-6 col-md-6 col-sm-12">
                        <input onChange={inputCustomerChange} disabled placeholder="Mật khẩu (bắt buộc)" type="password" name="password" className="form-control" defaultValue={formData.password} required />
                    </div>
                    <div id="customer-mail" className="col-lg-6 col-md-6 col-sm-12">
                        <input onChange={inputCustomerChange} disabled placeholder="Email (bắt buộc)" type="text" name="email" className="form-control" defaultValue={formData.email} required />
                    </div>
                    <div id="customer-phone" className="col-lg-6 col-md-6 col-sm-12">
                        <input onChange={inputCustomerChange} placeholder="Số điện thoại (bắt buộc)" type="text" name="phone" className="form-control" defaultValue={formData.phone} required />
                    </div>
                    <div id="customer-add" className="col-lg-12 col-md-12 col-sm-12">
                        <input onChange={inputCustomerChange} placeholder="Địa chỉ nhà riêng hoặc cơ quan (bắt buộc)" type="text" name="address" className="form-control" defaultValue={formData.address} required />
                    </div>
                </div>
            </form>
            <div className="row">
                <div className="by-now col-lg-6 col-md-6 col-sm-12">
                    <Link onClick={onSubmitUpdate}>
                        <b>Cập nhật ngay</b>
                    </Link>
                </div>
                <div className="by-now col-lg-6 col-md-6 col-sm-12">
                    <Link to="/">
                        <b>Quay về trang chủ</b>
                    </Link>
                </div>
            </div>
        </div>

    )
}
export default Customer;