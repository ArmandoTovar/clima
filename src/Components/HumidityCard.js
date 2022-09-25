import React from "react";
import styled from "styled-components";

export default function HumidityCard({ title, humidity }) {
  return (
    <Div>
      <Title>{title}</Title>

      <Velocity>
        {humidity} <Unity>%</Unity>
      </Velocity>
      <Span>
        <p>0</p>
        <p>50</p>
        <p>100</p>
      </Span>
      <Humidity
        type="range"
        readOnly
        value={humidity}
        id="vol"
        name="vol"
        min="0"
        max="100"
      />
    </Div>
  );
}

const Div = styled.div`
  width: 328px;
  height: 204px;
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

const Velocity = styled.h5`
  display: inline-block;
  margin: 0;
  font-weight: 700;
  font-size: 64px;
  line-height: 75px;
`;
const Unity = styled.span`
  font-size: 34px;
  font-weight: 300;
  margin-left: -10px;
  display: inline-block;
`;

const Span = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0;
  height: 8px;
  width: 229px;

  & > p {
    align-self: center;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
  }
`;
const Humidity = styled.input`
  width: 229px;
  height: 8px;
  background-color: #f1f1f1;
  border-radius: 50px;
  -webkit-appearance: none;
  overflow: hidden;
  margin-bottom: 40px;

  &::-webkit-slider-runnable-track {
    height: 10px;
    -webkit-appearance: none;
    color: #ffec65;
    margin-top: -1px;
  }
  &::-webkit-slider-thumb {
    width: 10px;
    -webkit-appearance: none;
    height: 10px;
    background: #ffec65;
    box-shadow: -110px 0 0 110px #ffec65;
  }
`;
