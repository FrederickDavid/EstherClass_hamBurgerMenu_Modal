import React, { useState } from "react";
import styled from "@emotion/styled";
import HamBurgerMenu from "./hamBurgerMenu";

const Header = () => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };

  return (
    <Container>
      <Logo />
      <Navigation></Navigation>
      <BurgerMenu onClick={handleClick}>
      </BurgerMenu>
        <HamBurgerMenu state={state} />
    </Container>
  );
};

export default Header;

const BurgerMenu = styled.div`
  width: 50px;
  height: 50px;
  background-color: red;
  @media (min-width: 476px) {
    display: none;
  }
`;

const Navigation = styled.div`
  width: 400px;
  height: 50px;
  background-color: white;
  @media (max-width: 476px) {
    display: none;
  }
`;
const Logo = styled.div`
  width: 100px;
  height: 50px;
  background-color: white;
`;

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
