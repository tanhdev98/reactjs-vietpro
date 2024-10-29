import { Link, useNavigate } from 'react-router-dom';
import './register.css'
import { useState } from 'react';
import { createRegister } from '../../../services/Api';
const Register = () => {
    const [inputRegister, setInputRegister] = useState({
        fullName: '',
        password: '',
        email: '',
        phone: '',
        address: ''
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const inputChange = (e) => {
        const { name, value } = e.target;
        setInputRegister({ ...inputRegister, [name]: value });
    }

    const submitRegister = (e) => {
        e.preventDefault();
        const { fullName, password, email, phone, address } = inputRegister;
        if (!fullName || !password || !email || !phone || !address) {
            setError("Vui lòng điền đầy đủ thông tin bắt buộc.");
            return;
        }

        createRegister({ ...inputRegister, }).then(() => {
            setError(null);
            navigate("/login")
        }).catch(error => {
            setError(error.response?.data);
            console.log(error);
        });
    }

    return (
        <div id="customer">
            {error && <div className="alert alert-danger text-center">{error}</div>}

            <h3 className="text-center">Đăng ký</h3>
            <form method="post">
                <div className="row">
                    <div id="customer-name" className="col-lg-6 col-md-6 col-sm-12">
                        <input onChange={inputChange} value={inputRegister.fullName} placeholder="Họ và tên (bắt buộc)" type="text" name="fullName" className="form-control" required />
                    </div>
                    <div id="customer-pass" className="col-lg-6 col-md-6 col-sm-12">
                        <input onChange={inputChange} value={inputRegister.password} placeholder="Mật khẩu (bắt buộc)" type="text" name="password" className="form-control" required />
                    </div>
                    <div id="customer-mail" className="col-lg-6 col-md-6 col-sm-12">
                        <input onChange={inputChange} value={inputRegister.email} placeholder="Email (bắt buộc)" type="text" name="email" className="form-control" required />
                    </div>
                    <div id="customer-phone" className="col-lg-6 col-md-6 col-sm-12">
                        <input onChange={inputChange} value={inputRegister.phone} placeholder="Số điện thoại (bắt buộc)" type="text" name="phone" className="form-control" required />
                    </div>
                    <div id="customer-add" className="col-lg-12 col-md-12 col-sm-12">
                        <input onChange={inputChange} value={inputRegister.address} placeholder="Địa chỉ nhà riêng hoặc cơ quan (bắt buộc)" type="text" name="address" className="form-control" required />
                    </div>
                </div>
            </form>
            <div className="row">
                <div className="by-now col-lg-6 col-md-6 col-sm-12">
                    <Link onClick={submitRegister}>
                        <b>Đăng ký ngay</b>
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

export default Register;