import DailyCard from "./Components/DailyCard";
import HumidityCard from "./Components/HumidityCard";
import WindCard from "./Components/WindCard";
import ExtraCard from "./Components/ExtraCard";
import styled from "styled-components";
import PrincipalCard from "./Components/PrincipalCard";
import { useState, useEffect } from "react";
import { weather } from "./Utils/Weather";
import data from "./Utils/hola.json";
import Modal from "./Components/Modal";
import React from "react";
function App() {
  const [globalData, setGlobalData] = useState(data);
  const [state, setState] = useState();
  const [city, setCity] = useState("London");
  const [cf, setcf] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const toCF = function(value) {
    return cf
      ? Number(parseFloat(parseFloat(value) - 273.15).toFixed(0))
      : Number(
          parseFloat(((parseFloat(value) - 273.15) * 9) / 5 + 32).toFixed(0)
        );
  };

  const GetData = function(data) {
    let temp = data.list.filter((dat, index) => {
      if (index === 0) {
        let val = data.list[0].dt_txt.match(/[0-9][0-9](?=:\d\d:)/gm)[0];
        if (val > 12) {
          return true;
        }
      }
      return /12:00:00/.test(dat.dt_txt);
    });
    console.log(temp);
    let temp1 = temp.map((elemt, index) => {
      if (index === 0) {
        let arry = {
          speed: elemt.wind.speed,
          deg: elemt.wind.deg,
          humidity: elemt.main.humidity,
          pressure: elemt.main.pressure,
          desc: elemt.weather[0].description,
          icon: elemt.weather[0].icon,
          temp: toCF(elemt.main.temp),
          visibility: elemt.visibility / 1000,
        };
        return arry;
      }
      var today = new window.Date(elemt.dt_txt);

      var options = { weekday: "short", month: "short", day: "numeric" };

      var date = today.toLocaleDateString("en-US", options);
      let arry = {
        desc: elemt.weather[0].description,
        icon: elemt.weather[0].icon,
        tempMax: toCF(elemt.main.temp_max),
        tempMin: toCF(elemt.main.temp_min),
        date: date,
      };
      return arry;
    });
    return temp1;
  };

  const set = (data) => {
    setGlobalData(data);
    setState(GetData(data));
  };

  const setCityTemp = (data) => {
    setCity(data);
  };
  useEffect(() => {
    if (state !== undefined) {
      if (state.name !== city) {
        weather(city, set);

        console.log(1);
      }
      console.log(4);
    } else {
      setState(GetData(data));
    }
  }, [city]);

  useEffect(() => {
   
      setState(GetData(globalData));

  }, [cf]);
  const open = function() {
    setOpenModal(true);
  };
  const close = function() {
    setOpenModal(false);
  };
  return state === undefined || state === [] ? (
    <></>
  ) : (
    <Layout>
      <ContainerLeft>
        <PrincipalCard
          title={state[0].desc}
          img={`http://openweathermap.org/img/wn/${state[0].icon}@2x.png`}
          temperature1={state[0].temp}
          unity={cf ? "°C" : "°F"}
          city={city}
          openModal={open}
        />
        <Modal
          setCity={setCityTemp}
          open={openModal}
          close={close}
          visible={openModal}
        />
      </ContainerLeft>

      <ContainerRight>
        <ContainerRightTop>
          <Button
            name="unit"
            type="radio"
            value="f"
            id="c"
            onChange={() => setcf(true)}
          />

          <Label htmlFor="c">℃</Label>
          <Button
            name="unit"
            type="radio"
            value="c"
            id="f"
            onChange={() => setcf(false)}
          />

          <Label htmlFor="f">℉</Label>
        </ContainerRightTop>
        <ContainerRightMid>
          {state.map((data, index) =>
            index === 0 ? (
              <p key={"dc" + index}></p>
            ) : (
              <DailyCard
                key={"dc" + index}
                title={data.date}
                img={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
                temperature1={data.tempMax}
                temperature2={data.tempMax}
                cf={cf}
              />
            )
          )}
        </ContainerRightMid>
        <h2>Today’s Hightlights</h2>
        <ContainerRightBottom>
          <WindCard
            title="Wind status"
            velocity={state[0].speed}
            direction={state[0].deg}
          />
          <HumidityCard title="Humidity" humidity={state[0].humidity} />
          <ExtraCard
            title="Visibility"
            count={state[0].visibility}
            unit="miles"
          />
          <ExtraCard title="Air Pressure" count={state[0].pressure} unit="mb" />
        </ContainerRightBottom>
      </ContainerRight>
    </Layout>
  );
}

export default App;
const Layout = styled.div`
  display: grid;
  display: grid;
  grid-template-columns: 33% 67%;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;
const ContainerLeft = styled.div`
  display: block;
  background: #1e213a;
`;
const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  background: #100e1d;
  padding: 20px;
`;
const ContainerRightTop = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 20px;
  flex-wrap: wrap;
`;
const ContainerRightMid = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;
const ContainerRightBottom = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Button = styled.input`
  display: none;
  &:checked + label {
    color: #110e3c;
    background: #e7e7eb;
  }
`;
const Label = styled.label`
  position: relative;

  width: 29.49px;
  height: 29.49px;
  font-size: 18px;
  font-weight: 700;
  background: #585676;
  border-radius: 50%;
  border: 0px solid aqua;
  color: #e7e7eb;
  display: block;
  text-align: center;
  line-height: 180%;
`;
