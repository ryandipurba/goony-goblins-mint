/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import Connect from "components/Transactions";
import { Hooks } from "providers";
import Hero from "assets/img/goblin.gif";
import AnotherHero from "assets/img/hero-line.svg";
import ReactPlayer from "react-player/youtube";
function Banner() {
  const {
    setScroll,
    scroll,
    barMobile,
    setBarMobile,
    wallet_,
    setWallet_,
    datas,
  } = useContext(Hooks);
  useEffect(() => {}, [datas, wallet_]);
  return (
    <>
      <div
        id="banner"
        className="home-banner mx-auto justify-content-center align-items-center d-flex"
      >
        <div className="home-banner-wrapping justify-content-center align-items-center w-100 ">
          <div className="col-12 d-md-flex d-block position-relative">
            {/* <img src={AnotherHero} alt="" className="imgx position-absolute" /> */}
            <div className="col-md-6 col-12 my-auto p-md-0 py-3">
              <div className="intro">welcome to</div>
              <div className="solana">Goony</div>
              <div className="piranhas">Goblins</div>
              <img
                src={Hero}
                style={{
                  borderRadius: "20px",
                }}
                alt=""
                className="img d-sm-none d-block"
              />
              {/* <div className="minting">MINTING NOW LIVE 🚀🚀</div> */}
              {!wallet_ && (
                <div className="first-mint">
                  {/* First time minting? Learn how to do it */}
                  &nbsp;&nbsp;Please Connect Wallet to Mint
                  {/* <a
                  className="here"
                  href="https://medium.com/@TheSolanaPiranhas/how-to-mint-a-solana-piranha-nft-c7159f1e1466"
                  rel="noreferrer"
                  target="_blank"
                >
                  HERE{" "}
                </a> */}
                </div>
              )}

              {wallet_ && (
                <>
                  <h2 className="text text-white d-sm-block d-flex mx-auto justify-content-sm-start justify-content-center">
                    {datas[0] + " / " + datas[1]}
                  </h2>
                </>
              )}
              <div
                className="d-flex mx-auto justify-content-sm-start justify-content-center"
                style={{
                  paddingLeft: "6px",
                }}
              >
                <Connect />
              </div>
            </div>
            <div className="col-md-6 col-12">
              <img
                src={Hero}
                style={{
                  borderRadius: "20px",
                }}
                alt=""
                className="img d-sm-block d-none"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
