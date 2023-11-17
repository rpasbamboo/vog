import { useState, useCallback } from "react";
import "antd/dist/antd.min.css";
import { Switch, FormControlLabel, Radio } from "@mui/material";
import { Dropdown, Menu, Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import NavbarAnalytics from "../components/NavbarAnalytics";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./Analytics.module.css";

const Analytics = () => {
  const [isNavbarAnalyticsOpen, setNavbarAnalyticsOpen] = useState(false);

  const openNavbarAnalytics = useCallback(() => {
    setNavbarAnalyticsOpen(true);
  }, []);

  const closeNavbarAnalytics = useCallback(() => {
    setNavbarAnalyticsOpen(false);
  }, []);

  return (
    <>
      <div className={styles.analytics}>
        <div className={styles.headerheaderParent}>
          <div className={styles.headerheader}>
            <div className={styles.divheaderwrapper}>
              <div className={styles.divheaderaction}>
                <button
                  className={styles.divheaderactionitem}
                  onClick={openNavbarAnalytics}
                >
                  <img className={styles.divIcon} alt="" src="/div4.svg" />
                </button>
                <img
                  className={styles.divheaderactionitemIcon}
                  alt=""
                  src="/divheaderactionitem4.svg"
                />
              </div>
            </div>
            <button className={styles.divheaderaction1}>
              <button className={styles.divheaderactionitem2} />
              <div className={styles.div}>
                <div className={styles.spanbadgewrapper}>
                  <img className={styles.svg2Icon} alt="" src="/svg-2.svg" />
                  <div className={styles.spanbadgedot} />
                </div>
              </div>
              <img className={styles.div2Icon} alt="" src="/div-2.svg" />
              <div className={styles.divheaderactionitem3}>
                <img
                  className={styles.spanavatarIcon}
                  alt=""
                  src="/spanavatar6.svg"
                />
                <div className={styles.divhidden}>
                  <div className={styles.divtextxs}>
                    <div className={styles.admin}>Admin</div>
                  </div>
                  <div className={styles.divfontbold}>
                    <b className={styles.abdurrahman}>Abdurrahman</b>
                  </div>
                </div>
              </div>
            </button>
          </div>
          <div
            className={styles.campaign12032023}
          >{`Campaign : 12/03/2023 - 13/05/2023  `}</div>
          <h1 className={styles.analytics2}>Analytics</h1>
          <div className={styles.mapsicleMapParent}>
            <img
              className={styles.mapsicleMapIcon}
              alt=""
              src="/mapsicle-map@2x.png"
            />
            <div className={styles.impressionMap}>Impression map</div>
            <div className={styles.groupParent}>
              <FormControlLabel
                className={styles.groupChild}
                label="Campaign zone"
                control={<Switch color="error" />}
              />
              <FormControlLabel
                className={styles.groupItem}
                label="Heat map"
                control={<Radio color="error" checked />}
              />
              <FormControlLabel
                className={styles.groupInner}
                label="Route map"
                control={<Radio color="error" />}
              />
            </div>
            <img className={styles.vector6Icon} alt="" src="/vector-6.svg" />
          </div>
          <div className={styles.frame37704}>
            <div className={styles.impressionStates}>Impression states</div>
            <div className={styles.la9oa7d1}>
              <div className={styles.svgjsg10605}>
                <img
                  className={styles.svgjsline10610Icon}
                  alt=""
                  src="/svgjsline10610.svg"
                />
                <div className={styles.svgjsg10638}>
                  <div className={styles.svgjsg10639}>
                    <div className={styles.svgjstext10641}>01 Jan</div>
                    <div className={styles.svgjstext10644}>02 Jan</div>
                    <div className={styles.svgjstext10647}>03 Jan</div>
                    <div className={styles.svgjstext10650}>04 Jan</div>
                    <div className={styles.svgjstext10653}>05 Jan</div>
                    <div className={styles.svgjstext10656}>06 Jan</div>
                    <div className={styles.svgjstext10659}>07 Jan</div>
                    <div className={styles.svgjstext10662}>08 Jan</div>
                    <div className={styles.svgjstext10665}>09 Jan</div>
                    <div className={styles.svgjstext10668}>10 Jan</div>
                    <div className={styles.svgjstext10671}>11 Jan</div>
                    <div className={styles.svgjstext10674}>12 Jan</div>
                  </div>
                </div>
                <img
                  className={styles.svgjsg10626Icon}
                  alt=""
                  src="/svgjsg10626.svg"
                />
                <img
                  className={styles.svgjsg10613Icon}
                  alt=""
                  src="/svgjsg10613.svg"
                />
                <img
                  className={styles.svgjsg10629Icon}
                  alt=""
                  src="/svgjsg10629.svg"
                />
                <img
                  className={styles.svgjsline10697Icon}
                  alt=""
                  src="/svgjsline10697.svg"
                />
                <img
                  className={styles.svgjsline10698Icon}
                  alt=""
                  src="/iconstar.svg"
                />
              </div>
              <img
                className={styles.svgjsrect10609Icon}
                alt=""
                src="/iconstar.svg"
              />
              <div className={styles.svgjsg10677}>
                <div className={styles.svgjsg10639}>
                  <div className={styles.svgjstext10680}>100</div>
                  <div className={styles.svgjstext10683}>80</div>
                  <div className={styles.svgjstext10686}>60</div>
                  <div className={styles.svgjstext10689}>40</div>
                  <div className={styles.svgjstext10692}>20</div>
                  <div className={styles.svgjstext10695}>0</div>
                </div>
              </div>
              <div className={styles.janParent}>
                <div className={styles.jan}>05 Jan</div>
                <b className={styles.b}>105</b>
                <b className={styles.b1}>60</b>
                <b className={styles.b2}>45</b>
                <div className={styles.group289210}>
                  <div className={styles.totalImpressions}>
                    Total impressions
                  </div>
                  <div className={styles.radio3}>
                    <div className={styles.signedbybaseradioenabledselect} />
                    <img
                      className={styles.selected2Icon}
                      alt=""
                      src="/selected-2.svg"
                    />
                  </div>
                </div>
                <div className={styles.group289208}>
                  <div className={styles.peakImpressions}>Peak Impressions</div>
                  <div className={styles.radio4}>
                    <div className={styles.signedbybaseradioenabledselect} />
                    <img
                      className={styles.selected2Icon}
                      alt=""
                      src="/selected-3.svg"
                    />
                  </div>
                </div>
                <div className={styles.group289209}>
                  <div className={styles.offPeakImpressions}>
                    Off Peak Impressions
                  </div>
                  <div className={styles.radio5}>
                    <div className={styles.signedbybaseradioenabledselect} />
                    <img
                      className={styles.selected2Icon}
                      alt=""
                      src="/selected-4.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.la9oa7d1Child} />
            </div>
            <div className={styles.group289211}>
              <div className={styles.group2892082}>
                <div className={styles.peakImpressions}>Peak Impressions</div>
                <div className={styles.radio4}>
                  <div className={styles.signedbybaseradioenabledselect} />
                  <img
                    className={styles.selected2Icon}
                    alt=""
                    src="/selected-3.svg"
                  />
                </div>
              </div>
              <div className={styles.group2892102}>
                <div className={styles.totalImpressions}>Total impressions</div>
                <div className={styles.radio3}>
                  <div className={styles.signedbybaseradioenabledselect} />
                  <img
                    className={styles.selected2Icon}
                    alt=""
                    src="/selected-2.svg"
                  />
                </div>
              </div>
              <div className={styles.group2892092}>
                <div className={styles.offpeakimpressions}>
                  Off Peak Impressions
                </div>
                <div className={styles.radio5}>
                  <div className={styles.signedbybaseradioenabledselect} />
                  <img
                    className={styles.selected2Icon}
                    alt=""
                    src="/selected-4.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.menuItemParent}>
              <Dropdown
                className={styles.menuItem}
                overlay={
                  <Menu>
                    {[
                      { value: "1" },
                      { value: "2" },
                      { value: "3" },
                      { value: "4" },
                      { value: "5" },
                      { value: "6" },
                      { value: "7" },
                      { value: "8" },
                      { value: "9" },
                      { value: "10" },
                      { value: "11" },
                      { value: "12" },
                      { value: "13" },
                      { value: "14" },
                      { value: "15" },
                      { value: "16" },
                      { value: "17" },
                      { value: "18" },
                      { value: "19" },
                      { value: "20" },
                      { value: "21" },
                      { value: "22" },
                      { value: "23" },
                      { value: "24" },
                      { value: "25" },
                      { value: "26" },
                      { value: "27" },
                      { value: "28" },
                      { value: "29" },
                      { value: "30" },
                      { value: "31" },
                    ].map((option, index) => (
                      <Menu.Item key={index}>
                        <a onClick={(e) => e.preventDefault()}>
                          {option.value || ""}
                        </a>
                      </Menu.Item>
                    ))}
                  </Menu>
                }
                trigger={["hover"]}
              >
                <Button onClick={(e) => e.preventDefault()}>
                  {`Date `}
                  <RightOutlined />
                </Button>
              </Dropdown>
              <Dropdown
                className={styles.menuitem}
                overlay={
                  <Menu>
                    {[
                      { value: "1" },
                      { value: "2" },
                      { value: "3" },
                      { value: "4" },
                    ].map((option, index) => (
                      <Menu.Item key={index}>
                        <a onClick={(e) => e.preventDefault()}>
                          {option.value || ""}
                        </a>
                      </Menu.Item>
                    ))}
                  </Menu>
                }
                trigger={["hover"]}
              >
                <Button onClick={(e) => e.preventDefault()}>
                  {`week `}
                  <RightOutlined />
                </Button>
              </Dropdown>
              <Dropdown
                className={styles.menuItem2}
                overlay={
                  <Menu>
                    {[].map((option, index) => (
                      <Menu.Item key={index}>
                        <a onClick={(e) => e.preventDefault()}>
                          {option.value || ""}
                        </a>
                      </Menu.Item>
                    ))}
                  </Menu>
                }
                trigger={["hover"]}
              >
                <Button onClick={(e) => e.preventDefault()}>
                  {`Month `}
                  <RightOutlined />
                </Button>
              </Dropdown>
            </div>
          </div>
          <div className={styles.todayImpressionsParent}>
            <div className={styles.todayImpressions}>Today Impressions</div>
            <div className={styles.analytics3}>
              <div className={styles.cardnumbers}>
                <div className={styles.parent}>
                  <b className={styles.b3}>1508</b>
                  <div className={styles.totalChannels}>Total impressions</div>
                </div>
                <img
                  className={styles.cardnumbersChild}
                  alt=""
                  src="/group-3.svg"
                />
              </div>
              <div className={styles.cardnumbers}>
                <div className={styles.parent}>
                  <b className={styles.b3}>125</b>
                  <div className={styles.totalChannels}>Peak impressions</div>
                </div>
                <img
                  className={styles.cardnumbersChild}
                  alt=""
                  src="/group3.svg"
                />
              </div>
              <div className={styles.cardnumbers}>
                <div className={styles.parent}>
                  <b className={styles.b3}>789</b>
                  <div className={styles.totalChannels}>
                    off Peak impressions
                  </div>
                </div>
                <img
                  className={styles.cardnumbersChild}
                  alt=""
                  src="/group-3-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isNavbarAnalyticsOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeNavbarAnalytics}
        >
          <NavbarAnalytics onClose={closeNavbarAnalytics} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Analytics;
