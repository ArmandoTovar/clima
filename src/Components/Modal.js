import React, { useState } from "react";
import styled from "styled-components";
export default function Modal({ setCity, open, close, visible }) {
  const [listCity, setlistCity] = useState(["London"]);
  const capitalize = function(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  };
  const [icity, setIcity] = useState();
  const handleSubmit = (e) => {
    let temp = capitalize(icity);
    e.preventDefault();
    setCity(temp);

    listCity.includes(temp)
      ? alert("existe")
      : setlistCity([...listCity, temp]);
  };

  return (
    <ContainerModal visible={visible}>
      <ButtonCloseModal
        onClick={() => {
          close();
        }}
      ></ButtonCloseModal>
      <form>
        <Input
          type="text"
          placeholder="🔎 search location"
         
          onChange={(e) => setIcity(e.target.value)}
        ></Input>
        <ButtonSearch onClick={(e) => handleSubmit(e)}>Search</ButtonSearch>
      </form>

      <ul style={{ listStyle: "none" }}>
        {listCity.map((item, index) => (
          <li key={"li" + index} style={{ marginTop: "30px" }}>
            <Button onClick={() => setCity(item)}>{item}</Button>
          </li>
        ))}
      </ul>
    </ContainerModal>
  );
}
const ContainerModal = styled.div`
  display: block;
  position: absolute;
  top: 0;
  width: 33%;
  background: #1e213a;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  animation: ${(props) => (props.visible ? "modal2" : "modal")} 1s ease-out
    forwards;

  @keyframes modal {
    from {
      left: 0;
    }
    to {
      left: -33%;
    }
  }
  @keyframes modal2 {
    from {
      left: -33%;
    }
    to {
      left: 0;
    }
  }
  @media (max-width: 700px) {
    width: 100%;
    position: fixed;
    z-index: 200;
    @keyframes modal {
      from {
        left: 0;
      }
      to {
        left: -100%;
      }
    }
    @keyframes modal2 {
      from {
        left: -100%;
      }
      to {
        left: 0;
      }
    }
  }
`;

const Input = styled.input`
  max-width: 268px;
  width: 60%;
  height: 48px;
  border: 1px solid #e7e7eb;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #616475;
  background: transparent;
  margin: 20px;
`;
const ButtonSearch = styled.button`
  width: 86px;
  height: 48px;
  background: #3c47e9;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #e7e7eb;
  border: none;
  margin: 20px;
`;
const Button = styled.button`
  max-width: 367px;
  width: 90%;
  height: 64px;
  border: 1px solid #616475;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #e7e7eb;
  background: transparent;
  text-align: left;
`;
const ButtonCloseModal = styled.div`
  width: 40px;
  height: 40px;
  background-color: transparent;
  position: absolute;
  border-radius: 6px;
  top: 10px;
  right: 10px;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 36px;
    height: 4px;
    background-color: white;
    border-radius: 2px;
    top: 16px;
    box-shadow: 0 0 2px 0 #ccc;
  }

  &:before {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
    left: 2px;
  }
  &:after {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    transform: rotate(-45deg);
    right: 2px;
  }
`;
