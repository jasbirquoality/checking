import React, {useState} from 'react'
import { ArrowDown, ArrowUp } from 'react-feather';
import {  CardTitle, CardBody, Row, Col } from "reactstrap";

const style = {
  'borderTop': '2px solid red'
}

const CardComponent = ({Carddata, handleData}) => {
  const [selected, Setselected] = useState(0);
  const handleClick = (idx) => {
    Setselected(idx)
    handleData(idx);
  }

    return (
      <>
        <Row>
          {Carddata.map((data, index) => {
            let arrow = data.change >=0 ? <ArrowUp size={15} /> : <ArrowDown size={15}/>
            let change = data.change >= 0 ? data.change : (-1) * data.change;
            return (
              <Col key={index}  >
                <div className='center width' style={selected === index ? style: {}} onClick={()=> handleClick(index)}>
                  <CardTitle className="">{data.label}</CardTitle>
                  <CardBody className="fontcard">
                    {data.value}
                    {data.change && (<p className={data?.change > 0 ? "success" : "danger"}>
                      {change}% {arrow}
                      </p>)
                    }
                  </CardBody>
                </div>
              </Col>
            );
          })}
        </Row>
      </>
    );
}

export default CardComponent;
