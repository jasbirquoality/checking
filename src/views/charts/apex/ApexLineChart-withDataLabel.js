import React, {useReducer} from "react"
import { Card, CardBody,} from "reactstrap"
import Chart from "react-apexcharts"
import './../../styles/index.css'
import CardComponent from '../../components/CardWithoutTab'
import { options } from "fusioncharts"

const Carddata = [
  {
    label: "Installs",
    value: 1000,
  },

  {
    label: "Un-Installs",
    value: 100,
  },
  {
    label: "Net-Installs",
    value: 900,
  },
];

const dataPoint = [
  {
    name: "Installs",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 200],
  },
  {
    name: "Un-Installs",
    data: [14, 45, 30, 59, 100, 55, 77, 98, 110],
  },
  {
    name: "Net-Installs",
    data: [11, 40, 34, 54, 44, 54, 74, 94, 40],
  },
];


const initialState = {
    options: {
      chart: {
        id: "lineChart",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: [
          "31/01",
          "01/02",
          "02/02",
          "03/02",
          "04/02",
          "05/02",
          "06/02",
          "07/02",
          "08/02",
        ],
      },
      stroke: {
        curve: "straight",
      },
      dataLabels: {
        enabled: false,
        // background: {
        //   borderRadius: "50%",
        // },
      },
      markers: {
        size: 5,
      },
      legend: {
        position: 'top'
      },
      // title: {
      //   text: "Product Trends by Month",
      //   align: "left",
      // },
      colors: ["#6AE268", "#CF2A2A", "#7F7FD5"],
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
    },
    series: dataPoint
  };
const reducer = (state, { type, payload }) => {
  console.log(state);
  switch (type) {
    case "series":
      return { ...state, series: payload };
    case "x-axis":
      return { ...state, options:{...options, xaxis: { categories: payload}} };
    default:
      return state;
  }
};


const Line = () => {

    const [state, /*dispatch*/] = useReducer(reducer,initialState);

    
    // const handleSeries = () => {
    // dispatch({type:'series', payload: [] })
    // }

    // const handleXAxis = () => {
    //    dispatch({ type: "x-axis", payload: [] });
    // }

    return (
      <>
        <Card >
          <CardComponent Carddata={Carddata} />
          <CardBody>
            <Chart
              options={state.options}
              series={state.series}
              type="line"
              height={350}
            />
          </CardBody>
        </Card>
      </>
    );


}

export default Line;

