import { useEffect, useState } from 'react';
import ProductItem from '../../shared/components/product-item';
import './search.css'
import { getProduct } from '../../services/Api';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../../shared/components/Pagination';

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get("keyword");
    const [products, setProducts] = useState([]);
    const [pages, setPages] = useState({});
    const page = Number(searchParams.get("page")) || 1;
    useEffect(() => {
        getProduct({
            params: {
                name: keyword,
                limit: 6,
                page
            }
        }).then(({ data }) => {
            // set products
            setProducts(data.data.docs);
            // set pages
            setPages(data.data.pages);
        }).catch(error => console.log(error));
    }, [keyword, page]);
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
        <Pagination pages={pages} />

    </>);
}

export default Search;