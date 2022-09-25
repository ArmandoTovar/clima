import React, { useEffect, useState } from "react";
import styled from "styled-components";
export default function Principal({
  title,
  img,
  temperature1,
  unity,
  city,
  openModal,
}) {
  const [date, setDate] = useState("00-00-000-");

  useEffect(() => {
    var today = new window.Date();

    var options = { weekday: "short", month: "short", day: "numeric" };

    var date = today.toLocaleDateString("en-US", options);
    setDate(date);
  }, []);

  return (
    <Div>
      <Search>
        <Button onClick={openModal}>Seach for places</Button>
        <ButtonIcon></ButtonIcon>
      </Search>

      <Image src={img} alt="icon" />
      <Count>
        {temperature1} <Unity>{unity}</Unity>
      </Count>
      <Title>{title}</Title>
      <Date>Today • {date} </Date>
      <Country>{city}</Country>
    </Div>
  );
}

const Div = styled.div`
  width: 100%;

  height: 100vh;
  background: #1e213a;
  color: #e7e7eb;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  gap: 10px;
  padding: 40px 0;
`;
const Title = styled.h4`
  font-weight: 600;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: #a09fb1;
`;
const Image = styled.img`
  width: 202px;
`;

const Count = styled.h5`
  display: inline-block;
  margin: 0;
  font-weight: 500;
  font-size: 144px;

  color: #e7e7eb;
`;
const Unity = styled.span`
  font-size: 34px;
  font-weight: 500;
  margin-left: -10px;
  display: inline-block;
`;

const Date = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;

  color: #88869d;
`;
const Country = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;

  color: #88869d;
  &:before {
    display: inline-block;
    content: "";

    position: relative;
    width: 20px;
    height: 20px;
    background-image: url("data:image/svg+xml,%3Csvg fill='%2388869D' viewBox='-1 -1 107.86 122.88' width='20' xmlns='http://www.w3.org/2000/svg' data-name='Layer 1' %3E%3Ctitle%3Egps%3C/title%3E%3Cg%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cpath id='svg_1' fill-rule='evenodd' d='m53.49,127.18998zm18.16,-28.95a70.47,70.47 0 0 1 -15.43,12.77a2.17,2.17 0 0 1 -2.48,0.08a87,87 0 0 1 -21.47,-19.15c-7.82,-9.81 -12.74,-20.69 -14.43,-31.19c-1.71,-10.6 -0.11,-20.82 5.16,-29.13a35.87,35.87 0 0 1 8,-8.87c7.47,-5.92 16,-9.06 24.47,-9a34.42,34.42 0 0 1 23.21,9.48a34.33,34.33 0 0 1 6.2,7.52c5.68,9.37 6.91,21.31 4.41,33.41a73.54,73.54 0 0 1 -17.64,34l0,0l0,0.08zm-17.8,-65.6a18.25,18.25 0 1 1 -18.25,18.25a18.24,18.24 0 0 1 18.25,-18.25z' class='cls-1' /%3E%3C/g%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
  }
`;
const Button = styled.button`
  display: block;
  width: 161px;
  height: 40px;
  background: #6e707a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  border: none;
  color: #e7e7eb;
  &:hover {
    background: #ccccc;
  }
`;
const ButtonIcon = styled.button`
  display: block;
  width: 29.49px;
  height: 29.49px;
  font-size: 18px;
  font-weight: 700;
  background: #585676;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("data:image/svg+xml,%3Csvg height='22px' version='1.1' viewBox='0 0 22 22' width='22px' xmlns='http://www.w3.org/2000/svg' %3E%3Ctitle /%3E%3Cdesc /%3E%3Cdefs /%3E%3Cg fill='%23E7E7EB' fill-rule='evenodd' id='Page-1' stroke='none' stroke-width='1' %3E%3Cg fill='%23E7E7EB' id='Icons-Device' transform='translate(-43.000000, -83.000000)' %3E%3Cg id='gps-fixed' transform='translate(43.000000, 83.000000)'%3E%3Cpath d='M11,7 C8.8,7 7,8.8 7,11 C7,13.2 8.8,15 11,15 C13.2,15 15,13.2 15,11 C15,8.8 13.2,7 11,7 L11,7 Z M19.9,10 C19.4,5.8 16.1,2.5 12,2.1 L12,0 L10,0 L10,2.1 C5.8,2.5 2.5,5.8 2.1,10 L0,10 L0,12 L2.1,12 C2.6,16.2 5.9,19.5 10,19.9 L10,22 L12,22 L12,19.9 C16.2,19.4 19.5,16.1 19.9,12 L22,12 L22,10 L19.9,10 L19.9,10 Z M11,18 C7.1,18 4,14.9 4,11 C4,7.1 7.1,4 11,4 C14.9,4 18,7.1 18,11 C18,14.9 14.9,18 11,18 L11,18 Z' id='Shape' /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  border-radius: 50%;
  border: 0px solid aqua;
  color: #e7e7eb;
`;

const Search = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;
