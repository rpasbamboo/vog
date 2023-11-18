import { useState, useCallback } from "react";
import NavbarAttribution from "../components/NavbarAttribution";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./Attribution.module.css";

const Attribution = () => {
  const [isNavbarAttributionOpen, setNavbarAttributionOpen] = useState(false);

  const openNavbarAttribution = useCallback(() => {
    setNavbarAttributionOpen(true);
  }, []);

  const closeNavbarAttribution = useCallback(() => {
    setNavbarAttributionOpen(false);
  }, []);

  return (
    <>
      <div className={styles.attribution}>
        <div className={styles.headerheaderParent}>
          <div className={styles.headerheader}>
            <div className={styles.divheaderWrapper}>
              <div className={styles.divheaderAction}>
                <button
                  className={styles.divheaderActionItem}
                  onClick={openNavbarAttribution}
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
          <img
            className={styles.imageVectorIcon}
            alt=""
            src="/image-vector.svg"
          />
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
      {isNavbarAttributionOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeNavbarAttribution}
        >
          <NavbarAttribution onClose={closeNavbarAttribution} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Attribution;
