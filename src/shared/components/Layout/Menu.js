import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../../services/Api";

const Menu = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then(({ data }) => {
            setCategories(data.data.docs);
        }
        ).catch(error => console.log(error));
    }, []);
    return (
        <nav>
            <div id="menu" className="collapse navbar-collapse">
                <ul>
                    {categories.map((category, index) => (
                        <li className="menu-item" key={index}>
                            <Link to={`/category-${category._id}`}>{category.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Menu;