import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section() {
  return (
    <Wrap>
      <Fade bottom>
        <ItemText>
          <h1>TravelPal: Making Traveling Easier</h1>
          {/* <p> Your backpacking starts here </p> */}
        </ItemText>
      </Fade>
      <Buttons>
        <ButtonGroup>
          <a href="http://konnectics.ca/travelpal">
            <LeftButton>CHECK ENTRY REQUIREMENT</LeftButton>
          </a>
          <a href="#">
            {" "}
            <RightButton>HOME</RightButton>{" "}
          </a>
        </ButtonGroup>
        <Fade bottom>
          <DownArrow src="/images/down-arrow.svg" />{" "}
        </Fade>
        {/* <DownArrowTop src="/images/down-arrow.svg" /> */}
      </Buttons>
    </Wrap>
  );
}

export default Section;
const Wrap = styled.div`
  width: 100vw; //full view width
  height: 100vh; //100 vertical height
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/images/banner-1.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 100px;
  @media (max-width: 768px) {
    flex-direction: column; // buttons flex
  }
`;

const LeftButton = styled.div`
  //   background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  font-weight: 900;
  margin: 8px;
  background: #fb8f1d;
  opacity: 0.65;
  color: black;
`;
const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  //   margin-top: 40px;
  height: 65px;

  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
  //   position: absolute;
  cursor: pointer;
  //   z-index: 1;
`;
// const DownArrowTop = styled(DownArrow)``;
// const DownArrowTop = styled.img`
// margin 40px;
// height: 40px;
// animation: animateDownTop infinite 1.5s;
// cursor: pointer;
// z-index: 2;

// `;

const Buttons = styled.div``;
