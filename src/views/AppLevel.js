import React from "react"
import { Row, Col, } from "reactstrap"
import ApexDonutChartNew from "./charts/apex/ApexDonutChartNew";
import ApexLineDataLabelChart from './charts/apex/ApexLineChart-withDataLabel'
import ApexPolarChart from './charts/apex/ApexPolarchart';
import ApexDashedLineChart from './charts/apex/ApexDashedLineChart-withDataLabel'
import ReactCohort from './charts/apex/ReactCohort/index'
import "../assets/scss/plugins/charts/apex-charts.scss"
import {themeColors} from './styles/Color'


class ApexCharts extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col md="12">
            <h1>Acquisition</h1>
            <ApexLineDataLabelChart themeColors={themeColors} />
          </Col>
          <Col md="12">
            <h1>User Activity</h1>
            <ApexDashedLineChart themeColors={themeColors} />
          </Col>
          <Col lg="6" sm="12">
            <h1>User Engagement (Time) </h1>
            <ApexDonutChartNew themeColors={themeColors} />
          </Col>
          <Col lg='6'  md='12'>
            <h1>Bonus Activity</h1>
            <ApexPolarChart themeColors={themeColors} />
          </Col>
          <Col md="12">
            <ReactCohort themeColors={themeColors} />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default ApexCharts
