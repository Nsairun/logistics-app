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
  padding: 10px;
  gap: 2rem;

  @media screen and (max-width: 770px) {
    display: block;
    width: 100%;
`;

const ChartContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40vh;
  width: 50vw;
  color: #fff;
  border-radius: 5px;
  border: 1px solid #eeeee;
  background-color: #F1F2F3;

  @media screen and (max-width: 770px) {
    display: block;
    width: 100%;
`;

const ChartContainer2 = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column
  justify-content: center;
  height: 40vh;
  width: 33vw;
  border-radius: 10px;
  border: 1px solid #eeeee;
  background-color: #F1F2F3;

  @media screen and (max-width: 770px) {
    display: block;
    width: 100%;
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
