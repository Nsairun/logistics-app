import React from "react";
import styled from "styled-components";
import Text from "./Text";

type TextProps = {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  txt1: string;
  txt2: string;
  txt3: string;
  txt4: string;
  txt5: string;
  txt6: string;
  txt7: string;
};

const InfoMainContainer = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: #1c1b21;
  border-radius: 5px;
  padding: 1px;
  gap: 1rem;

  &:hover {
    transform: translateY(-5px) scale(1.01);
  }
  
  & + & {
    margin-top: 1rem;
`;

const InfoContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
  gap: 6rem;
  border-radius: 5px;
`;

const InfoDiv = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Info: React.FC<TextProps> = ({
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  txt1,
  txt2,
  txt3,
  txt4,
  txt5,
  txt6,
  txt7,
}) => {
  return (
    <InfoMainContainer>
      <InfoDiv style={{ color: "grey" }}>
        <InfoContainer>
          <InfoDiv>
            <Text headingLevel={"h1"}>{text1}</Text>
            <Text headingLevel={"h1"} style={{ color: "#fff", fontSize: "12px" }}>{txt1}</Text>
          </InfoDiv>
          <InfoDiv>
            <Text headingLevel={"h1"}>{text2}</Text>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space evenly",
                gap: "1rem",
              }}
            >
              <Text headingLevel={"h1"} style={{ color: "#fff", fontSize: "12px" }}>{txt2}</Text>-
              <Text headingLevel={"h1"} style={{ color: "#fff", fontSize: "12px" }}>{txt3}</Text>
            </div>
          </InfoDiv>
          <InfoDiv>
            <Text headingLevel={"h1"}>{text3}</Text>
            <Text headingLevel={"h1"} style={{ color: "#fff", fontSize: "12px" }}>{txt4}</Text>
          </InfoDiv>
          <InfoDiv>
            <Text headingLevel={"h1"}>{text4}</Text>
            <Text headingLevel={"h1"} style={{ color: "#fff", fontSize: "12px" }}>{txt5}</Text>
          </InfoDiv>
          <InfoDiv>
            <Text headingLevel={"h1"}>{text5}</Text>
            <Text headingLevel={"h1"} style={{ color: "#fff", fontSize: "12px" }}>{txt7}</Text>
          </InfoDiv>
          <InfoDiv>
            <Text headingLevel={"h1"}>{text6}</Text>
            <Text headingLevel={"h1"} style={{ color: "#fff", fontSize: "12px" }}>{txt6}</Text>
          </InfoDiv>
        </InfoContainer>
      </InfoDiv>
    </InfoMainContainer>
  );
};

export default Info;
