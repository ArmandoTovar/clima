import React from "react";
import styled from "styled-components";
const orientation = [
  "N",
  "NNE",
  "NE",
  "ENE",
  "E",
  "ESE",
  "SE",
  "SSE",
  "S",
  "SSW",
  "SW",
  "WSW",
  "W",
  "WNW",
  "NW",
  "NNW",
];
export default function DailyCard({ title, velocity, direction }) {
  return (
    <Div>
      <Title>{title}</Title>

      <Velocity>
        {velocity} <Unity>mph</Unity>
      </Velocity>
      <Direction>
        <Rotation rotate={`${direction}deg`} />
        <T1>
          {
            orientation[
              Math.round((16 * parseInt(direction)) / 360, 0) + (16 % 16)
            ]
          }
        </T1>
      </Direction>
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
  font-weight: 500;
  margin-left: -10px;
  display: inline-block;
`;
const Rotation = styled.div`
  position: relative;
  width: 29.49px;
  height: 29.49px;
  background: rgba(255, 255, 255, 0.3);
  transform: rotate(${(props) => props.rotate});
  border-radius: 50%;
  border: 0px solid aqua;
  &::before {
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 6px 15px 6px;
    border-color: transparent transparent #ffffff transparent;
    position: absolute;
    left: 9px;
    top: 6px;
  }
`;

const Direction = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  gap: 10px;
  margin: 18px 0px;
`;
const T1 = styled.h5`
  display: block;
  font-weight: 500;
  font-size: 14px;
  margin: 0;
  align-self: center;
`;
