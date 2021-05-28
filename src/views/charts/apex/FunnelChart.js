import React, { useReducer } from 'react';
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.widgets";
import ReactFusioncharts from "react-fusioncharts";
import CardComponent from "../../components/CardWithTab";
import { Card, CardBody } from "reactstrap";
import '../../styles/index.css'
// Resolves charts dependancy
charts(FusionCharts);

const Carddata = [
  {
    label: "App Level",
    value: 1000,
    change: -50,
  },

  {
    label: "Hindi",
    value: 100,
    change: 100,
  },
  {
    label: "English",
    value: 900,
    change: -99,
  },
  {
    label: "Math",
    value: 900,
    change: 50,
  },
];

const dataPoint = [
  [
    {
      label: "Opened",
      value: "3000",
      color: "blue",
    },
    {
      label: "Attempted",
      value: "1500",
      color: "#fyed45",
    },
    {
      label: "Completed",
      value: "1000",
      color: "#F7BA44",
    },
  ],
  [
    {
      label: "Opened",
      value: "3000",
      color: "blue",
    },
    {
      label: " Attempted",
      value: "1500",
      color: "#fyed45",
    },
    {
      label: " Completed",
      value: "1000",
      color: "#F7BA44",
    },
  ],
  [
    {
      label: " Opened",
      value: "3000",
      color: "blue",
    },
    {
      label: "Attempted",
      value: "1500",
      color: "#fyed45",
    },
    {
      label: "Completed",
      value: "1000",
      color: "#F7BA44",
    },
  ],
  [
    {
      label: "Opened",
      value: "3000",
      color: "blue",
    },
    {
      label: "Attempted",
      value: "1500",
      color: "#fyed45",
    },
    {
      label: "Completed",
      value: "1000",
      color: "#F7BA44",
    },
  ],
];
const initialState = {
  chart: {
    showlabels: "1",
    showvalues: "1",
    showpercentvalues: "1",
    streamlineddata: "0",
    is2D: "1",
    theme: "Candy",
    plottooltext: "$label: <b>$dataValue</b>",
    bgColor: "#ffffff",
    showBorder: "0",
  },
  data: dataPoint[0]
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "series":
      return { ...state, data: payload };
    default:
      return state;
  }
};

const Funnelchart = () => {
  
  const [state, dispatch] = useReducer(reducer, initialState)

  const handledata = (index) => {
      dispatch({type: 'series', payload:dataPoint[index] })
    }


  return (
    <Card >
      <CardComponent Carddata={Carddata} handleData={handledata} />
      <CardBody>
        <ReactFusioncharts
          type="funnel"
          width="95%%"
          height={300}
          dataFormat="JSON"
          dataSource={state}
          background="#bd4de6"
        />
      </CardBody>
    </Card>
  );
}
export default Funnelchart;