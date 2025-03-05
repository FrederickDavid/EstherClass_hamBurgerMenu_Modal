import React from "react";
import styled from "@emotion/styled";

const HamBurgerMenu = ({ state }) => {
  return (
    <SideMenu state={state}>
      <Navigations>
        <Navs>Home</Navs>
        <Navs>About</Navs>
        <Navs>Services</Navs>
        <Navs>Contact Us</Navs>
        <Navs>Login</Navs>
      </Navigations>
    </SideMenu>
  );
};

export default HamBurgerMenu;

const Navs = styled.div`
text-align: center;
margin-bottom: 40px;
`;
const Navigations = styled.div``;

const SideMenu = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #333;
  position: fixed;
  top: 0;
  transition: all 0.4s ease-in-out;
  left: ${({ state }) => (state ? "0" : "-100%")};
`;
