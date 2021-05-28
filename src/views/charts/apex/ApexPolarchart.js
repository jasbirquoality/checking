import React, { useReducer } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardSubtitle,
} from "reactstrap";
import Chart from "react-apexcharts";

const initialState = {
            series: [14, 23, 21, 17, 15],
            options: {
              labels: ["Profile", "Screener", "App Download", "WA Share", "WA Refer"],
              chart: {
                type: "polarArea",
              },
              stroke: {
                colors: ["#fff"],
              },
              fill: {
                opacity: 0.8,
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

const PolarChart = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = () => {
    dispatch({type:'series', payload:[10,11,12,13,14]})
  }

  return (
    <>
      <Card onClick={handleClick}>
        <CardHeader style={{ display: "block", textAlign: "center" }}>
          <CardTitle>Total Engagement</CardTitle>
          <CardSubtitle>{4444}</CardSubtitle>
        </CardHeader>
        <CardBody>
          <Chart
            options={state.options}
            series={state.series}
            type="polarArea"
          />
        </CardBody>
      </Card>
    </>
  );
};

export default PolarChart;
// class ApexChart extends React.Component {
//         constructor(props) {
//           super(props);

//           this.state = {
//             series: [14, 23, 21, 17, 15],
//             options: {
//               labels: ["Profile", "Screener", "App Download", "WA Share", "WA Refer"],
//               chart: {
//                 type: "polarArea",
//               },
//               stroke: {
//                 colors: ["#fff"],
//               },
//               fill: {
//                 opacity: 0.8,
//               },
//               colors: ["#6AE268", "#CF2A2A", "#7F7FD5", "#F7BA44", "#E786D7"],
//               legend: {
//                 position: "bottom",
//               },
//               responsive: [
//                 {
//                   breakpoint: 480,
//                   options: {
//                     chart: {
//                       width: 200,
//                     },
//                     legend: {
//                       position: "bottom",
//                     },
//                   },
//                 },
//               ],
//             },
//           };
//         }

//         render() {
//           return (
//             <>
//               <Card>
//                 <CardHeader style={{display: 'block', textAlign: 'center'}}>
//                   <CardTitle>Total Engagement</CardTitle>
//                   <CardSubtitle>{4444}</CardSubtitle>
//                 </CardHeader>
//                 <CardBody>
//                   <Chart
//                     options={this.state.options}
//                     series={this.state.series}
//                     type="polarArea"
//                   />
//                 </CardBody>
//               </Card>
//             </>
//           );
//         }
//     }

//     export default ApexChart;
