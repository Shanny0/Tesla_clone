import React from "react";
import styled from "styled-components";

export default function Nav() {
  return (
    <>
      <Container>
        <Logo>
          <img
            src="https://www.freepnglogos.com/uploads/tesla-logo-png-20.png"
            alt=""
          />
        </Logo>

        <Navlist>
          <ul className="linknav">
            <li>MODEL S</li>
            <li>MODEL 3</li>
            <li>MODEL X</li>
            <li>MODEL Y</li>
            <li>POWERWALL</li>
            <li>RICARICA</li>
          </ul>
        </Navlist>

        <Shop>
          <ul className="linknav">
            <li className=" hideMob shop">Shop</li>
            <li className=" hideMob AccountTesla">Account Tesla</li>
            <li>
              <i
                class="fas fa-bars"
                onClick={() => {
                  document.getElementsByClassName("hide")[0].style.display =
                    "block";
                }}
              ></i>
            </li>
          </ul>
        </Shop>

        <Sidebar className="hide">
          <i
            class="fas fa-times"
            onClick={() => {
              document.getElementsByClassName("hide")[0].style.display = "none";
            }}
          ></i>
          <li>MODEL S</li>
          <li>MODEL 3</li>
          <li>MODEL X</li>
          <li>MODEL Y</li>
          <li>POWERWALL</li>
          <li>RICARICA</li>
          <li>IN PIU</li>
          <li>ITALIA</li>
        </Sidebar>
      </Container>
    </>
  );
}

const Container = styled.div`
  z-index: 9999;
  width: 100%;
  padding: 5px 20px;

  display: Flex;
  justify-content: space-between;

  position: fixed;
  top: 0;
  width: 100%;
`;

const Logo = styled.div`
  cursor: pointer;
  .linknav {
    list-style-type: none;
    display: flex;
  }
  img {
    width: 100px;
  }
`;

const Navlist = styled.div`
  li {
    padding: 0 10px;
  }
  .linknav {
    list-style-type: none;
    display: flex;
  }

  @media only screen and (max-width: 900px) {
    .linknav {
      display: none;
    }
  }
`;

const Shop = styled.div`
  list-style-type: none;
  li {
    padding: 0 10px;
  }
  .linknav {
    list-style-type: none;
    display: flex;
  }

  @media only screen and (max-width: 900px) {
    .hideMob {
      display: none;
    }
  }
`;

const Sidebar = styled.div`
  display: none;

  list-style: none;
  background-color: white;
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 100vh;
  padding: 15px;

  .fas {
    display: flex;

    justify-content: flex-end;
    cursor: pointer;
  }

  li {
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid grey;
    font-size: 0.8em;
  }
`;
