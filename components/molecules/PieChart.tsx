import React, { useState } from "react";
import styled from "styled-components";
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
  border: 1px solid #1c1b21;
  background-color: #1c1b21;
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
        backgroundColor: ["#81b29a", "#ff7900", "#80ed99", "#80ed99"],
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