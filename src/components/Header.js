import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  return (
    <Container>
      <a>
        <img src="/images/logo2.png.png" alt="" />
      </a>

      <LoginMenu>
        <a href="#home">Home</a>
        <a href="http://konnectics.ca/travelpal">Fly</a>

        {/* //trying out the button system */}
        {/* <LoginButton href="#">LOGIN</LoginButton>
        <RegButton href="#">REGISTER</RegButton> */}
        {/* ends here */}
        <CustomMenu />
      </LoginMenu>
    </Container>
  );
}

export default Header;
const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  aligh-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 800;
    text-transform: uppercase;
    padding: 0 15px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const LoginMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 800;
    text-transform: uppercase;
    // padding: 0 10px;
    margin-right: 15px;
    flex-wrap: nowrap;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const LoginButton = styled.div`
  //   background-color: rgba(23, 26, 32, 0.8);
  height: 44px;
  width: 132px;
  top: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid blue;
  border-color: #2e90fa;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
  background: #ffffff;
  color: #209cee;
  //   position: absolute;
`;
const RegButton = styled(LoginButton)`
  background: #209cee;
  opacity: 0.85;
  color: #ffffff;
`;
