import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { selectFilteredProducts } from '../../../redux/features/product/filterSlice';
import './productList.scss';

const ProductList = ({ products, isLoading }) => {
    const [search, setSearch] = useState("");
    const filteredProducts = useSelector(selectFilteredProducts);

    const dispatch = useDispatch();
}

export default ProductList;