import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import ProductList from '../components/Products/ProductList'

const Products = ({ dispatch, products }) => {

    function handleDelete(id) {
        //dispatch(routerRedux.push('/index'))
        dispatch({
            type: 'products/delete',
            payload: id,
        });
        
    }

    return (
        <div>
            <h2>List of Products</h2>
            <ProductList onDelete={handleDelete} products={products.list}/>
        </div>
    );
}

export default connect(({ products }) => ({ products }))(Products);