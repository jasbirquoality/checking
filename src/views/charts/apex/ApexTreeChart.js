import React, { useReducer } from "react";
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import Chart from "react-apexcharts";

const initialState = {
      series: [
        {
          data: [
            {
              x: "New Delhi",
              y: 218,
            },
            {
              x: "Kolkata",
              y: 149,
            },
            {
              x: "Mumbai",
              y: 184,
            },
            {
              x: "Ahmedabad",
              y: 55,
            },
            {
              x: "Bangaluru",
              y: 84,
            },
            {
              x: "Pune",
              y: 31,
            },
            {
              x: "Chennai",
              y: 70,
            },
            {
              x: "Jaipur",
              y: 30,
            },
            {
              x: "Surat",
              y: 44,
            },
            {
              x: "Hyderabad",
              y: 68,
            },
            {
              x: "Lucknow",
              y: 28,
            },
            {
              x: "Indore",
              y: 19,
            },
            {
              x: "Kanpur",
              y: 29,
            },
          ],
        },
      ],
      options: {
        legend: {
          show: false,
        },
        chart: {
          height: 350,
          type: "treemap",
          toolbar:{
            show: false,
          }
        },
      },
};

const reducer = (state, { type, payload }) => {
  console.log(state);
  switch (type) {
    case "series":
      return { ...state, series:[ { data : payload}] };
    default:
      return state;
  }
};

const TreeChart = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleClick = () => {
    dispatch({type:'series', payload:[]})
  }

    return (
      <Card onClick={handleClick}>
        <CardHeader>
          <CardTitle>Tree Chart</CardTitle>
        </CardHeader>
        <CardBody>
          <Chart
            options={state.options}
            series={state.series}
            type="treemap"
            height={350}
          />
        </CardBody>
      </Card>
    );

}

export default TreeChart;
// class ApexChart extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       series: [
//         {
//           data: [
//             {
//               x: "New Delhi",
//               y: 218,
//             },
//             {
//               x: "Kolkata",
//               y: 149,
//             },
//             {
//               x: "Mumbai",
//               y: 184,
//             },
//             {
//               x: "Ahmedabad",
//               y: 55,
//             },
//             {
//               x: "Bangaluru",
//               y: 84,
//             },
//             {
//               x: "Pune",
//               y: 31,
//             },
//             {
//               x: "Chennai",
//               y: 70,
//             },
//             {
//               x: "Jaipur",
//               y: 30,
//             },
//             {
//               x: "Surat",
//               y: 44,
//             },
//             {
//               x: "Hyderabad",
//               y: 68,
//             },
//             {
//               x: "Lucknow",
//               y: 28,
//             },
//             {
//               x: "Indore",
//               y: 19,
//             },
//             {
//               x: "Kanpur",
//               y: 29,
//             },
//           ],
//         },
//       ],
//       options: {
//         legend: {
//           show: false,
//         },
//         chart: {
//           height: 350,
//           type: "treemap",
//         },
//       },
//     };
//   }

//   render() {
//     return (
      // <Card>
      //   <CardHeader>
      //     <CardTitle>Tree Chart</CardTitle>
      //   </CardHeader>
      //   <CardBody>
      //     <Chart
      //       options={this.state.options}
      //       series={this.state.series}
      //       type="treemap"
      //       height={350}
      //     />
      //   </CardBody>
      // </Card>
//     );
//   }
// }

// export default ApexChart;
