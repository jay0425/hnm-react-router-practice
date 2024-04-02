import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction';

const ProductDetail = () => {
  let { id } = useParams();
  const product = useSelector((state) => state.product.selectedItem);
  const dispatch = useDispatch();
  const getProductDetail = async () => {
    dispatch(productAction.getProductDetail(id));
  };

  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row className="Row-area">
        <Col className="product-img">
          <img src={product?.img} alt="상품 이미지" />
        </Col>
        <Col>
          <h1>{product?.title}</h1>
          <h2>₩ {product?.price}</h2>
          {product?.choice ? <h3>Conscious choice</h3> : ''}
          <div className="size">
            <label for="size-select">Choose a size : </label>
            <select name="size" id="size-select">
              <option value="">--Please choose an option--</option>
              <option value="s">s</option>
              <option value="m">m</option>
              <option value="l">l</option>
              <option value="xl">xl</option>
              <option value="xxl">xxl</option>
              <option value="xxxl">xxxl</option>
            </select>
          </div>
          <Button variant="dark">추가</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
