import styled from "styled-components";
import mainmodel from "./img/model.png";

function Main() {
  return (
    <MainPage className="Main">
      <div className="circle"></div>
      <img src={mainmodel} />
      <h1 className="t1">Live for the</h1>
      <h1 className="t2">MUSIC</h1>
    </MainPage>
  );
}

export default Main;

const MainPage = styled.div`
  height: 77vh;
  h1 {
    position: absolute;
  }
  .t1 {
    font-weight: 600;
    font-size: 75px;
    top: 40%;
    left: 15%;
    color: #555353;
    animation: leftIn 5s ease-in 0s;
  }
  .t2 {
    font-weight: 600;
    font-size: 100px;
    top: 55%;
    right: 24%;
    text-transform: uppercase;
    background: linear-gradient(
      270deg,
      rgba(116, 123, 219, 0.84) 13.33%,
      rgba(212, 126, 200, 0.87) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: rightIn 5s ease-in 0s;
  }
  .circle {
    border-radius: 50%;
    margin: 30px auto;
    background: linear-gradient(
      180deg,
      rgba(62, 79, 232, 0.63) 0%,
      rgba(236, 50, 162, 0.6) 100%
    );
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 160px;
    width: 160px;
    animation: circle-animation 5s ease-in 0s;
  }
  img {
    height: 90%;
    top: 10%;
    left: 50%;
    position: relative;
    transform: translateX(-50%);
    animation: fadeIn 5s ease-in 0s;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes leftIn {
    0% {
      left: 0%;
    }
    50% {
      left: 20%;
    }
    100% {
      left: 15%;
    }
  }
  @keyframes rightIn {
    0% {
      right: 0%;
    }
    50% {
      right: 26%;
    }
    100% {
      right: 24%;
    }
  }
  @keyframes circle-animation {
    0% {
      height: 40px;
      width: 40px;
    }
    50% {
      height: 80px;
      width: 80px;
    }
    100% {
      height: 160px;
      width: 160px;
    }
  }
`;
