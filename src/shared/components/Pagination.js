import { Link, useLocation, useSearchParams } from "react-router-dom";

const Pagination = ({ pages }) => {
    const { total, totalPages, currentPage, next, prev, hasNext, hasPrev } = pages;
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get("keyword");
    const { pathname, search } = useLocation();

    const formatUrl = (page) => {
        return `${pathname}?keyword=${keyword}&page=${page}`
    }

    const renderPagesHTML = (delta = 2) => {
        const listPage = [];
        const left = currentPage - delta;
        const right = currentPage + delta;
        console.log(currentPage);
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 ||
                i === currentPage ||
                i === totalPages ||
                (i >= left && i <= right)) {
                listPage.push(i);
            }
        }
        return listPage;
    }
    return (
        <div id="pagination">
            <ul className="pagination">
                {
                    hasPrev &&
                    (
                        <li className="page-item"><Link className="page-link" to={formatUrl(prev)}>Trang trước</Link></li>
                    )

                }
                {
                    totalPages > 1 &&
                    renderPagesHTML().map((page, index) => (
                        <li className={`"page-item" ${page === currentPage && 'active'}`} key={index}>
                            <Link className="page-link" to={formatUrl(page)}>
                                {page}
                            </Link>
                        </li>
                    ))
                }
                {
                    hasNext && (
                        <li className="page-item"><Link className="page-link" to={formatUrl(next)}>Trang sau</Link></li>
                    )

                }
            </ul>
        </div>
    )
}
export default Pagination;