import { useEffect, useState } from 'react';
import './category.css'
import { getProductsCategory, getCategory } from '../../services/Api';
import { useParams } from 'react-router-dom';
import ProductItem from '../../shared/product-item';

const Category = () => {
    const [category, setCategory] = useState("")
    const [totalProduct, setTotalProduct] = useState(0);
    const [products, setProducts] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        // get category name
        getCategory(id).then(({ data }) => {
            setCategory(data.data);
        })

        getProductsCategory(id).then(({ data }) => {
            // get list products
            setProducts(data.data.docs);

            // get products total
            setTotalProduct(data.data.pages.total);
        })
            .catch(error => console.log(error))
    }, [id]);

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

export default Category;