import { useState, useCallback } from "react";
import NavbarAboutCampaings from "../components/NavbarAboutCampaings";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./AboutCampaign.module.css";

const AboutCampaign = () => {
  const [isNavbarAboutCampaingsOpen, setNavbarAboutCampaingsOpen] =
    useState(false);

  const openNavbarAboutCampaings = useCallback(() => {
    setNavbarAboutCampaingsOpen(true);
  }, []);

  const closeNavbarAboutCampaings = useCallback(() => {
    setNavbarAboutCampaingsOpen(false);
  }, []);

  return (
    <>
      <div className={styles.aboutCampaign}>
        <div className={styles.headerheaderParent}>
          <div className={styles.headerheader}>
            <div className={styles.divheaderwrapper}>
              <div className={styles.divheaderaction}>
                <button
                  className={styles.divheaderactionitem}
                  onClick={openNavbarAboutCampaings}
                >
                  <img className={styles.divIcon} alt="" src="/div2.svg" />
                </button>
                <img
                  className={styles.divheaderactionitemIcon}
                  alt=""
                  src="/divheaderactionitem2.svg"
                />
              </div>
            </div>
            <div className={styles.divheaderaction1}>
              <div className={styles.div} />
              <div className={styles.div}>
                <div className={styles.spanbadgewrapper}>
                  <img className={styles.svg2Icon} alt="" src="/svg.svg" />
                  <div className={styles.spanbadgedot} />
                </div>
              </div>
              <img className={styles.div2Icon} alt="" src="/div1.svg" />
              <div className={styles.divheaderactionitem3}>
                <div className={styles.spanavatar}>
                  <img
                    className={styles.imgavatarimgIcon}
                    alt=""
                    src="/imgavatarimg5@2x.png"
                  />
                </div>
                <div className={styles.divhidden}>
                  <div className={styles.divtextxs}>
                    <div className={styles.admin}>Admin</div>
                  </div>
                  <div className={styles.divfontbold}>
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
        </div>
      </div>
      {isNavbarAboutCampaingsOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeNavbarAboutCampaings}
        >
          <NavbarAboutCampaings onClose={closeNavbarAboutCampaings} />
        </PortalDrawer>
      )}
    </>
  );
};

export default AboutCampaign;
