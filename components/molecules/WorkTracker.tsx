import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { LocalStorage } from "node-localstorage";

const CalendarSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const MonthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const MonthName = styled.h2`
  box-shadow: 2px 5px 20px 2px #ccc;
  border-radius: 5px;
  padding: 5px;
`;

const MonthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1rem;
  box-shadow: 2px 5px 20px 2px #ccc;
  height: 45vh;
  padding: 20px;
`;

const DayCell = styled.div`
  transition: all 0.3s ease;
`;

const CheckboxInput = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 25px;
  height: 25px;
  border: 2px solid #4a4a4a;
  border-radius: 5px;
  outline: none;
  transition: all 0.3s ease;

  &:checked {
    background-color: rgba(135, 198, 86, 0.5);
    border: 2px solid rgba(135, 198, 86, 0.5);
  }

  &:hover {
    transform: scale(1.1);
  }
`;


const isBrowser = typeof window !== "undefined";

const WorkTracker: React.FC = () => {
  const [workDays, setWorkDays] = useState<number>(0);

  useEffect(() => {
    if (isBrowser) {
      const savedWorkDays = localStorage.getItem("workDays");
      if (savedWorkDays) {
        setWorkDays(parseInt(savedWorkDays, 10));
      }
    }
  }, []);

  const handleCheckboxChange = (day: number, month: number) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const isChecked = e.target.checked;
      setWorkDays((prevDays) => prevDays + (isChecked ? 1 : -1));
      if (isBrowser) {
        localStorage.setItem(`workDay_${month}_${day}`, isChecked.toString());
        localStorage.setItem("workDays", workDays.toString());
      }
    };
  };

  const renderDaysForMonth = (month: number, year: number, monthName: string) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return (
      <MonthContainer key={month}>
        <MonthName>{monthName}</MonthName>
        <MonthGrid>
          {Array.from({ length: daysInMonth }, (_, dayIndex) => (
            <DayCell key={dayIndex}>
              <span>{dayIndex + 1}</span>
              <CheckboxInput
                type="checkbox"
                onChange={handleCheckboxChange(dayIndex + 1, month)}
                checked={
                  localStorage.getItem(`workDay_${month}_${dayIndex + 1}`) === "true"
                }
              />
            </DayCell>
          ))}
        </MonthGrid>
      </MonthContainer>
    );
  };

  return (
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", gap: "1rem", marginTop: "2%" }}>
      <h1 style={{ width: "22vw", margin: "auto", padding: "5px", fontWeight: "700", borderBottom: "1px solid #ccc", textAlign: "center" }}>
        RECORD SECTION
      </h1>
      <CalendarSection>
        {[...Array(12)].map((_, monthIndex) =>
          renderDaysForMonth(monthIndex, 2023, new Date(2023, monthIndex).toLocaleString("default", { month: "long" }))
        )}
        <div style={{ width: "30%", textAlign: "center", margin: "auto", marginBottom: "5%" }}>
          <h1 style={{ padding: "5px", fontWeight: "700", border: "1px solid #ccc" }}>
            Total work days: {workDays}
          </h1>
        </div>
      </CalendarSection>
    </div>
  );
};

export default WorkTracker;