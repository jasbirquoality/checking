import React from 'react'
import { CardTitle, CardBody, Row, Col } from "reactstrap";

const CardComponent = ({Carddata}) => {
    return (
      <>
        <Row>
          {Carddata.map((data, index) => {
            return (
              <Col key={index}>
                <div
                  className="center "
                >
                  <CardTitle className="mt " >{data.label}</CardTitle>
                  <CardBody className="fontcard">{data.value}</CardBody>
                </div>
              </Col>
            );
          })}
        </Row>
      </>
    );
}

export default CardComponent;
