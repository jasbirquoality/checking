import React, {useReducer} from "react"
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from "reactstrap"
import Chart from "react-apexcharts"


const initialState = {
  series: [44, 55, 41, 17, 15],
  options: {
    labels: ["Video", "Worksheet", "Assessment", "Screener", "Quiz"],
    chart: {
      width: 380,
      type: "donut",
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
        donut: {
          labels: {
            show: true,
            name: {},
            value: {},
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
    },
    colors: ["#6AE268", "#CF2A2A", "#7F7FD5", "#F7BA44", "#E786D7"],
    legend: {
      position: "bottom",
    },
    
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
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
const Donut = () => {
 const [state, dispatch] = useReducer(reducer, initialState);

 const handleClick = () => {
    dispatch({type: 'series', payload:[]})
 }

 return (
        <Card onClick={handleClick}>
         <CardHeader style={{ display: "block", textAlign: "center" }}>
           <CardTitle>Total Time</CardTitle>
           <CardSubtitle>250 Min</CardSubtitle>
         </CardHeader>
         <CardBody>
           <Chart
            options={state.options}
            series={state.series}
            type="donut"
            height={380}
          />
        </CardBody>
      </Card>
  )
}

export default Donut;
