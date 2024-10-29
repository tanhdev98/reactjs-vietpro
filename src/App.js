import Header from "./shared/components/Layout/Header";
import Footer from "./shared/components/Layout/Footer";
import Menu from "./shared/components/Layout/Menu";
import Sidebar from "./shared/components/Layout/Sidebar";
import Slider from "./shared/components/Layout/Slider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import ProductDetail from "./pages/ProductDetail";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";
import { Provider } from "react-redux";
import store, { persistor } from "./redux-setup/store";
import { PersistGate } from 'redux-persist/integration/react'
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Customer from "./pages/Customer";
import Order from "./pages/Order";
import OrderDetail from "./pages/OrderDetail";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <div>
            {/*	Header	*/}
            <Header />
            {/*	End Header	*/}
            {/*	Body	*/}
            <div id="body">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <Menu />
                  </div>
                </div>
                <div className="row">
                  <div id="main" className="col-lg-8 col-md-12 col-sm-12">
                    <Slider />

                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/category-:id" element={<Category />} />
                      <Route path="/product-detail-:id" element={<ProductDetail />} />
                      <Route path="/search" element={<Search />} />
                      <Route path="/cart" element={<Cart />} />
                      <Route path="/success" element={<Success />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/register" element={<Register />} />
                      <Route path="/customer" element={<Customer />} />
                      <Route path="/order" element={<Order />} />
                      <Route path="/order-detail-:id" element={<OrderDetail />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </div>
                  <Sidebar />
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
export default App;
