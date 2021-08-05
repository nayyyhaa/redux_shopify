import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import AllProduct from './allProducts';
import { setProducts } from '../redux/actions/productActions';

const ProductsGrid = () => {
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        let response = await axios.get("https://fakestoreapi.com/products")
        .catch((err) => {
            console.log("Err: ", err);
        });
        //dispatch action to reducer
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchProducts();
    },[]);

    return (
    <div className="ui grid container">
      <AllProduct />
    </div>
  )
};


export default ProductsGrid;