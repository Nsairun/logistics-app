import React, { useState } from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
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
  height: 20vh;
  width: 33vw;
  border-radius: 10px;
  border: 1px solid #1c1b21;
  background-color: #1c1b21;

  @media screen and (max-width: 770px) {
    width: 100%;
`;

ChartJS.register(
  BarElement, 
  CategoryScale, 
  LinearScale,//y 
  Tooltip, 
  Legend
  );

const LineChart: React.FC = () => {
  console.log("Data:", Data);

  const [userData, setUserData] = useState<UserData>({
    labels: Data?.map((data) => data.month),
    datasets: [
      {
        label: "recievals",
        data: Data?.map((data) => data.recievals),
        backgroundColor: ["#adb45d", "#a1754e", "#2F711F"],
      },
    ],
  });

  return (
    <ChartContainer2>
      <Line data={userData} />
    </ChartContainer2>
  );
};

export default LineChart;