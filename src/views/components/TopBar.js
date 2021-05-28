import React from "react";
import {  Card } from "reactstrap";
import "./../styles/Topbar.css";
import * as Icon from "react-feather";
//import Filter from './filter';
import {CSVLink} from 'react-csv';

const dataPoint = [
  {
    name: "Label",
    data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  },
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
  {
    name: "Label2",
    data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  },
  {
    name: "Installs3",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 200],
  },
  {
    name: "Un-Installs46",
    data: [14, 45, 30, 59, 100, 55, 77, 98, 110],
  },
  {
    name: "Net-Installs6",
    data: [11, 40, 34, 54, 44, 54, 74, 94, 40],
  },
  {
      name: '',
      data: []
  }
];

const FilterBar = () => {

  return (
    <>
      <Card className="container ">
        <div className=" mt-1 flex center">
          {/* <Filter /> */}
          <div className="icon-container">
            <Icon.Calendar size={20} className="mr-1" />
            <CSVLink  type='link' data={dataPoint} filename="my-file.csv">
              <Icon.Download
                size={20}
                className="ml-1 mr-1"
              />
            </CSVLink>
          </div>
        </div>
      </Card>
    </>
  );
};

export default FilterBar;
