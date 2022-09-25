import React from "react";
import styled from "styled-components";
export default function ExtraCard({ title, count, unit }) {
  return (
    <Div>
      <Title>{title}</Title>
      <Count>
        {count} <Unity>{unit}</Unity>
      </Count>
    </Div>
  );
}

const Div = styled.div`
  width: 328px;
  height: 159px;
  background: #1e213a;
  color: #e7e7eb;
  display: flex;
  flex-direction: column;

  align-items: center;
  margin: 0;
`;
const Title = styled.h4`
  font-weight: 500;
  margin-top: 18px;
`;

const Count = styled.h5`
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
