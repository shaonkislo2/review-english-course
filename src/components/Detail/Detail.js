import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Detail = (props) => {
    const {name,price, decription, img, duration}=props.course;
    return (
        <div className="detailstyle ">
            <div className="container">
            <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card>
              <img src={img} alt="" />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  {decription}
                </Card.Text>
                <h5>Coures Fee: ${price} </h5>
                <h6>Duration: {duration} months </h6>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
        </div>
        </div>

    );
};

export default Detail;