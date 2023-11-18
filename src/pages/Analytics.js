import { useState, useCallback } from "react";
import "antd/dist/antd.min.css";
import { Switch, FormControlLabel, Radio } from "@mui/material";
import { Dropdown, Menu, Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import NavbarAnalytics from "../components/NavbarAnalytics";
import PortalDrawer from "../components/PortalDrawer";

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
      <div className="relative bg-white w-full h-[79.96rem] overflow-hidden text-left text-[0.89rem] text-darkslategray-100 font-body-large-semibold">
        <div className="absolute top-[0rem] left-[0rem] bg-white w-[53.13rem] h-[79.96rem] overflow-hidden">
          <div className="absolute top-[0rem] left-[calc(50%_-_424.3px)] bg-white box-border w-[53.04rem] h-[2.85rem] border-b-[0.5px] border-solid border-gainsboro-200">
            <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[43.35rem] h-[2.9rem]">
              <div className="absolute top-[0.56rem] left-[0.71rem] bg-gray-400 w-[4.28rem] h-[1.78rem]">
                <button
                  className="cursor-pointer [border:none] p-0 bg-gray-400 absolute top-[0rem] left-[0.18rem] rounded-[7130.16px] w-[1.78rem] h-[1.78rem]"
                  onClick={openNavbarAnalytics}
                >
                  <img
                    className="absolute top-[0.36rem] left-[0.36rem] w-[1.07rem] h-[1.07rem]"
                    alt=""
                    src="/div4.svg"
                  />
                </button>
                <img
                  className="absolute top-[0rem] left-[2.32rem] rounded-[7130.16px] w-[1.78rem] h-[1.78rem] hidden"
                  alt=""
                  src="/divheaderactionitem4.svg"
                />
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-[0rem] px-[0.18rem] bg-gray-400 absolute top-[calc(50%_-_18.5px)] right-[1.8rem] flex flex-row items-center justify-start gap-[0.36rem]">
              <button className="cursor-pointer [border:none] p-0 bg-gray-400 relative rounded-[7130.16px] w-[1.78rem] h-[1.78rem]" />
              <div className="relative rounded-[7130.16px] bg-gray-400 w-[1.78rem] h-[1.78rem]">
                <div className="absolute top-[0.36rem] left-[0.36rem] bg-gray-400 w-[1.07rem] h-[1.07rem]">
                  <img
                    className="absolute top-[0rem] left-[0rem] w-[1.07rem] h-[1.07rem] overflow-hidden"
                    alt=""
                    src="/svg-2.svg"
                  />
                  <div className="absolute top-[-0.04rem] left-[0.63rem] rounded-[7130.16px] bg-crimson-200 w-[0.36rem] h-[0.36rem]" />
                </div>
              </div>
              <img
                className="relative rounded-[7130.16px] w-[1.78rem] h-[1.78rem]"
                alt=""
                src="/div-2.svg"
              />
              <div className="relative rounded-[7130.16px] bg-gray-400 w-[6.71rem] h-[2.36rem]">
                <img
                  className="absolute top-[0.44rem] left-[0.36rem] rounded-[7130.16px] w-[1.47rem] h-[1.47rem]"
                  alt=""
                  src="/spanavatar6.svg"
                />
                <div className="absolute top-[0.36rem] left-[2.14rem] bg-gray-400 w-[4.22rem] h-[1.65rem]">
                  <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[4.22rem] h-[0.71rem]">
                    <div className="absolute top-[0.03rem] left-[0rem] text-[0.54rem] leading-[0.71rem] capitalize font-inter text-slategray text-left flex items-center w-[1.6rem] h-[0.63rem]">
                      Admin
                    </div>
                  </div>
                  <div className="absolute top-[0.71rem] left-[0rem] bg-gray-400 w-[4.22rem] h-[0.94rem]">
                    <b className="absolute top-[0.09rem] left-[0rem] text-[0.62rem] leading-[0.94rem] flex font-inter text-slategray text-left items-center w-[4.22rem] h-[0.74rem]">
                      Abdurrahman
                    </b>
                  </div>
                </div>
              </div>
            </button>
          </div>
          <div className="absolute top-[calc(50%_-_556.25px)] left-[calc(50%_+_93.4px)] leading-[0.94rem] font-medium text-darkslategray-400">{`Campaign : 12/03/2023 - 13/05/2023  `}</div>
          <h1 className="m-0 absolute top-[5.08rem] left-[2.68rem] text-[1.07rem] leading-[0.94rem] font-bold font-inherit text-darkslategray-400 flex items-center w-[6.82rem] h-[0.76rem]">
            Analytics
          </h1>
          <div className="absolute top-[20.19rem] left-[calc(50%_-_377.2px)] rounded-[11.41px] bg-white box-border w-[47.2rem] h-[23.58rem] overflow-hidden border-[2.1px] border-solid border-whitesmoke-400">
            <img
              className="absolute top-[3.83rem] left-[2.76rem] rounded-[11.41px] w-[41.41rem] h-[18.23rem] object-cover"
              alt=""
              src="/mapsicle-map@2x.png"
            />
            <div className="absolute top-[1.43rem] left-[1.96rem] leading-[0.94rem] font-semibold">
              Impression map
            </div>
            <div className="absolute top-[0.84rem] left-[21.04rem] w-[21.76rem] h-[2.14rem]">
              <FormControlLabel
                className="absolute top-[0.58rem] left-[0rem]"
                label="Campaign zone"
                control={<Switch color="error" />}
              />
              <FormControlLabel
                className="absolute top-[0rem] left-[9.05rem]"
                label="Heat map"
                control={<Radio color="error" checked />}
              />
              <FormControlLabel
                className="absolute top-[0rem] left-[15.69rem]"
                label="Route map"
                control={<Radio color="error" />}
              />
            </div>
            <img
              className="absolute h-[61.61%] w-[26.72%] top-[24.13%] right-[50.09%] bottom-[14.26%] left-[23.19%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector-6.svg"
            />
          </div>
          <div className="absolute top-[46.31rem] left-[calc(50%_-_375.1px)] rounded-[11.41px] bg-white box-border w-[46.93rem] h-[25rem] overflow-hidden border-[2.1px] border-solid border-whitesmoke-400">
            <div className="absolute top-[1.47rem] left-[1.96rem] leading-[0.94rem] font-semibold">
              Impression states
            </div>
            <div className="absolute top-[3.34rem] left-[2.59rem] w-[41.76rem] h-[18.45rem] overflow-hidden text-center text-[0.54rem] text-darkslategray-500 font-helvetica">
              <div className="absolute h-[111.79%] w-[165.4%] top-[-23.34%] right-[1.48%] bottom-[11.55%] left-[-66.88%]">
                <img
                  className="absolute h-[62.12%] top-[8.94%] bottom-[28.94%] left-[-40.44%] max-h-full w-[0rem]"
                  alt=""
                  src="/svgjsline10610.svg"
                />
                <div className="absolute h-[4.18%] w-[57.08%] top-[95.82%] right-[0%] bottom-[0%] left-[42.92%]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                    <div className="absolute h-full w-[5.77%] top-[0%] left-[0%] inline-block">
                      01 Jan
                    </div>
                    <div className="absolute h-full w-[5.77%] top-[0%] left-[8.56%] inline-block">
                      02 Jan
                    </div>
                    <div className="absolute h-full w-[5.77%] top-[0%] left-[17.13%] inline-block">
                      03 Jan
                    </div>
                    <div className="absolute h-full w-[5.77%] top-[0%] left-[25.69%] inline-block">
                      04 Jan
                    </div>
                    <div className="absolute h-full w-[5.77%] top-[0%] left-[34.27%] inline-block">
                      05 Jan
                    </div>
                    <div className="absolute h-full w-[5.77%] top-[0%] left-[42.83%] inline-block">
                      06 Jan
                    </div>
                    <div className="absolute h-full w-[5.77%] top-[0%] left-[51.39%] inline-block">
                      07 Jan
                    </div>
                    <div className="absolute h-full w-[5.77%] top-[0%] left-[59.96%] inline-block">
                      08 Jan
                    </div>
                    <div className="absolute h-full w-[5.77%] top-[0%] left-[68.52%] inline-block">
                      09 Jan
                    </div>
                    <div className="absolute h-full w-[5.77%] top-[0%] left-[77.1%] inline-block">
                      10 Jan
                    </div>
                    <div className="absolute h-full w-[5.61%] top-[0%] left-[85.66%] inline-block">
                      11 Jan
                    </div>
                    <div className="absolute h-full w-[5.77%] top-[0%] left-[94.21%] inline-block">
                      12 Jan
                    </div>
                  </div>
                </div>
                <img
                  className="absolute h-[61.82%] w-[53.78%] top-[30.12%] right-[1.7%] bottom-[8.06%] left-[44.52%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/svgjsg10626.svg"
                />
                <img
                  className="absolute h-[63.64%] w-[54.6%] top-[29.06%] right-[1.29%] bottom-[7.3%] left-[44.11%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/svgjsg10613.svg"
                />
                <img
                  className="absolute h-[62.64%] w-[53.78%] top-[29.7%] right-[1.7%] bottom-[7.67%] left-[44.52%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/svgjsg10629.svg"
                />
                <img
                  className="absolute w-[53.78%] top-[-20.88%] right-[42.13%] left-[4.09%] max-w-full overflow-hidden h-[0rem]"
                  alt=""
                  src="/svgjsline10697.svg"
                />
                <img
                  className="absolute w-[53.78%] top-[8.94%] right-[42.13%] left-[4.09%] max-w-full overflow-hidden h-[0rem]"
                  alt=""
                  src="/iconstar.svg"
                />
              </div>
              <img
                className="absolute h-[33.33%] w-[14.73%] top-[0%] right-[85.27%] bottom-[66.67%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/iconstar.svg"
              />
              <div className="absolute h-[73.78%] w-[2.8%] top-[6.84%] right-[94.72%] bottom-[19.38%] left-[2.48%] text-right text-[0.49rem]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                  <div className="absolute h-[5.88%] w-full top-[0%] left-[0%] inline-block">
                    100
                  </div>
                  <div className="absolute h-[5.88%] w-[68.45%] top-[18.82%] left-[31.55%] inline-block">
                    80
                  </div>
                  <div className="absolute h-[5.88%] w-[68.45%] top-[37.65%] left-[31.55%] inline-block">
                    60
                  </div>
                  <div className="absolute h-[5.88%] w-[68.45%] top-[56.47%] left-[31.55%] inline-block">
                    40
                  </div>
                  <div className="absolute h-[5.88%] w-[68.45%] top-[75.3%] left-[31.55%] inline-block">
                    20
                  </div>
                  <div className="absolute h-[5.88%] w-[36.9%] top-[94.12%] left-[63.1%] inline-block">
                    0
                  </div>
                </div>
              </div>
              <div className="absolute h-[47.12%] w-[30.51%] top-[29.23%] right-[29.36%] bottom-[23.64%] left-[40.12%] rounded-[4.99px] bg-white shadow-[0px_2.9px_2.85px_rgba(0,_0,_0,_0.25)] box-border overflow-hidden text-left text-[0.67rem] text-darkslategray-100 font-body-large-semibold border-[0.7px] border-solid border-whitesmoke-300">
                <div className="absolute top-[5.1%] left-[5.25%] leading-[0.94rem]">
                  05 Jan
                </div>
                <b className="absolute top-[27.68%] left-[83.57%] leading-[0.94rem]">
                  105
                </b>
                <b className="absolute top-[49.75%] left-[84.65%] leading-[0.94rem]">
                  60
                </b>
                <b className="absolute top-[76.35%] left-[84.65%] leading-[0.94rem]">
                  45
                </b>
                <div className="absolute h-[24.59%] w-[66.85%] top-[19.77%] right-[28.45%] bottom-[55.64%] left-[4.71%] text-[0.71rem]">
                  <div className="absolute top-[32.46%] left-[25.9%] leading-[0.94rem]">
                    Total impressions
                  </div>
                  <div className="absolute h-full w-[25.09%] top-[0%] right-[74.91%] bottom-[0%] left-[0%] flex flex-row items-start justify-start p-[0.53rem] box-border gap-[0.45rem]">
                    <div className="relative w-[0.04rem] h-[0.04rem] hidden" />
                    <img
                      className="relative w-[1.07rem] h-[1.07rem]"
                      alt=""
                      src="/selected-2.svg"
                    />
                  </div>
                </div>
                <div className="absolute h-[24.59%] w-[66.36%] top-[44.36%] right-[28.94%] bottom-[31.06%] left-[4.71%] text-[0.71rem]">
                  <div className="absolute top-[32.46%] left-[26.09%] leading-[0.94rem]">
                    Peak Impressions
                  </div>
                  <div className="absolute h-full w-[25.28%] top-[0%] right-[74.72%] bottom-[0%] left-[0%] flex flex-row items-start justify-start p-[0.53rem] box-border gap-[0.45rem]">
                    <div className="relative w-[0.04rem] h-[0.04rem] hidden" />
                    <img
                      className="relative w-[1.07rem] h-[1.07rem]"
                      alt=""
                      src="/selected-3.svg"
                    />
                  </div>
                </div>
                <div className="absolute h-[24.59%] w-[75.67%] top-[68.94%] right-[19.62%] bottom-[6.47%] left-[4.71%] text-[0.71rem]">
                  <div className="absolute top-[30.12%] left-[22.88%] leading-[0.94rem]">
                    Off Peak Impressions
                  </div>
                  <div className="absolute h-full w-[22.16%] top-[0%] right-[77.84%] bottom-[0%] left-[0%] flex flex-row items-start justify-start p-[0.53rem] box-border gap-[0.45rem]">
                    <div className="relative w-[0.04rem] h-[0.04rem] hidden" />
                    <img
                      className="relative w-[1.07rem] h-[1.07rem]"
                      alt=""
                      src="/selected-4.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute h-[60.16%] w-[0.31%] top-[16.29%] right-[60.69%] bottom-[23.54%] left-[39%] box-border border-r-[2.1px] border-dashed border-silver" />
            </div>
            <div className="absolute h-[8.73%] w-[60.15%] top-[82.45%] right-[19.95%] bottom-[8.83%] left-[19.9%] text-[0.71rem]">
              <div className="absolute h-[97.99%] w-[29.95%] top-[0%] right-[37.06%] bottom-[2.01%] left-[32.99%]">
                <div className="absolute top-[32.46%] left-[26.09%] leading-[0.94rem]">
                  Peak Impressions
                </div>
                <div className="absolute h-full w-[25.28%] top-[0%] right-[74.72%] bottom-[0%] left-[0%] flex flex-row items-start justify-start p-[0.53rem] box-border gap-[0.45rem]">
                  <div className="relative w-[0.04rem] h-[0.04rem] hidden" />
                  <img
                    className="relative w-[1.07rem] h-[1.07rem]"
                    alt=""
                    src="/selected-3.svg"
                  />
                </div>
              </div>
              <div className="absolute h-[97.99%] w-[30.17%] top-[0%] right-[69.83%] bottom-[2.01%] left-[0%]">
                <div className="absolute top-[32.46%] left-[25.9%] leading-[0.94rem]">
                  Total impressions
                </div>
                <div className="absolute h-full w-[25.09%] top-[0%] right-[74.91%] bottom-[0%] left-[0%] flex flex-row items-start justify-start p-[0.53rem] box-border gap-[0.45rem]">
                  <div className="relative w-[0.04rem] h-[0.04rem] hidden" />
                  <img
                    className="relative w-[1.07rem] h-[1.07rem]"
                    alt=""
                    src="/selected-2.svg"
                  />
                </div>
              </div>
              <div className="absolute h-[97.99%] w-[34.16%] top-[2.01%] right-[0%] bottom-[0%] left-[65.84%]">
                <div className="absolute top-[32.46%] left-[22.88%] leading-[0.94rem]">
                  Off Peak Impressions
                </div>
                <div className="absolute h-full w-[22.16%] top-[0%] right-[77.84%] bottom-[0%] left-[0%] flex flex-row items-start justify-start p-[0.53rem] box-border gap-[0.45rem]">
                  <div className="relative w-[0.04rem] h-[0.04rem] hidden" />
                  <img
                    className="relative w-[1.07rem] h-[1.07rem]"
                    alt=""
                    src="/selected-4.svg"
                  />
                </div>
              </div>
            </div>
            <div className="absolute bottom-[22.34rem] left-[28.57rem] w-[15.15rem] h-[1.65rem]">
              <Dropdown
                className="absolute bottom-[0rem] left-[0rem]"
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
                className="absolute bottom-[0rem] left-[4.86rem]"
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
                className="absolute bottom-[0rem] left-[9.98rem]"
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
          <div className="absolute top-[8.38rem] left-[calc(50%_-_377.2px)] rounded-[11.41px] bg-white box-border w-[47.2rem] h-[9.41rem] overflow-hidden border-[2.1px] border-solid border-whitesmoke-400">
            <div className="absolute top-[1.34rem] left-[1.96rem] leading-[0.94rem] font-semibold">
              Today Impressions
            </div>
            <div className="absolute top-[3.16rem] left-[calc(50%_-_377.6px)] w-[46.93rem] h-[5.13rem] flex flex-row items-center justify-center gap-[0.71rem] text-[1.11rem] text-gray-200 font-lexend">
              <div className="rounded-[8.56px] bg-white box-border w-[13.37rem] h-[4.01rem] flex flex-row items-center justify-between p-[0.71rem] border-[0.7px] border-solid border-gainsboro-400">
                <div className="w-[4.33rem] flex flex-col items-start justify-start">
                  <b className="relative leading-[133%]">1508</b>
                  <div className="relative text-[0.54rem] tracking-[0.02em] leading-[137.1%] text-darkgray-100">
                    Total impressions
                  </div>
                </div>
                <img
                  className="relative w-[2.14rem] h-[2.14rem]"
                  alt=""
                  src="/group-3.svg"
                />
              </div>
              <div className="rounded-[8.56px] bg-white box-border w-[13.37rem] h-[4.01rem] flex flex-row items-center justify-between p-[0.71rem] border-[0.7px] border-solid border-gainsboro-400">
                <div className="w-[4.33rem] flex flex-col items-start justify-start">
                  <b className="relative leading-[133%]">125</b>
                  <div className="relative text-[0.54rem] tracking-[0.02em] leading-[137.1%] text-darkgray-100">
                    Peak impressions
                  </div>
                </div>
                <img
                  className="relative w-[2.14rem] h-[2.14rem]"
                  alt=""
                  src="/group3.svg"
                />
              </div>
              <div className="rounded-[8.56px] bg-white box-border w-[13.37rem] h-[4.01rem] flex flex-row items-center justify-between p-[0.71rem] border-[0.7px] border-solid border-gainsboro-400">
                <div className="w-[4.33rem] flex flex-col items-start justify-start">
                  <b className="relative leading-[133%]">789</b>
                  <div className="relative text-[0.54rem] tracking-[0.02em] leading-[137.1%] text-darkgray-100">
                    off Peak impressions
                  </div>
                </div>
                <img
                  className="relative w-[2.14rem] h-[2.14rem]"
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
