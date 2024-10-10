import "./home.css"

import { useEffect, useState } from "react";
import { getProduct } from "../../services/Api";
import ProductItem from "../../shared/components/product-item";

const Home = () => {
    const [latestProducts, setLatestProducts] = useState([]);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    useEffect(() => {
        // get latest products
        getProduct({
            params: { limit: 6 }
        }).then(({ data }) => {
            setLatestProducts(data.data.docs);
        }).catch(error => console.log(error));

        // get featured products
        getProduct({
            params: { limit: 6, is_featured: true }
        }).then(({ data }) => {
            setFeaturedProducts(data.data.docs);
        }).catch(error => console.log(error));
    }, [])
    return (<>
        <div className="products">
            <h3>Sản phẩm nổi bật</h3>
            <div className="product-list card-deck">
                {featuredProducts.map((product, index) => (
                    <ProductItem item={product} key={index} />
                ))}
            </div>
        </div>
        <div className="products">
            <h3>Sản phẩm mới</h3>
            <div className="product-list card-deck">
                {latestProducts.map((product, index) => (
                    <ProductItem item={product} key={index} />
                ))}
            </div>
        </div>
    </>);
}

export default Home;