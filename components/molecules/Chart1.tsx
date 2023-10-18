import React from "react";
import styled from "styled-components";

const Chart1Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 2rem;
`;

const ChartContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
  width: 50vw;
  border: 1px solid #1c1b21;
  background-color: #0d0d0d;
`;

const ChartContainer2 = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
  width: 33vw;
  border: 1px solid #1c1b21;
  background-color: #0d0d0d;
`;


function Chart1() {
  return (
    <Chart1Main>
      <ChartContainer></ChartContainer>
      <ChartContainer2></ChartContainer2>
    </Chart1Main>
  );
}

export default Chart1;
