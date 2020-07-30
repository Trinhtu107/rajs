import React, {useState} from 'react';
import Pagination from "react-js-pagination";
import {connect} from 'react-redux';
import {addToCart} from "../../../Redux/cart/actions";
import {Link} from 'react-router-dom';
import  '../../../Css/style.css';
import Data from '../../../Api/products';
import Product from '../product/list';

function Home({addToCartActions,carts}) {
    const [activePage, setActivePage] = useState(1);
    const pageItems = 5;
    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    };
    const itemOnCart = (data) => {
        var count = 0;
        if (data.length > 0) {
            data.map((item) => {
                count += item.qty;
            })
        }
        return count;
    };

    const renderPost = Data.length > 0 ? Data.map((item, index) => {
        if (activePage === 1 && index < pageItems) {
            return (
                <Product key={item.id}
                         item={item}
                         carts = {carts}
                         onAddToCartClicked={() => addToCartActions(item)} />
            );
        }
        if (activePage > 1 && index > (activePage - 1) * pageItems && index <= activePage * pageItems) {
            return (
                <Product key={item.id}
                         item={item}
                         onAddToCartClicked={() => addToCartActions(item)} />
            );
        }
    }) : <h1>Loading products...</h1>;

    return (
        <div>
            <div className="d-flex justify-content-center">
                <h1>This is Home Page</h1>
            </div>

            <div className="cart">
                <Link to="/shoppingCart" style={{color: "white"}} >
                    <span>Gio hang ({itemOnCart(carts)})</span>
                </Link>

            </div>

            <br style={{clear: "both"}}/>
            {renderPost}
            <br style={{clear: "both"}}/>
            <Pagination
                activePage={activePage}
                itemsCountPerPage={pageItems}
                totalItemsCount={Data.length}
                pageRangeDisplayed={3}
                onChange={handlePageChange}
                itemClass="page-item"
                linkClass="page-link"
            />
        </div>
    );
}

const mapStateToProps = state => ({
    carts: state.carts
});

const mapDispatchToProps = dispatch => ({
    addToCartActions: (id) => dispatch(addToCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
