import { useEffect, useState } from 'react';
import './product.css'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { createCommentProduct, getCommentProduct, getProductDetail } from '../../services/Api';
import { formatPrice, formatText, getImage } from '../../ultils';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux-setup/reducers/cart';
import Pagination from '../../shared/components/Pagination';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [comments, setComments] = useState([]);
    const [inputComment, setInputComment] = useState({});
    const [pages, setPages] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();
    const page = Number(searchParams.get("page")) || 1;

    const getComment = (id) => {
        getCommentProduct(id, {
            params: {
                page
            }
        }).then(({ data }) => {
            setComments(data.data.docs);
            setPages(data.data.pages);
        }).catch(error => console.log(error));
    }

    const inputChange = (e) => {
        const { name, value } = e.target;
        setInputComment({ ...inputComment, [name]: value });
    }

    const handleSubmitComment = (e) => {
        e.preventDefault();
        createCommentProduct(id, inputComment).then(({ data }) => {
            if (data.status === 'success') setInputComment({});
            getComment(id);
        }).catch(error => console.log(error));
    }

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const { data } = await getProductDetail(id);
                const formattedPrice = formatPrice(data.data.price);
                const formattedDetails = formatText(data.data.details);
                const priceNumber = data.data.price;

                setProduct({ ...data.data, price: formattedPrice, details: formattedDetails, priceNumber: priceNumber });
            } catch (error) {
                console.error(error);
            }
        };
        fetchProductDetail();

        getComment(id);
    }, [id, page]);

    const clickAddToCart = (type) => {
        dispatch(addToCart({
            _id: id,
            name: product.name,
            image: product.image,
            price: product.priceNumber,
            qty: 1,
        }));
        if (type === 'buy-now') {
            return navigate("/cart");
        }
    }
    return (<>
        <div id="product">
            <div id="product-head" className="row">
                <div id="product-img" className="col-lg-6 col-md-6 col-sm-12">
                    <img src={getImage("products", product?.image)} />
                </div>
                <div id="product-details" className="col-lg-6 col-md-6 col-sm-12">
                    <h1>{product?.name}</h1>
                    <ul>
                        <li><span>Bảo hành:</span> 12 Tháng</li>
                        <li><span>Đi kèm:</span> {product?.accessories}</li>
                        <li><span>Tình trạng:</span> {product?.status}</li>
                        <li><span>Khuyến Mại:</span> {product?.promotion}</li>
                        <li id="price">Giá Bán (chưa bao gồm VAT)</li>
                        <li id="price-number">{product?.price}</li>
                        <li id="status" className={product?.is_stock ? '' : 'text-danger'} >{product.is_stock ? 'Còn hàng' : 'Hết hàng'}</li>
                    </ul>
                    {product?.is_stock && (
                        <div id="add-cart">
                            <button className="btn btn-warning mr-2" onClick={() => clickAddToCart("buy-now")}>
                                Mua ngay
                            </button>

                            <button className="btn btn-info" onClick={clickAddToCart}>
                                Thêm vào giỏ hàng
                            </button>
                        </div>

                    )}
                </div>
            </div>
            <div id="product-body" className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <h3>Đánh giá về {product?.name}</h3>
                    {product?.details}
                </div>
            </div>
            {/*	Comment	*/}
            <div id="comment" className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <h3>Bình luận sản phẩm</h3>
                    <form method="post">
                        <div className="form-group">
                            <label>Tên:</label>
                            <input onChange={inputChange} value={inputComment.name || ""} name="name" required type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input onChange={inputChange} value={inputComment.email || ""} name="email" required type="email" className="form-control" id="pwd" />
                        </div>
                        <div className="form-group">
                            <label>Nội dung:</label>
                            <textarea onChange={inputChange} value={inputComment.content || ""} name="content" required rows={8} className="form-control" />
                        </div>
                        <button onClick={handleSubmitComment} type="submit" name="sbm" className="btn btn-primary">Gửi</button>
                    </form>
                </div>
            </div>
            {/*	End Comment	*/}
            {/*	Comments List	*/}
            {comments?.length && (
                <div id="comments-list" className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        {
                            comments?.map((commnet, index) => {
                                const time = moment(commnet?.createdAt).format("MMMM DD YYYY, h:mm:ss a");
                                return (
                                    <div className="comment-item" key={index}>
                                        <ul>
                                            <li><b>{commnet?.name}</b></li>
                                            <li>{time}</li>
                                            <li>
                                                <p>{commnet?.content}</p>
                                            </li>
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>)
            }
            {/*	End Comments List	*/}
        </div>
        {/*	End Product	*/}
        <Pagination pages={pages} />
    </>);
}

export default ProductDetail;