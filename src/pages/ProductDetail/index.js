import './product.css'

const ProductDetail = () => {
    return (<>
        <div id="product">
            <div id="product-head" className="row">
                <div id="product-img" className="col-lg-6 col-md-6 col-sm-12">
                    <img src="images/product-1.png" />
                </div>
                <div id="product-details" className="col-lg-6 col-md-6 col-sm-12">
                    <h1>iPhone X - 64GB Silver</h1>
                    <ul>
                        <li><span>Bảo hành:</span> 12 Tháng</li>
                        <li><span>Đi kèm:</span> Hộp, sách, sạc, cáp, tai nghe</li>
                        <li><span>Tình trạng:</span> Máy Mới 100%</li>
                        <li><span>Khuyến Mại:</span> Dán Màn Hình 3 lớp</li>
                        <li id="price">Giá Bán (chưa bao gồm VAT)</li>
                        <li id="price-number">22.990.000đ</li>
                        <li id="status">Còn hàng</li>
                    </ul>
                    <div id="add-cart"><a href="#">Mua ngay</a></div>
                </div>
            </div>
            <div id="product-body" className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <h3>Đánh giá về iPhone X 64GB</h3>
                    <p>
                        Màn hình OLED có hỗ trợ HDR là một sự nâng cấp mới của Apple thay vì màn hình LCD với IPS được tìm thấy trên iPhone 8 và iPhone 8 Plus đem đến tỉ lệ tương phản cao hơn đáng kể là 1.000.000: 1, so với 1.300: 1 ( iPhone 8 Plus ) và 1.400: 1 ( iPhone 8 ).
                    </p>
                    <p>
                        Màn hình OLED mà Apple đang gọi màn hình Super Retina HD có thể hiển thị tông màu đen sâu hơn. Điều này được thực hiện bằng cách tắt các điểm ảnh được hiển thị màu đen còn màn hình LCD thông thường, những điểm ảnh đó được giữ lại. Không những thế, màn hình OLED có thể tiết kiệm pin đáng kể.
                    </p>
                    <p>
                        Cả ba mẫu iPhone mới đều có camera sau 12MP và 7MP cho camera trước, nhưng chỉ iPhone X và iPhone 8 Plus có thêm một cảm biến cho camera sau. Camera kép trên máy như thường lệ: một góc rộng và một tele. Vậy Apple đã tích hợp những gì vào camera của iPhone X?
                    </p>
                    <p>
                        Chống rung quang học (OIS) là một trong những tính năng được nhiều hãng điện thoại trên thế giới áp dụng. Đối với iPhone X, hãng tích hợp chống rung này cho cả hai camera, không như IPhone 8 Plus chỉ có OIS trên camera góc rộng nên camera tele vẫn rung và chất lượng bức hình không đảm bảo.
                    </p>
                    <p>
                        Thứ hai, ống kính tele của iPhone 8 Plus có khẩu độ f / 2.8, trong khi iPhone X có ống kính tele f / 2.2, tạo ra một đường cong nhẹ và có thể chụp thiếu sáng tốt hơn với ống kính tele trên iPhone X.
                    </p>
                    <p>
                        Portrait Mode là tính năng chụp ảnh xóa phông trước đây chỉ có với camera sau của iPhone 7 Plus, hiện được tích hợp trên cả iPhone 8 Plus và iPhone X. Tuy nhiên, nhờ sức mạnh của cảm biến trên mặt trước của iPhone X, Camera TrueDepth cũng có thể chụp với Potrait mode.
                    </p>
                </div>
            </div>
            {/*	Comment	*/}
            <div id="comment" className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <h3>Bình luận sản phẩm</h3>
                    <form method="post">
                        <div className="form-group">
                            <label>Tên:</label>
                            <input name="comm_name" required type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input name="comm_mail" required type="email" className="form-control" id="pwd" />
                        </div>
                        <div className="form-group">
                            <label>Nội dung:</label>
                            <textarea name="comm_details" required rows={8} className="form-control" defaultValue={""} />
                        </div>
                        <button type="submit" name="sbm" className="btn btn-primary">Gửi</button>
                    </form>
                </div>
            </div>
            {/*	End Comment	*/}
            {/*	Comments List	*/}
            <div id="comments-list" className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="comment-item">
                        <ul>
                            <li><b>Nguyễn Văn A</b></li>
                            <li>2018-01-03 20:40:10</li>
                            <li>
                                <p>Kiểu dáng đẹp, cảm ứng rất nhạy, cầm trên tay cảm giác không bị cấn. Chụp ảnh tương đối nét, chơi game rất phê. Nếu giá mềm một chút thì sẽ bán khá chạy. Một sản phẩm tốt mà mọi người có thể cân nhắc.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="comment-item">
                        <ul>
                            <li><b>Nguyễn Văn A</b></li>
                            <li>2018-01-03 20:40:10</li>
                            <li>
                                <p>Kiểu dáng đẹp, cảm ứng rất nhạy, cầm trên tay cảm giác không bị cấn. Chụp ảnh tương đối nét, chơi game rất phê. Nếu giá mềm một chút thì sẽ bán khá chạy. Một sản phẩm tốt mà mọi người có thể cân nhắc.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="comment-item">
                        <ul>
                            <li><b>Nguyễn Văn A</b></li>
                            <li>2018-01-03 20:40:10</li>
                            <li>
                                <p>Kiểu dáng đẹp, cảm ứng rất nhạy, cầm trên tay cảm giác không bị cấn. Chụp ảnh tương đối nét, chơi game rất phê. Nếu giá mềm một chút thì sẽ bán khá chạy. Một sản phẩm tốt mà mọi người có thể cân nhắc.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="comment-item">
                        <ul>
                            <li><b>Nguyễn Văn A</b></li>
                            <li>2018-01-03 20:40:10</li>
                            <li>
                                <p>Kiểu dáng đẹp, cảm ứng rất nhạy, cầm trên tay cảm giác không bị cấn. Chụp ảnh tương đối nét, chơi game rất phê. Nếu giá mềm một chút thì sẽ bán khá chạy. Một sản phẩm tốt mà mọi người có thể cân nhắc.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="comment-item">
                        <ul>
                            <li><b>Nguyễn Văn A</b></li>
                            <li>2018-01-03 20:40:10</li>
                            <li>
                                <p>Kiểu dáng đẹp, cảm ứng rất nhạy, cầm trên tay cảm giác không bị cấn. Chụp ảnh tương đối nét, chơi game rất phê. Nếu giá mềm một chút thì sẽ bán khá chạy. Một sản phẩm tốt mà mọi người có thể cân nhắc.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/*	End Comments List	*/}
        </div>
        {/*	End Product	*/}
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

export default ProductDetail;