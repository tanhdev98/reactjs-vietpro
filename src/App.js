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

const App = () => {
  return (
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
                  <Route path="/category" element={<Category />} />
                  <Route path="/product-detail" element={<ProductDetail />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/success" element={<Success />} />
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
  );
};
export default App;
