import { Link } from "react-router-dom";
import Search from "./Search";

const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <div className="row">
                    <div id="logo" className="col-lg-3 col-md-12 col-sm-12">
                        <h1><Link to="/"><img className="img-fluid" src="images/logo.png" /></Link></h1>
                    </div>
                    <Search />
                    <div id="cart" className="col-lg-5 col-md-12 col-sm-12">
                        <i className="fa-solid fa-user mr-1" />
                        <a className="mr-2" href="#">đăng nhập</a>|
                        <a className="mr-2 ml-2" href="#">đăng ký</a>|
                        <a className="mt-4 mr-2 ml-2" href="#">giỏ hàng
                            <ul>
                                <li><link to="#" /><i className="fas fa-shopping-cart" /> Giỏ hàng của bạn</li>
                                <li><link to="#" /><i className="fas fa-file-alt" /> Đơn hàng đã mua</li>
                            </ul>
                        </a>
                        <span className="mt-3">8</span>
                    </div>
                </div>
            </div>
            {/* Toggler/collapsibe Button */}
            <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#menu">
                <span className="navbar-toggler-icon" />
            </button>
        </div>
    );
}

export default Header;