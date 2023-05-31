import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/features/auth/authSlice';
import useRedirectLoggedOutUser from '../../customHook/useRedirectLoggedOutUser';
import getProducts from '../../redux/features/product/productSlice';
import ProductSummary from '../../components/product/productSummary/ProductSummary';
import ProductList from '../../components/product/productList/ProductList';
import React, { useEffect } from 'react';

const Dashboard = () => {
  useRedirectLoggedOutUser('/login');
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { products, isLoading, isError, message } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (isLoggedIn === true) dispatch(getProducts());

    if (isError) console.log(message);
  }, [isLoading, isError, message, dispatch]);

  return (
    <div>
      <ProductSummary products={products} />
      <ProductList products={products} isLoading={isLoading} />
    </div>
  );
};

export default Dashboard;
