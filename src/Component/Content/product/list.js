import React from 'react';
import  '../../../Css/style.css';

const List = ({ item, onAddToCartClicked ,carts}) => {

    const Stock = (item, carts) => {
        let stock = 0;
        if (carts.length > 0){
            carts.filter( (cart) => {
                if (item.id === cart.id) {
                    stock = item.inventory - cart.qty;
                }});
            return stock;
        }
        return item.inventory;
    };
    console.log((carts));
    return (
        <div className="content" key={item.id.toString()}>
            <div key={item.id}>
                <ul className="col-sm-3 list" >
                    <a href="">
                        <li><img src={item.imgUrl} alt="" width="100" height="200"/></li>
                        <hr/>
                        <li>{item.price} $</li>
                        <li style={{height: "50px"}}>{item.name}</li>
                    </a>
                    <li>{Stock(item, carts) > 0 ?
                        <div>
                            <button onClick={onAddToCartClicked} className="btn btn-primary">Add To Cart
                            </button>
                            Stock:{item.inventory}
                        </div>
                        : <b>Outstock</b>
                    }
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default List;

