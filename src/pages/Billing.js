import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import NavbarBilling from "../components/NavbarBilling";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./Billing.module.css";

const Billing = () => {
  const [isNavbarBillingOpen, setNavbarBillingOpen] = useState(false);

  const openNavbarBilling = useCallback(() => {
    setNavbarBillingOpen(true);
  }, []);

  const closeNavbarBilling = useCallback(() => {
    setNavbarBillingOpen(false);
  }, []);

  return (
    <>
      <div className={styles.billing}>
        <div className={styles.headerheaderParent}>
          <div className={styles.headerheader}>
            <div className={styles.divheaderWrapper}>
              <div className={styles.divheaderAction}>
                <button
                  className={styles.divheaderActionItem}
                  onClick={openNavbarBilling}
                >
                  <img className={styles.divIcon} alt="" src="/div2.svg" />
                </button>
                <img
                  className={styles.divheaderActionItemIcon}
                  alt=""
                  src="/divheaderactionitem2.svg"
                />
              </div>
            </div>
            <div className={styles.divheaderAction1}>
              <div className={styles.div} />
              <div className={styles.div}>
                <div className={styles.spanbadgeWrapper}>
                  <img className={styles.svgIcon} alt="" src="/svg.svg" />
                  <div className={styles.spanbadgeDot} />
                </div>
              </div>
              <img className={styles.divIcon1} alt="" src="/div1.svg" />
              <div className={styles.divheaderActionItem2}>
                <img
                  className={styles.spanavatarIcon}
                  alt=""
                  src="/spanavatar3.svg"
                />
                <div className={styles.divhidden}>
                  <div className={styles.divtextXs}>
                    <div className={styles.admin}>Admin</div>
                  </div>
                  <div className={styles.divfontBold}>
                    <b className={styles.abdurrahman}>Abdurrahman</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <b className={styles.thisFeatureIn}>
            This feature in under research and development
          </b>
          <Link className={styles.imageVector} to="/billing-invoice">
            <img className={styles.vectorIcon} alt="" src="/vector8.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector9.svg" />
            <img className={styles.vectorIcon2} alt="" src="/vector10.svg" />
            <img className={styles.vectorIcon3} alt="" src="/vector11.svg" />
            <img className={styles.vectorIcon4} alt="" src="/vector12.svg" />
            <img className={styles.vectorIcon5} alt="" src="/vector13.svg" />
            <img className={styles.vectorIcon6} alt="" src="/vector14.svg" />
            <img className={styles.vectorIcon7} alt="" src="/vector15.svg" />
            <img className={styles.vectorIcon8} alt="" src="/vector16.svg" />
            <img className={styles.vectorIcon9} alt="" src="/vector17.svg" />
            <img className={styles.vectorIcon10} alt="" src="/vector18.svg" />
            <img className={styles.vectorIcon11} alt="" src="/vector19.svg" />
            <img className={styles.vectorIcon12} alt="" src="/vector20.svg" />
            <img className={styles.vectorIcon13} alt="" src="/vector21.svg" />
            <img className={styles.vectorIcon14} alt="" src="/vector22.svg" />
            <img className={styles.vectorIcon15} alt="" src="/vector23.svg" />
            <img className={styles.vectorIcon16} alt="" src="/vector24.svg" />
            <img className={styles.vectorIcon17} alt="" src="/vector25.svg" />
            <img className={styles.vectorIcon18} alt="" src="/vector26.svg" />
            <img className={styles.vectorIcon19} alt="" src="/vector27.svg" />
            <img className={styles.vectorIcon20} alt="" src="/vector28.svg" />
            <img className={styles.vectorIcon21} alt="" src="/vector29.svg" />
            <img className={styles.vectorIcon22} alt="" src="/vector30.svg" />
            <img className={styles.vectorIcon23} alt="" src="/vector31.svg" />
            <img className={styles.vectorIcon24} alt="" src="/vector32.svg" />
            <img className={styles.vectorIcon25} alt="" src="/vector33.svg" />
            <img className={styles.vectorIcon26} alt="" src="/vector34.svg" />
            <img className={styles.vectorIcon27} alt="" src="/vector35.svg" />
            <img className={styles.vectorIcon28} alt="" src="/vector36.svg" />
            <img className={styles.vectorIcon29} alt="" src="/vector37.svg" />
            <img className={styles.vectorIcon30} alt="" src="/vector38.svg" />
            <img className={styles.vectorIcon31} alt="" src="/vector39.svg" />
            <img className={styles.vectorIcon32} alt="" src="/vector40.svg" />
            <img className={styles.vectorIcon33} alt="" src="/vector41.svg" />
            <img className={styles.vectorIcon34} alt="" src="/vector42.svg" />
            <img className={styles.vectorIcon35} alt="" src="/vector43.svg" />
            <img className={styles.vectorIcon36} alt="" src="/vector44.svg" />
            <img className={styles.vectorIcon37} alt="" src="/vector45.svg" />
            <img className={styles.vectorIcon38} alt="" src="/vector46.svg" />
            <img className={styles.vectorIcon39} alt="" src="/vector47.svg" />
            <img className={styles.vectorIcon40} alt="" src="/vector48.svg" />
            <img className={styles.vectorIcon41} alt="" src="/vector49.svg" />
            <img className={styles.vectorIcon42} alt="" src="/vector50.svg" />
            <img className={styles.vectorIcon43} alt="" src="/vector51.svg" />
            <img className={styles.vectorIcon44} alt="" src="/vector52.svg" />
            <img className={styles.vectorIcon45} alt="" src="/vector53.svg" />
            <img className={styles.vectorIcon46} alt="" src="/vector54.svg" />
            <img className={styles.vectorIcon47} alt="" src="/vector55.svg" />
            <img className={styles.vectorIcon48} alt="" src="/vector56.svg" />
            <img className={styles.vectorIcon49} alt="" src="/vector57.svg" />
            <img className={styles.vectorIcon50} alt="" src="/vector58.svg" />
          </Link>
          <div className={styles.getExclusiveEarlyAccessToParent}>
            <div className={styles.getExclusiveEarly}>
              Get exclusive early access to our upcoming features! Join the beta
              test now and share your feedback to shape the future of our
              product.
            </div>
            <a className={styles.requestAccess}>Request Access</a>
            <img
              className={styles.image7AdobeExpress1}
              alt=""
              src="/image-7-adobe-express-1.svg"
            />
          </div>
          <div className={styles.cantWait}>Can’t wait ?</div>
        </div>
      </div>
      {isNavbarBillingOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeNavbarBilling}
        >
          <NavbarBilling onClose={closeNavbarBilling} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Billing;
