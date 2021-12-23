import { useContext, useEffect } from "react";
import { Hooks } from "providers";
import Connect from "components/Transactions";
import NavbarMob from "assets/img/logo.png";
//tesdfs
function NavbarMobile() {
  const { barMobile, setBarMobile, wallet_ } = useContext(Hooks);
  useEffect(() => {}, [barMobile]);
  return (
    <>
      <div className="navbar-mobile sticky-top">
        <nav role="navigation" className="w-100 position-relative">
          <div className="col-auto w-100 d-flex mx-sm-auto m-0">
            <img
              src={NavbarMob}
              alt=""
              className="pl-3 navmob"
              style={{
                maxWidth: "220px",
                maxHeight: "auto",
              }}
            />
          </div>
          <div id="menuToggle" onClick={() => setBarMobile(!barMobile)}>
            <input type="checkbox" value={barMobile} checked={barMobile} />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu"></ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavbarMobile;
