import { useEffect, useState } from 'react';
import ProductItem from '../../shared/product-item';
import './search.css'
import { getProduct } from '../../services/Api';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get("keyword");
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProduct({
            params: { name: keyword }
        }).then(({ data }) => {
            setProducts(data.data.docs);
        }).catch(error => console.log(error));
    }, [keyword]);
    return (<>
        <div className="products">
            <div id="search-result">Kết quả tìm kiếm với sản phẩm <span>{keyword}</span></div>
            <div className="product-list card-deck">
                {products.map((product, index) => (
                    <ProductItem item={product} key={index} />
                ))}
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