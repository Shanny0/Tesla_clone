import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Home(props) {
  return (
    <>
      <Container>
        <Fade bottom>
          <Title>
            <h1 className="Title">{props.titolo}</h1>
            <p className="paratitle">{props.para}</p>
          </Title>
        </Fade>
        <Downcontainer>
          <ButtonZone>
            <Fade left>
             { <button className=" btnz leftbtn">{props.btnleft}</button>  }
            </Fade>
            <Fade right>
              <button className=" btnz rightbtn">Prenota Consegna</button>
            </Fade>
          </ButtonZone>
          <Paraandarrow>
            <p className="downpara">{props.paradown}</p>
           
          </Paraandarrow>
        </Downcontainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  
  font-family: "Roboto";
  width: 100vw;
  height: 110vh;

  background-image: url(https://tesla-cdn.thron.com/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/3296x1798/ms-homepage-desktop);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 70px 0px;
  align-items: center;
`;
const Title = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  color: #42454a;
  .Title {
    font-size: 3em;
    font-weight: normal;
  }
  .paratitle {
    text-decoration: underline;
  }
`;

const ButtonZone = styled.div`
  .btnz {
    padding: 10px 40px;
    border-radius: 20px;
    border: none;
    margin: 0 10px 30px 10px;
  }
  .leftbtn,
  .btnz {
    background-color: #393c41;
    color: white;
    text-transform: uppercase;
  }
  .rightbtn {
    background-color: #eae9e9;
    color: black;
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .btnz {
      margin-top: 10px;
      margin-bottom: 10px;
      width: 90vw;
    }
  }
`;

const Paraandarrow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .downpara {
    text-decoration: underline;
    color: #7d7e80;
  }

  .fas {
    color: black;
    position: relative;
    top: 30px;
  }
`;
const Downcontainer = styled.div`
  margin-top: 10px;
`;

export default Home;
