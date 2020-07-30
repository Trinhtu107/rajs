import React, { useRef} from 'react';
import {connect} from "react-redux";
import {addToCart} from "../../../Redux/cart/actions";
import {removeFromCart} from "../../../Redux/cart/actions";
import {updatequantity} from "../../../Redux/cart/actions";
import "../../../Css/style.css";

function cartShow({removeItemFromCart, updateItemFromCart, carts}) {
    let total = 0;
    console.log('cart:');
    console.log(carts);

    let renderCart = carts.map((item, index) => {
        console.log(carts);
        let refs = 'ref'+index;
        refs = useRef();
        total += item.qty * item.price;
        return (
            <div className="content" key={item.id}>
                <div>
                    <ul className="col-sm-3 list" style={{height:"400px"}}>
                        <a href="">
                            <li><img src={item.img} alt="" width="100" height="200"/></li>
                        </a>
                        <hr/>

                        <li style={{color:"blue"}}>{item.price} $</li>
                        <li style={{height: "50px"}}>{item.name}</li>
                        <li className="form-row form">
                            <label className="form col-3">Qty:</label>
                            <input className="form form-control col-9" type="number" ref={refs} min="1" max={item.stock + item.qty}
                                        defaultValue={item.qty} name="qty"/>
                        </li>

                        <button onClick={() => {
                            removeItemFromCart(item.id)
                        }} className="btn btn-primary">Remove
                        </button>
                        <button style={{margin: "0px 10px"}} onClick={() => {
                            updateItemFromCart({id: item.id, qty: refs.current.value})
                        }} className="btn btn-primary">Update
                        </button>
                    </ul>
                </div>
            </div>
        );
    });

    return (
        <div style={{border: "1px solid blue", borderRadius: "10px"}}>
            <div className="d-flex justify-content-center">
                <h1>This is Cart Page</h1>
            </div>
            {renderCart}
            <br style={{clear: "both"}}/>
            <h2>{total !== 0 ? <p> Total: {total} </p>: 'khong co sp'}</h2>
        </div>
    );
}

const mapStateToProps = state => ({
    carts: state.carts,
    qty: state.qty
});

const mapDispatchToProps = dispatch => ({
    addToCartActions: (id) => dispatch(addToCart(id)),
    removeItemFromCart: (id) => dispatch(removeFromCart(id)),
    updateItemFromCart: (data) => dispatch(updatequantity(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(cartShow);
