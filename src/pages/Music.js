import "./css/Music.css";
import styled, { css } from "styled-components";

function Music() {
  return (
    <section className="music-page">
      <ActivityList>
        <Activity>
          <svg
            width="93"
            height="81"
            viewBox="0 0 93 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5 80.5C0.877651 68.8476 -9.27157 18.88 30.0637 4.41488C69.3989 -10.0502 93 12.8529 93 46.6047C89.3889 65.1337 66.7166 76.096 3.5 80.5Z"
              fill="#5FC1F8"
            />
          </svg>
          <p>Jazz</p>
        </Activity>
        <Activity>
          <svg
            width="79"
            height="75"
            viewBox="0 0 79 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.558698 72.8702C-1.45262 64.5425 0.558712 12.0367 30.7285 1.69881C60.8983 -8.63909 79 30.599 79 54.7208C76.2303 67.9631 41.4175 80.017 0.558698 72.8702Z"
              fill="#DDE050"
            />
          </svg>
          <p>Pop</p>
        </Activity>
        <Activity>
          <svg
            width="100"
            height="75"
            viewBox="0 0 100 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 75C-9.72826 31.6047 -2.27161 18.88 37.0636 4.41488C76.3989 -10.0502 100 12.8529 100 46.6047C96.3889 65.1337 70.2717 75 12 75Z"
              fill="#F48839"
            />
          </svg>
          <p>Disco</p>
        </Activity>
        <Activity>
          <svg
            width="114"
            height="75"
            viewBox="0 0 114 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 74.5C1.87765 62.8476 -10.2715 18.88 29.0638 4.41488C68.399 -10.0502 113.772 22.8529 113.772 56.6047C110.16 75.1337 67.7166 70.096 4.5 74.5Z"
              fill="#F47676"
            />
          </svg>

          <p>Classic</p>
        </Activity>
      </ActivityList>
      <Main>
        <MainText>
          <h1>One Direction</h1>
          <Info>
            <Date>
              <h4>Date</h4>
              <h4>16 jan 2021</h4>
            </Date>
            <Addr>
              <h4>Adress</h4>
              <h4>Banglore, BLR.</h4>
            </Addr>
          </Info>
        </MainText>
        <MainImage className="band" />
      </Main>
    </section>
  );
}

export default Music;

const ActivityList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 40px;
  margin-right: 8%;
`;
const Activity = styled.div`
  p {
    position: absolute;
    font-size: 26px;
  }
  svg {
    transition: transform 3s;
    position: absolute;
  }

  svg:hover {
    transform: scale(2);
  }
`;
const Main = styled.div`
  margin-top: 150px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const MainText = styled.div`
  h1 {
    text-align: center;
    font-size: 46px;
  }
`;
const MainImage = styled.div`
  margin-left: 6%;
  width: 390px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const Date = styled.div``;
const Addr = styled.div``;
