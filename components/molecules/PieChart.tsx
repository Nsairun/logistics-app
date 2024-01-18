import React, { useState } from "react";
import styled from "@emotion/styled";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale, //y
  Tooltip,
  Legend,
} from "chart.js/auto";
import { Data } from "../../hooks/Data";

interface UserData {
  labels: any[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
  }[];
}

const SubContainer = styled("div")`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
const ChartContainer2 = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column
  justify-content: center;
  height: 42vh;
  width: 47vw;
  border-radius: 10px;
  background-color: #eeeee;

  @media screen and (max-width: 770px) {
    display: block;
    width: 100%;
`;

ChartJS.register(
  BarElement, 
  CategoryScale, 
  LinearScale,//y 
  Tooltip, 
  Legend
  );

const PieChart: React.FC = () => {
  console.log("Data:", Data);

  const [userData, setUserData] = useState<UserData>({
    labels: Data?.map((data) => data.month),
    datasets: [
      {
        label: "recievals",
        data: Data?.map((data) => data.recievals),
        backgroundColor: ["#606c38", "#283618"],
      },
    ],
  });

  return (
    <ChartContainer2>
      <Pie data={userData} />
    </ChartContainer2>
  );
};

export default PieChart;