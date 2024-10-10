import { useEffect, useState } from 'react';
import './category.css'
import { getProductsCategory, getCategory } from '../../services/Api';
import { useParams, useSearchParams } from 'react-router-dom';
import ProductItem from '../../shared/components/product-item';
import Pagination from '../../shared/components/Pagination';

const Category = () => {
    const [category, setCategory] = useState("")
    const [totalProduct, setTotalProduct] = useState(0);
    const [products, setProducts] = useState([]);
    const { id } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const page = Number(searchParams.get("page")) || 1;
    const [pages, setPages] = useState({});
    useEffect(() => {
        // get category name
        getCategory(id).then(({ data }) => {
            setCategory(data.data);
        })

        getProductsCategory(id, {
            params: {
                limit: 6,
                page
            }
        }).then(({ data }) => {
            // get list products
            setProducts(data.data.docs);

            // get products total
            setTotalProduct(data.data.pages.total);

            // get pages
            setPages(data.data.pages);
        })
            .catch(error => console.log(error))
    }, [id, page]);

    return (<>
        <div className="products">
            <h3>{category.name} (hiện có {totalProduct} sản phẩm)</h3>
            <div className="product-list card-deck">
                {
                    products.map((product, index) => (
                        <ProductItem key={index} item={product} />
                    ))
                }
            </div>
        </div>
        {/*	End List Product	*/}
        <Pagination pages={pages} />
    </>);
}

export default Category;