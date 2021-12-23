/* eslint-disable no-unused-vars */
import React, { useContext, useRef, useState } from "react";
import { Hooks } from "providers";
import { Link, useLocation } from "react-router-dom";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
import styled from "styled-components";
import Connect from "components/Transactions";
import Discord from "assets/img/icons8-discord.svg";
import Twitter from "assets/img/icons8-twitter.svg";
import LogoNavbar from "assets/img/logo.png";
function Navbar() {
  const { pathname } = useLocation();
  const { setScroll, scroll, barMobile, setBarMobile, wallet_, setWallet_ } =
    useContext(Hooks);
  const ConnectButton = styled(WalletDialogButton);
  const myRefname = useRef(null);
  const handleClick = () => {
    myRefname.current.focus();
  };
  return (
    <>
      <div
        // className={`navbar active`}
        className={`navbar px-3 sticky-top d-md-flex d-none flex-row  justify-content-between mx-auto ${
          scroll && "active"
        }`}
        style={{ zIndex: "999999" }}
      >
        <div className="navbar-icon w-100 h-100 d-flex justify-content-center align-items-center">
          <img
            src={LogoNavbar}
            alt=""
            style={{
              maxWidth: "220px",
              maxHeight: "auto",
            }}
          />
        </div>
        <div
          style={{
            opacity: 1,
          }}
        >
          <ul className="">
            {/*
            <li>
              <a href="#banner">ABOUT</a>
            </li>
            <li>
              <a href="#project">SOCIAL</a>
            </li>
            <li>
              <a href="#roadmap">LINK</a>
            </li>
            <li>
              <a href="#roadmap">ROADMAP</a>
            </li>
            <li>
              <a href="#roadmap">FAQS</a>
            </li>
            <li>
              <a href="#roadmap">TRAITS</a>
            </li> */}
          </ul>
        </div>
        {/* <div className="btn-join-discord d-flex justify-content-center align-items-center">
          JOIN THE DISCORD
        </div> */}
      </div>
    </>
  );
}

export default Navbar;
