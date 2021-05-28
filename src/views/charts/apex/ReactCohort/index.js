import React, { useReducer } from 'react'
import {Card, CardBody, CardTitle } from 'reactstrap'
import ReactCohort from './ReactCohort';

const initialState = {
  series: {
    days: {
      "22-05-2016": [100, 10, 20, 30, 40, 10, 90, 20],
      "23-05-2016": [100, 10, 20, 30, 40],
      "24-05-2016": [100, 10, 20, 10, 20, 20],
      "25-05-2016": [100, 10, 20, 30, 40, 10, 20, 20],
      "26-05-2016": [100, 10, 20, 30, 40, 10],
    },
  },
};

const reducer = (state, { type, payload }) => {
  console.log(state);
  switch (type) {
    case "data":
      return { ...state, series:{ 'days': payload }};
    default:
      return state;
  }
}; 

const newdata = {
      "22-05-2016": [100, 10, 20, 30, 40, 10, 90, 20],
      "23-05-2016": [100, 10, 20, 30, 40],
      "24-05-2016": [100, 10, 20, 10, 20, 20],
    }


const Index = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    

    const handleClick = () => {
        dispatch({type: 'data', payload: newdata})
    }

    return (
      <>
        <Card onClick={handleClick}>
          <CardTitle>Cohort Chart</CardTitle>
          <CardBody>
              {
                console.log("Line 49 "+JSON.stringify(state))
              }
            <ReactCohort
              data={state.series}
              keyCellColor="red"
              bodyCellColor="blue"
              toggleValues={true}
              shadeColor="#18a0fb"
            />
          </CardBody>
        </Card>
      </>
    );
}

export default Index
