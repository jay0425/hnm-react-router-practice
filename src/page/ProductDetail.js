import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `http://localhost:3001/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
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
