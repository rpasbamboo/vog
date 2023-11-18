import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GettingStarted04.module.css";

const GettingStarted04 = () => {
  const navigate = useNavigate();

  const onIconlyClick = useCallback(() => {
    navigate("/setting");
  }, [navigate]);

  return (
    <div className={styles.gettingStarted04}>
      <img
        className={styles.iphoneXOrNewer}
        alt=""
        src="/iphone-x-or-newer.svg"
      />
      <button className={styles.iconly} onClick={onIconlyClick}>
        <img
          className={styles.iconlytwoTonearrowLeft2}
          alt=""
          src="/iconlytwotonearrow--left-22.svg"
        />
      </button>
      <div className={styles.gettingStarted04Inner}>
        <div className={styles.instanceParent}>
          <button className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.component47Parent}>
                <img
                  className={styles.component47Icon}
                  alt=""
                  src="/component-471.svg"
                />
                <div className={styles.personalInformation}>
                  personal information
                </div>
              </div>
              <img
                className={styles.arrowLeftIcon}
                alt=""
                src="/arrowleft1.svg"
              />
            </div>
            <div className={styles.approvedParent}>
              <div className={styles.approved}>approved</div>
              <div className={styles.frameChild} />
            </div>
          </button>
          <button className={styles.frameParent}>
            <div className={styles.frameDiv}>
              <div className={styles.component47Parent}>
                <img
                  className={styles.component47Icon}
                  alt=""
                  src="/component-471.svg"
                />
                <div className={styles.personalInformation}>
                  vehicle information
                </div>
              </div>
              <img
                className={styles.arrowLeftIcon}
                alt=""
                src="/arrowleft2.svg"
              />
            </div>
            <div className={styles.approvedParent}>
              <div className={styles.approved}>approved</div>
              <div className={styles.frameChild} />
            </div>
          </button>
          <button className={styles.frameParent}>
            <div className={styles.frameParent1}>
              <div className={styles.component47Parent}>
                <img
                  className={styles.component47Icon}
                  alt=""
                  src="/component-471.svg"
                />
                <div className={styles.personalInformation}>
                  address and routes
                </div>
              </div>
              <img
                className={styles.arrowLeftIcon}
                alt=""
                src="/arrowleft3.svg"
              />
            </div>
            <div className={styles.approvedParent}>
              <div className={styles.approved}>approved</div>
              <div className={styles.frameChild} />
            </div>
          </button>
          <button className={styles.frameParent}>
            <div className={styles.frameParent3}>
              <div className={styles.component47Parent}>
                <img
                  className={styles.component47Icon}
                  alt=""
                  src="/component-472.svg"
                />
                <div className={styles.personalInformation}>
                  driving license
                </div>
              </div>
              <img
                className={styles.arrowLeftIcon}
                alt=""
                src="/arrowleft4.svg"
              />
            </div>
            <div className={styles.approvedParent}>
              <div className={styles.approved}>approved</div>
              <div className={styles.frameChild} />
            </div>
          </button>
          <button className={styles.frameParent}>
            <div className={styles.frameParent5}>
              <div className={styles.component47Parent}>
                <img
                  className={styles.component47Icon}
                  alt=""
                  src="/component-472.svg"
                />
                <div className={styles.personalInformation}>
                  NIC Information
                </div>
              </div>
              <img
                className={styles.arrowLeftIcon}
                alt=""
                src="/arrowleft5.svg"
              />
            </div>
            <div className={styles.approvedParent}>
              <div className={styles.approved}>approved</div>
              <div className={styles.frameChild} />
            </div>
          </button>
          <button className={styles.frameParent}>
            <div className={styles.frameParent7}>
              <div className={styles.component47Parent}>
                <img
                  className={styles.component47Icon}
                  alt=""
                  src="/component-472.svg"
                />
                <div className={styles.personalInformation}>Vehicle image</div>
              </div>
              <img
                className={styles.arrowLeftIcon}
                alt=""
                src="/arrowleft6.svg"
              />
            </div>
            <div className={styles.approvedParent}>
              <div className={styles.approved}>approved</div>
              <div className={styles.frameChild} />
            </div>
          </button>
          <button className={styles.frameParent}>
            <div className={styles.frameParent9}>
              <div className={styles.component47Parent}>
                <img
                  className={styles.component47Icon}
                  alt=""
                  src="/component-472.svg"
                />
                <div className={styles.personalInformation}>
                  vehicle registration document
                </div>
              </div>
              <img
                className={styles.arrowLeftIcon}
                alt=""
                src="/arrowleft7.svg"
              />
            </div>
            <div className={styles.approvedParent}>
              <div className={styles.approved}>approved</div>
              <div className={styles.frameChild} />
            </div>
          </button>
          <button className={styles.frameParent}>
            <div className={styles.frameParent11}>
              <div className={styles.component47Parent}>
                <img
                  className={styles.component47Icon}
                  alt=""
                  src="/component-472.svg"
                />
                <div className={styles.personalInformation}>
                  vehicle insurance
                </div>
              </div>
              <img
                className={styles.arrowLeftIcon}
                alt=""
                src="/arrowleft8.svg"
              />
            </div>
            <div className={styles.approvedParent}>
              <div className={styles.approved}>approved</div>
              <div className={styles.frameChild} />
            </div>
          </button>
          <button className={styles.frameParent}>
            <div className={styles.frameParent13}>
              <div className={styles.component47Parent}>
                <img
                  className={styles.component47Icon}
                  alt=""
                  src="/component-473.svg"
                />
                <div className={styles.personalInformation}>
                  billing proof (optional)
                </div>
              </div>
              <img
                className={styles.arrowLeftIcon}
                alt=""
                src="/arrowleft9.svg"
              />
            </div>
            <div className={styles.approvedParent}>
              <div className={styles.approved}>approved</div>
              <div className={styles.frameChild} />
            </div>
          </button>
        </div>
      </div>
      <div className={styles.requiredStepsParent}>
        <b className={styles.requiredSteps}>required steps</b>
        <div className={styles.heresWhatYou}>
          Heres what you need to do to set up your account
        </div>
      </div>
      <div className={styles.homeindicator}>
        <div className={styles.homeindicator1}>
          <div className={styles.homeIndicator} />
        </div>
      </div>
    </div>
  );
};

export default GettingStarted04;
