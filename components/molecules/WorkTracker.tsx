// components/WorkTracker.tsx

import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CalendarSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
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
  height: 40vh;
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
    background-color:  rgba(135, 198, 86, 0.5);
    border: 2px solid  rgba(135, 198, 86, 0.5);
  }

  &:hover {
    transform: scale(1.1);
  }`;

const WorkTracker: React.FC = () => {
  const [workDays, setWorkDays] = useState<number>(0);

  useEffect(() => {
    // Load initial work days from local storage on component mount
    const savedWorkDays = localStorage.getItem("workDays");
    if (savedWorkDays) {
      setWorkDays(parseInt(savedWorkDays, 10));
    }
  }, []);

  // Function to handle checkbox change
  const handleCheckboxChange = (day: number, month: number) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
        setWorkDays((prevDays) => prevDays + 1);
        // Save the day of work locally using localStorage
        localStorage.setItem(`workDay_${month}_${day}`, "true");
      } else {
        setWorkDays((prevDays) => prevDays - 1);
        // Remove the day of work from local storage
        localStorage.removeItem(`workDay_${month}_${day}`);
      }
      // Update the total work days in local storage
      localStorage.setItem("workDays", String(workDays));
    };
  };

  const renderDaysForMonth = (
    month: number,
    year: number,
    monthName: string
  ) => {
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
                  localStorage.getItem(`workDay_${month}_${dayIndex + 1}`) ===
                  "true"
                }
              />
            </DayCell>
          ))}
        </MonthGrid>
      </MonthContainer>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        gap: "1rem",
        marginTop: "2%" 
      }}
    >
      <h1
        style={{
          width: "22vw",
          margin: "auto",
          padding: "5px",
          fontWeight: "700",
          borderBottom: "1px solid #ccc",
          textAlign: "center",
        }}
      >
        RECORD SECTION
      </h1>
      <CalendarSection>
        {renderDaysForMonth(0, 2023, "January")}
        {renderDaysForMonth(1, 2023, "February")}
        {renderDaysForMonth(2, 2023, "March")}
        {renderDaysForMonth(3, 2023, "April")}
        {renderDaysForMonth(4, 2023, "May")}
        {renderDaysForMonth(5, 2023, "June")}
        {renderDaysForMonth(6, 2023, "July")}
        {renderDaysForMonth(7, 2023, "August")}
        {renderDaysForMonth(8, 2023, "September")}
        {renderDaysForMonth(9, 2023, "October")}
        {renderDaysForMonth(10, 2023, "November")}
        {renderDaysForMonth(11, 2023, "December")}
        <div
          style={{
            width: "30%",
            textAlign: "center",
            margin: "auto",
            marginBottom: "5%",
          }}
        >
          <h1
            style={{
              padding: "5px",
              fontWeight: "700",
              border: "1px solid #ccc",
            }}
          >
            Total work days: {workDays}
          </h1>
        </div>
      </CalendarSection>
    </div>
  );
};

export default WorkTracker;