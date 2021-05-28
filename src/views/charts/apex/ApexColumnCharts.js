import React, { useReducer } from "react";
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import Chart from "react-apexcharts";
import { options } from "fusioncharts";

const initialState = {
  options: {
    //colors: this.props.themeColors,
    chart: {
            toolbar: {
              show: false
            },    
    },
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: "rounded",
        columnWidth: "55%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    legend: {
      offsetY: -10,
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  },
  series: [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Free Cash Flow",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ],
};

const reducer = (state, { type, payload }) => {
  console.log(state);
  switch (type) {
    case "series":
      return { ...state, series: payload };
    case "x-axis":
      return {...state, options:{...options, xaxis:{ categories: payload }}};
    default:
      return state;
  }
};

const ColumnChart = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleClick = () => {
    dispatch({ type:'series', payload:[]})
  }

  return (
    <Card onClick={handleClick}>
      <CardHeader>
        <CardTitle>Column Chart</CardTitle>
      </CardHeader>
      <CardBody>
        <Chart
          options={state.options}
          series={state.series}
          type="bar"
          height={350}
        />
      </CardBody>
    </Card>
  );
};

export default ColumnChart;
