import { useEffect, useState } from "react";
import { getBanners } from "../../../services/Api";
import { Link } from "react-router-dom";
import { getImage } from "../../../ultils";

const Sidebar = () => {
    const [banners, setBanners] = useState([]);
    useEffect(() => {
        getBanners({
            params: {
                limit: 5,
                sort: 1
            }
        }).then(({ data }) => {
            setBanners(data.data.docs);
        }).catch(error => console.log(error));
    }, []);

    return (
        <div id="sidebar" className="col-lg-4 col-md-12 col-sm-12">
            <div id="banner">
                <div className="banner-item">
                    {
                        banners.filter(banner => banner.publish === true).map((banner, index) => (
                            <Link to={banner.url} key={index} target={banner.target === true ? '' : "_blank"}><img className="img-fluid" src={getImage("banners", banner.image)} /></Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Sidebar;