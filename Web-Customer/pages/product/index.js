import React from 'react';
import BasicLayout from '../../src/layouts/BasicLayout';
import ProductList from '../../src/modules/product/components/index';

const ProductPage = props => {
  return (
    <BasicLayout>
      <ProductList />
    </BasicLayout>
  )
}

export default ProductPage;