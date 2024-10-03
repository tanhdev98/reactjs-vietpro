import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();

    const handleOnChangeInput = (e) => {
        setKeyword(e.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        return navigate(`/search?keyword=${keyword}`);
    }
    return (
        <div id="search" className="col-lg-4 col-md-12 col-sm-12">
            <form className="form-inline">
                <input className="form-control mt-3" onChange={handleOnChangeInput} value={keyword} type="search" placeholder="Tìm kiếm" aria-label="Search" />
                <button className="btn btn-danger mt-3" onClick={handleOnSubmit} type="submit">Tìm kiếm</button>
            </form>
        </div>
    )

}

export default Search;