import { Link, useNavigate } from 'react-router-dom';
import './login.css'
import { useState } from 'react';
import { createLogin } from '../../../services/Api';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../../redux-setup/reducers/auth';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [inputLogin, setInputLogin] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState(null);

    const inputChange = (e) => {
        const { name, value } = e.target;
        setInputLogin({ ...inputLogin, [name]: value });
    }
    const submitLogin = (e) => {
        e.preventDefault();
        const { email, password } = inputLogin;
        if (!email || !password) {
            setError('Vui lòng điền đầy đủ thông tin bắt buộc.');
            return;
        }
        createLogin({ ...inputLogin }).then(({ data }) => {
            const { accessToken, customer } = data
            dispatch(loginSuccess({ accessToken, customer }));
            setError(null);
            navigate('/')
        }).catch((error) => {
            setError(error.response?.data);
        });
    }

    return (
        <div id="customer">
            {error && <div className="alert alert-danger text-center">{error}</div>}

            <h3 className="text-center">Đăng nhập</h3>
            <form method="post">
                <div className="row">
                    <div id="customer-mail" className="col-lg-6 col-md-6 col-sm-12">
                        <input onChange={inputChange} placeholder="Email (bắt buộc)" type="text" name="email" className="form-control" required />
                    </div>
                    <div id="customer-pass" className="col-lg-6 col-md-6 col-sm-12">
                        <input onChange={inputChange} placeholder="Mật khẩu (bắt buộc)" type="text" name="password" className="form-control" required />
                    </div>
                </div>
            </form>
            <div className="row">
                <div className="by-now col-lg-6 col-md-6 col-sm-12">
                    <Link onClick={submitLogin} href="#">
                        <b>Đăng nhập ngay</b>
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
export default Login;