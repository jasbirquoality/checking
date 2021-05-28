import React, {useReducer} from "react"
import { Card, CardBody,} from "reactstrap"
import Chart from "react-apexcharts"
import './../../styles/index.css'
import CardComponent from '../../components/CardWithTab'
import { options } from "fusioncharts"

const Carddata = [

  {
    label: 'DAU',
    value: 1000,
    change: -50
  },

  {
    label: 'WAU',
    value: 100,
    change: 100
  },
  {
    label: 'MAU',
    value: 900,
    change: -99,
  }

]

const dataPoint = [
  [
    {
      name: "DAU",
      data: [10, 50, 35, 51, 49, 70, 80, 91, 148],
    },
    {
      name: "New DAU",
      data: [14, 45, 30, 59, 100, 55, 77, 98, 110],
    },
  ],
  [
    {
      name: "WAU",
      data: [14, 45, 30, 59, 100, 55, 77, 98, 110],
    },
    {
      name: "New WAU",
      data: [11, 40, 34, 54, 44, 54, 74, 94, 40],
    },
  ],
  [
    {
      name: "MAU",
      data: [11, 40, 34, 54, 44, 54, 74, 94, 40],
    },
    {
      name: "New MAU",
      data: [10, 50, 35, 51, 49, 70, 80, 91, 148],
    },
  ],
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
      dashArray: [0,5],
    },
    dataLabels: {
      enabled: false,
      background: {
        borderRadius: "50%",
      },
    },
    markers: {
      size: 5,
    },
    legend: {
      position: "top",
    },
    colors: ["#6AE268", "#7F7FD5"],
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
  },
  series: dataPoint[0],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "series":
      return { ...state, series: payload };
    case "x-axis":
      return {...state, options:{...options, xaxis: {categories: payload}}};
    default:
      return state;
  }
};

const DashedLine = () => {

   const [state, dispatch] = useReducer(reducer, initialState);

  //  const handleSeries = () => {
  //    dispatch({ type: "series", payload: [] });
  //  };

  //  const handleXAxis = () => {
  //    dispatch({ type: "x-axis", payload: [] });
  //  };

   const handledata = (index) => {
      dispatch({ type: "series", payload: dataPoint[index] });
   };

  return (
    <>
         <Card>
          <CardComponent Carddata={Carddata} handleData={handledata} />
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
  )
}

export default DashedLine;
