import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { deleteCartItem } from '../../../redux/slices/CartSlice/cartSlice';

const CartItem = ({ item,nofitems}) => {
  const dispatch=useDispatch();
  const authToken = JSON.parse(localStorage.getItem('authtokens'));


  return (
    <tr>
      <td>
        <div className="product-info">
          <img width="80" src={"http://127.0.0.1:8000/" + item.image} alt={item.name} />
          {item.name}
        </div>
      </td>
      <td>{item.price}</td>
      <td>{nofitems.number_of_items}</td>
      <td>
        <button onClick={()=>dispatch(deleteCartItem(nofitems.id))}>
        <div className="product-remove" >
          <Link to="/cart">
          Remove
          </Link>
        </div>
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
