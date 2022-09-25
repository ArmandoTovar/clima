import React from "react";
import styled from "styled-components";
export default function DailyCard({
  title,
  img,
  temperature1,
  temperature2,
  cf,
}) {
  return (
    <Div>
      <Title>{title}</Title>
      <Image src={img} alt="icon" />
      <Temp>
        <T1>
          {temperature1} {cf ? "°C" : "°F"}
        </T1>
        <T2>
          {temperature2} {cf ? "°C" : "°F"}
        </T2>
      </Temp>
    </Div>
  );
}

const Div = styled.div`
  width: 120px;
  height: 177px;
  background: #1e213a;
  color: #e7e7eb;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`;
const Title = styled.h4`
  font-weight: 500;
  margin-top: 18px;
`;
const Image = styled.img`
  width: 56.44px;
`;

const Temp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  margin: 18px 0px;
`;
const T1 = styled.h5`
  display: block;
  font-weight: 500;
  font-size: 16px;
  margin: 0;
`;
const T2 = styled.h5`
  color: #a09fb1;
  display: block;
  font-weight: 500;
  font-size: 16px;
  margin: 0;
`;
