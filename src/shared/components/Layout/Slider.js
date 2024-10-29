import { useEffect, useState } from "react";
import { getSliders } from "../../../services/Api";
import { getImage } from "../../../ultils";

const Slider = () => {
    const [sliders, setSliders] = useState([]);

    useEffect(() => {
        getSliders({
            params: {
                limit: 4,
                sort: 1,
            }
        }).then(({ data }) => {
            setSliders(data.data.docs);
        }).catch(error => console.log(error));
    }, [])

    return (
        <div id="slide" className="carousel slide" data-ride="carousel">
            {/* Indicators */}
            <ul className="carousel-indicators">
                {
                    sliders.filter(slider => slider.publish === true).map((slider, index) => (
                        <li data-target="#slide" data-slide-to={index} className={index === 0 ? 'active' : ''} key={index} />
                    ))
                }
            </ul>
            {/* The slideshow */}
            <div className="carousel-inner">
                {
                    sliders.filter(slider => slider.publish === true).map((slider, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                            <img src={getImage("sliders", slider.image)} alt="Vietpro Academy" />
                        </div>
                    ))
                }
            </div>
            {/* Left and right controls */}
            <a className="carousel-control-prev" href="#slide" data-slide="prev">
                <span className="carousel-control-prev-icon" />
            </a>
            <a className="carousel-control-next" href="#slide" data-slide="next">
                <span className="carousel-control-next-icon" />
            </a>
        </div>
    );
}

export default Slider;