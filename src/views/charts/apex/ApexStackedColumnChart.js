import React, {  useReducer } from "react";
import { Card, CardBody } from "reactstrap";
import Chart from "react-apexcharts";
import CardComponent from "../../components/CardWithTab";
import { options } from "fusioncharts";


const Carddata = [
  {
    label: "App Level",
    value: 1000,
  },

  {
    label: "Hindi",
    value: 100,
  },
  {
    label: "English",
    value: 900,
  },
  {
    label: "Math",
    value: 900,
  },

];

const dataPoint = [
  [
    {
      name: "<33% - 1000",
      data: [44, 55, 10, 67, 22, 43],
    },
    {
      name: "33-66% - 900",
      data: [13, 23, 20, 8, 13, 27],
    },
    {
      name: ">66% - 2000",
      data: [11, 17, 15, 15, 21, 100],
    },
  ],

  [
    {
      name: "<33%",
      data: [100, 55, 41, 67, 22, 43],
    },
    {
      name: "33-66%",
      data: [13, 23, 20, 8, 13, 27],
    },
    {
      name: ">66%",
      data: [11, 17, 15, 15, 21, 50],
    },
  ],
  [
    {
      name: "<33%",
      data: [44, 55, 41, 67, 22, 43],
    },
    {
      name: "33-66%",
      data: [13, 23, 50, 8, 13, 27],
    },
    {
      name: ">66%",
      data: [11, 17, 15, 36, 21, 14],
    },
  ],
  [
    {
      name: "<33%",
      data: [100, 55, 41, 67, 22, 43],
    },
    {
      name: "33-66%",
      data: [13, 23, 50, 8, 13, 27],
    },
    {
      name: ">66%",
      data: [11, 17, 15, 36, 21, 14],
    },
  ],
];
const initialState = {
  series:dataPoint[0],
  options: {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        borderRadius: 10,
        horizontal: false,
        columnWidth: "20%",
      },
    },
    xaxis: {
      type: "datetime",
      categories: [
        "01/01/2011 GMT",
        "01/02/2011 GMT",
        "01/03/2011 GMT",
        "01/04/2011 GMT",
        "01/05/2011 GMT",
        "01/06/2011 GMT",
      ],
    },
    colors: ["#56C568", "#F7BA44", "#7F7FD5"],
    legend: {
      position: "bottom",
    },
    fill: {
      opacity: 1,
    },
  },
};

const reducer = (state, { type, payload }) => {
  console.log(state);
  switch (type) {
    case "series":
      return { ...state, series: payload };
    case "x-axis":
      return {...state, options:{...options, xaxis: { categories: payload }}};
    default:
      return state;
  }
};

const StackedColumn = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  

  const handledata = (index) => {
    dispatch({ type: "series", payload:dataPoint[index] });
  };
  return (
    <Card >
      <CardComponent Carddata={Carddata} handleData={handledata} />
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

export default StackedColumn;

