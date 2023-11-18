import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NavbarBillingInvoice.module.css";

const NavbarBillingInvoice = ({ onClose }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onComponent1Click = useCallback(() => {
    navigate("/analytics");
  }, [navigate]);

  const onComponent11Click = useCallback(() => {
    navigate("/about-campaign");
  }, [navigate]);

  const onComponent12Click = useCallback(() => {
    navigate("/attribution");
  }, [navigate]);

  const onComponent13Click = useCallback(() => {
    navigate("/retargetting");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    navigate("/billing");
  }, [navigate]);

  const onComponent14Click = useCallback(() => {
    navigate("/setting");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/log-in1");
  }, [navigate]);

  return (
    <div className={styles.navbarBillingInvoice} data-animate-on-scroll>
      <div className={styles.divlogo}>
        <div className={styles.logo}>
          <img
            className={styles.asset84xIcon}
            alt=""
            src="/asset-84x2@2x.png"
          />
        </div>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.component1Wrapper}>
          <button className={styles.component1} onClick={onComponent1Click}>
            <img className={styles.growthIcon} alt="" src="/growth.svg" />
            <div className={styles.myGroup}>Analytics</div>
          </button>
        </div>
        <div className={styles.component1Wrapper}>
          <button className={styles.component1} onClick={onComponent11Click}>
            <img className={styles.growthIcon} alt="" src="/carprofile.svg" />
            <div className={styles.myGroup}>About campaign</div>
          </button>
        </div>
        <div className={styles.component1Wrapper}>
          <button className={styles.component1} onClick={onComponent12Click}>
            <img className={styles.growthIcon} alt="" src="/rocketlaunch.svg" />
            <div className={styles.myGroup}>Attribution</div>
          </button>
        </div>
        <div className={styles.component1Wrapper}>
          <button className={styles.component1} onClick={onComponent13Click}>
            <img
              className={styles.growthIcon}
              alt=""
              src="/arrowscounterclockwise.svg"
            />
            <div className={styles.myGroup}>Retargeting</div>
          </button>
        </div>
        <div className={styles.frameParent}>
          <button
            className={styles.dollarCoinParent}
            onClick={onFrameButtonClick}
          >
            <img className={styles.growthIcon} alt="" src="/dollar-coin.svg" />
            <div className={styles.analytics1}>Billing</div>
          </button>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.component1Wrapper}>
          <button className={styles.component1} onClick={onComponent14Click}>
            <img className={styles.growthIcon} alt="" src="/setting.svg" />
            <div className={styles.myGroup}>Settings</div>
          </button>
        </div>
      </div>
      <div className={styles.logoutParent} onClick={onGroupContainerClick}>
        <div className={styles.logout}>
          <div className={styles.theresaMillyParent}>
            <div className={styles.theresaMilly}>popeyes</div>
            <div className={styles.influencer}>Brand</div>
          </div>
          <button className={styles.logoutGroup}>
            <img className={styles.growthIcon} alt="" src="/logout.svg" />
            <div className={styles.logout1}>Logout</div>
          </button>
        </div>
        <img className={styles.groupChild} alt="" src="/ellipse-11@2x.png" />
      </div>
    </div>
  );
};

export default NavbarBillingInvoice;
