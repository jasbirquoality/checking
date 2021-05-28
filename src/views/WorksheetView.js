import React from 'react'
import { Row, Col } from "reactstrap";
import FunnelChart from "./charts/apex/FunnelChart";
import ApexRadialChart from "./charts/apex/ApexRadialChart";
import StackedColumnChart from './charts/apex/ApexStackedColumnChart'
import DashedLineChart from './charts/apex/ApexDashedLineChart-withDataLabel-1';

const WorksheetView = () => {
    return (
      <>
        <Row>
          <Col>
            <FunnelChart />
          </Col>
          <Col>
            <ApexRadialChart />
          </Col>
        </Row>
        <Row>
          <Col>
          <h1>Score Distribution</h1>
            <StackedColumnChart />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Time Spent</h1>
            <DashedLineChart />
          </Col>
        </Row>
      </>
    );
}

export default WorksheetView
