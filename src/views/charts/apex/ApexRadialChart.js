import React, { useReducer } from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Chart from "react-apexcharts"


const initialState = {
    options: {
      colors: ["#6AE268", "#7F7FD5", "#CF2A2A"],
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
          },
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["Total", "Attempted", "Un-Attempted"],
      legend: {
        show: true,
        position:'bottom'
      },
    },
    series: [44, 55, 67],
};

const reducer = (state, { type, payload }) => {
  console.log(state);
  switch (type) {
    case "series":
      return { ...state, series: payload };
    default:
      return state;
  }
};

const RadialChart = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = () => {
    dispatch({type: 'series', payload: [100,90,80]})
  }

  return (
    <Card onClick={handleClick}>
         <CardHeader>
           <CardTitle>Competion</CardTitle>
         </CardHeader>
         <CardBody>
           <Chart
             options={state.options}
             series={state.series}
             type="radialBar"
             height={350}
           />
         </CardBody>
    </Card>
  )

}

export default RadialChart;
