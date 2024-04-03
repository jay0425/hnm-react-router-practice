import React, { useEffect, useState } from 'react';
import ProductCard from '../conponent/ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
// 객체로 반환한건 {객체명} 이렇게 들고와야함.
import { productAction } from '../redux/actions/productAction';
import { UsseDispatch, useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/reducers/productSlice';

const ProductAll = () => {
  const productList = useSelector((state) => state.product.productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();

  const getProducts = async () => {
    let searchQuery = query.get('q') || '';
    dispatch(fetchProducts(searchQuery));
  };
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
