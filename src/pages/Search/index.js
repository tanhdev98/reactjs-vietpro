import './search.css'

const Search = () => {
    return (<>
        <div className="products">
            <div id="search-result">Kết quả tìm kiếm với sản phẩm <span>iPhone Xs Max 2 Sim - 256GB</span></div>
            <div className="product-list card-deck">
                <div className="product-item card text-center">
                    <a href="#"><img src="images/product-1.png" /></a>
                    <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
                    <p>Giá Bán: <span>32.990.000đ</span></p>
                </div>
                <div className="product-item card text-center">
                    <a href="#"><img src="images/product-2.png" /></a>
                    <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
                    <p>Giá Bán: <span>32.990.000đ</span></p>
                </div>
                <div className="product-item card text-center">
                    <a href="#"><img src="images/product-3.png" /></a>
                    <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
                    <p>Giá Bán: <span>32.990.000đ</span></p>
                </div>
            </div>
            <div className="product-list card-deck">
                <div className="product-item card text-center">
                    <a href="#"><img src="images/product-4.png" /></a>
                    <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
                    <p>Giá Bán: <span>32.990.000đ</span></p>
                </div>
                <div className="product-item card text-center">
                    <a href="#"><img src="images/product-5.png" /></a>
                    <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
                    <p>Giá Bán: <span>32.990.000đ</span></p>
                </div>
                <div className="product-item card text-center">
                    <a href="#"><img src="images/product-6.png" /></a>
                    <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
                    <p>Giá Bán: <span>32.990.000đ</span></p>
                </div>
            </div>
            <div className="product-list card-deck">
                <div className="product-item card text-center">
                    <a href="#"><img src="images/product-7.png" /></a>
                    <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
                    <p>Giá Bán: <span>32.990.000đ</span></p>
                </div>
                <div className="product-item card text-center">
                    <a href="#"><img src="images/product-8.png" /></a>
                    <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
                    <p>Giá Bán: <span>32.990.000đ</span></p>
                </div>
                <div className="product-item card text-center">
                    <a href="#"><img src="images/product-9.png" /></a>
                    <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
                    <p>Giá Bán: <span>32.990.000đ</span></p>
                </div>
            </div>
        </div>
        {/*	End List Product	*/}
        <div id="pagination">
            <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#">Trang trước</a></li>
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">Trang sau</a></li>
            </ul>
        </div>

    </>);
}

export default Search;