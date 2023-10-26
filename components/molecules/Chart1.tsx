"use client";
import React from "react";
import styled from "styled-components";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale, //y
  Tooltip,
  Legend,
} from "chart.js/auto";

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
  height: 45vh;
  width: 50vw;
  color: #fff;
  border: 1px solid #1c1b21;
  background-color: #1c1b21;
`;

const ChartContainer2 = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column
  justify-content: center;
  padding: 5px;
  height: 45vh;
  width: 33vw;
  border: 1px solid #1c1b21;
  background-color: #1c1b21;
`;

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale, //y
  Tooltip,
  Legend
);

function Chart1({ chartData }: any) {
  return (
    <Chart1Main>
      <ChartContainer>
        <Bar data={chartData} />
      </ChartContainer>
      <ChartContainer2>
        <Line data={chartData} />
      </ChartContainer2>
    </Chart1Main>
  );
}

export default Chart1;
