import { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SettingNavbar from "../components/SettingNavbar";
import PortalDrawer from "../components/PortalDrawer";

const Setting = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const openNavbar = useCallback(() => {
    setNavbarOpen(true);
  }, []);

  const closeNavbar = useCallback(() => {
    setNavbarOpen(false);
  }, []);

  const onButtonbutton2Click = useCallback(() => {
    window.open("ggggfgfg");
  }, []);

  const onButtonbutton3Click = useCallback(() => {
    window.open("vvbbvb");
  }, []);

  const onButtonbutton4Click = useCallback(() => {
    window.open("vcbb");
  }, []);

  const onButtonbutton5Click = useCallback(() => {
    window.open("bvbv");
  }, []);

  return (
    <>
      <div className="relative bg-white w-full h-[40.18rem] overflow-hidden text-left text-[0.54rem] text-slategray font-inter">
        <div className="absolute top-[0rem] right-[0rem] bg-white w-[53.13rem] h-[40.18rem] overflow-hidden">
          <div className="absolute top-[0rem] left-[calc(50%_-_425px)] bg-white box-border w-[53.13rem] h-[2.86rem] border-b-[0.5px] border-solid border-gainsboro-200">
            <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[43.43rem] h-[2.9rem]">
              <div className="absolute top-[0.56rem] left-[0.71rem] bg-gray-400 w-[4.29rem] h-[1.79rem]">
                <button
                  className="cursor-pointer [border:none] p-0 bg-gray-400 absolute top-[0rem] left-[0.18rem] rounded-[7142.14px] w-[1.79rem] h-[1.79rem]"
                  onClick={openNavbar}
                >
                  <img
                    className="absolute top-[0.36rem] left-[0.36rem] w-[1.07rem] h-[1.07rem]"
                    alt=""
                    src="/div2.svg"
                  />
                </button>
                <img
                  className="absolute top-[0rem] left-[2.32rem] rounded-[7142.14px] w-[1.79rem] h-[1.79rem] hidden"
                  alt=""
                  src="/divheaderactionitem3.svg"
                />
              </div>
            </div>
            <div className="absolute top-[calc(50%_-_18.55px)] right-[1.8rem] bg-gray-400 flex flex-row items-center justify-start py-[0rem] px-[0.18rem] gap-[0.36rem]">
              <div className="relative rounded-[7142.14px] bg-gray-400 w-[1.79rem] h-[1.79rem]" />
              <div className="relative rounded-[7142.14px] bg-gray-400 w-[1.79rem] h-[1.79rem]">
                <div className="absolute top-[0.36rem] left-[0.36rem] bg-gray-400 w-[1.07rem] h-[1.07rem]">
                  <img
                    className="absolute top-[0rem] left-[0rem] w-[1.07rem] h-[1.07rem] overflow-hidden"
                    alt=""
                    src="/svg3.svg"
                  />
                  <div className="absolute top-[-0.04rem] left-[0.63rem] rounded-[7142.14px] bg-crimson-200 w-[0.36rem] h-[0.36rem]" />
                </div>
              </div>
              <img
                className="relative rounded-[7142.14px] w-[1.79rem] h-[1.79rem]"
                alt=""
                src="/div3.svg"
              />
              <div className="relative rounded-[7142.14px] bg-gray-400 w-[6.73rem] h-[2.37rem]">
                <img
                  className="absolute top-[0.44rem] left-[0.36rem] rounded-[7142.14px] w-[1.48rem] h-[1.48rem]"
                  alt=""
                  src="/spanavatar4.svg"
                />
                <div className="absolute top-[0.36rem] left-[2.14rem] bg-gray-400 w-[4.22rem] h-[1.65rem]">
                  <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[4.22rem] h-[0.71rem]">
                    <div className="absolute top-[0.03rem] left-[0rem] leading-[0.71rem] capitalize flex items-center w-[1.6rem] h-[0.63rem]">
                      Admin
                    </div>
                  </div>
                  <Link
                    className="cursor-pointer [text-decoration:none] absolute top-[0.71rem] left-[0rem] bg-gray-400 w-[4.22rem] h-[0.94rem] text-[0.63rem] text-[inherit]"
                    to="/coming-soon"
                  >
                    <b className="absolute top-[0.09rem] left-[0rem] leading-[0.94rem] flex items-center w-[4.22rem] h-[0.74rem]">
                      Abdurrahman
                    </b>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <b className="absolute top-[5.09rem] left-[calc(50%_-_382.1px)] text-[1.07rem] leading-[0.94rem] font-body-large-semibold text-darkslategray-400">
            Settings
          </b>
          <div className="absolute top-[8.26rem] left-[18.79rem] rounded-[11.43px] bg-white box-border w-[29.82rem] h-[27.81rem] overflow-hidden text-[0.63rem] font-body-large-semibold border-[2.1px] border-solid border-whitesmoke-400">
            <div className="absolute top-[0rem] left-[0rem] bg-gray-400 box-border w-[22.5rem] h-[2.14rem] overflow-hidden font-inter border-b-[0.5px] border-solid border-gainsboro-200">
              <nav className="m-0 absolute top-[0rem] left-[0rem] bg-gray-400 box-border w-[3.73rem] h-[2.1rem] text-left text-[0.63rem] text-red-100 font-body-large-semibold border-b-[1.4px] border-solid border-red-100">
                <div className="absolute top-[0.63rem] left-[0.89rem] leading-[0.94rem] font-medium flex items-center w-[1.95rem] h-[0.74rem]">
                  Profile
                </div>
              </nav>
              <nav className="m-0 absolute top-[0rem] left-[3.69rem] bg-gray-400 box-border w-[4.75rem] h-[2.1rem] text-left text-[0.63rem] text-slategray font-inter border-b-[1.4px] border-solid border-gray-400">
                <div className="absolute top-[0.54rem] left-[0.89rem] leading-[0.94rem] font-medium">
                  Preferences
                </div>
              </nav>
              <nav className="m-0 absolute top-[0rem] left-[8.44rem] bg-gray-400 box-border w-[5.31rem] h-[2.1rem] text-left text-[0.63rem] text-slategray font-body-large-semibold border-b-[1.4px] border-solid border-gray-400">
                <div className="absolute top-[0.54rem] left-[0.89rem] leading-[0.94rem] font-medium">
                  Notification
                </div>
              </nav>
              <div className="absolute top-[0rem] left-[13.79rem] bg-gray-400 box-border w-[5.09rem] h-[2.1rem] hidden border-b-[1.4px] border-solid border-gray-400">
                <div className="absolute top-[0.63rem] left-[0.89rem] leading-[0.94rem] font-medium flex items-center w-[3.31rem] h-[0.74rem]">
                  Integration
                </div>
              </div>
              <div className="absolute top-[0rem] left-[18.89rem] bg-gray-400 box-border w-[3.62rem] h-[2.1rem] hidden border-b-[1.4px] border-solid border-gray-400">
                <div className="absolute top-[0.63rem] left-[0.89rem] leading-[0.94rem] font-medium flex items-center w-[1.84rem] h-[0.74rem]">
                  Billing
                </div>
              </div>
            </div>
            <div className="absolute top-[3.66rem] left-[0.89rem] text-[0.8rem] leading-[1.25rem] font-semibold font-inter text-gray-300 flex items-center w-[3.03rem] h-[0.98rem]">
              General
            </div>
            <div className="absolute top-[5.4rem] left-[1.88rem] bg-gray-400 box-border w-[26.83rem] h-[4.87rem] border-b-[0.5px] border-solid border-gainsboro-200">
              <div className="absolute top-[1.94rem] left-[0rem] bg-gray-400 w-[12.57rem] h-[0.94rem]">
                <div className="absolute top-[0rem] left-[0rem] leading-[0.94rem] font-medium">
                  Brand Name
                </div>
              </div>
              <Form className="w-[19.56rem] [border:none] bg-[transparent] absolute top-[1.43rem] left-[5.88rem]">
                <Form.Control
                  type="text"
                  placeholder="Popeyes Louisiana Kitchen, Inc."
                />
              </Form>
            </div>
            <div className="absolute top-[15.13rem] left-[1.88rem] bg-gray-400 box-border w-[26.83rem] h-[4.87rem] border-b-[0.5px] border-solid border-gainsboro-200">
              <div className="absolute top-[1.94rem] left-[0rem] bg-gray-400 w-[12.57rem] h-[0.94rem]">
                <div className="absolute top-[0rem] left-[0rem] leading-[0.94rem] font-medium">
                  Title
                </div>
              </div>
              <Form className="w-[19.56rem] [border:none] bg-[transparent] absolute top-[1.43rem] left-[5.88rem]">
                <Form.Control
                  type="text"
                  placeholder="Fast-food restaurant company"
                />
              </Form>
            </div>
            <div className="absolute top-[10.27rem] left-[1.88rem] bg-gray-400 box-border w-[26.83rem] h-[4.87rem] border-b-[0.5px] border-solid border-gainsboro-200">
              <div className="absolute top-[1.94rem] left-[0rem] bg-gray-400 w-[12.57rem] h-[0.94rem]">
                <div className="absolute top-[0rem] left-[0rem] leading-[0.94rem] font-medium">
                  Company logo
                </div>
              </div>
              <div className="absolute top-[1.12rem] left-[6.29rem] rounded-[7142.14px] bg-darkgray-200 shadow-[0px_2.9px_4.29px_-2.86px_rgba(0,_0,_0,_0.1),_0px_7.1px_10.71px_-2.14px_rgba(0,_0,_0,_0.1),_0px_0px_0px_rgba(0,_0,_0,_0),_0px_0px_0px_rgba(0,_0,_0,_0)] box-border w-[2.68rem] h-[2.68rem] border-[1.4px] border-solid border-white">
                <img
                  className="absolute top-[0.09rem] left-[0.09rem] rounded-[7142.14px] w-[2.5rem] h-[2.5rem] object-cover"
                  alt=""
                  src="/imgavatarimg4@2x.png"
                />
                <img
                  className="absolute top-[0rem] left-[0rem] rounded-[50%] w-[2.68rem] h-[2.68rem] object-cover"
                  alt=""
                  src="/ellipse-1@2x.png"
                />
              </div>
            </div>
            <button className="cursor-pointer p-0 bg-white absolute top-[23.26rem] left-[16.96rem] rounded-[4.29px] box-border w-[4.64rem] h-[1.96rem] border-[0.5px] border-solid border-lightgray-200">
              <div className="absolute top-[0.51rem] left-[1.33rem] text-[0.71rem] leading-[0.94rem] font-semibold font-inter text-dimgray-200 text-center">
                Reset
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-red-200 absolute top-[23.26rem] left-[22.28rem] rounded-[4.29px] w-[5.06rem] h-[1.96rem]">
              <div className="absolute top-[0.51rem] left-[1.25rem] text-[0.71rem] leading-[0.94rem] font-semibold font-inter text-white text-center">
                Update
              </div>
            </button>
          </div>
          <div className="absolute top-[8.26rem] left-[3.13rem] rounded-[11.43px] bg-white box-border w-[13.08rem] h-[29.46rem] text-center text-[0.89rem] text-gray-300 border-[2.1px] border-solid border-whitesmoke-400">
            <div className="absolute top-[-0.42rem] left-[-0.42rem] w-[13.91rem] h-[32.9rem]">
              <div className="absolute top-[1.34rem] left-[1.34rem] bg-gray-400 flex flex-col items-center justify-start gap-[1.34rem]">
                <div className="bg-gray-400 flex flex-col items-center justify-start py-[0rem] px-[1.92rem] gap-[0.8rem]">
                  <img
                    className="relative rounded-[7142.14px] w-[4.04rem] h-[4.03rem]"
                    alt=""
                    src="/spanavatar5.svg"
                  />
                  <div className="flex flex-col items-center justify-center gap-[0.13rem]">
                    <b className="relative leading-[1.25rem] flex items-center justify-center w-[7.39rem] h-[1.07rem] shrink-0">
                      Popeyes
                    </b>
                    <div className="relative text-[0.54rem] leading-[0.94rem] font-medium text-darkslategray-200 flex items-center justify-center w-[8.14rem] h-[0.74rem] shrink-0">
                      Louisiana Kitchen, Inc.
                    </div>
                  </div>
                </div>
                <div className="bg-gray-400 flex flex-col items-start justify-start gap-[1.29rem] text-left text-[0.63rem] text-slategray">
                  <div className="bg-gray-400 flex flex-col items-start justify-start py-[0.09rem] px-[0rem] gap-[0.18rem]">
                    <div className="relative leading-[0.94rem] flex items-center w-[1.57rem] h-[0.74rem] shrink-0">
                      Email
                    </div>
                    <div className="relative leading-[0.94rem] font-medium text-darkslategray-200 flex items-center w-[8.14rem] h-[0.74rem] shrink-0">
                      iamfred@imaze.infotech.io
                    </div>
                  </div>
                  <div className="bg-gray-400 flex flex-col items-start justify-start py-[0.09rem] px-[0rem] gap-[0.18rem]">
                    <div className="relative leading-[0.94rem] flex items-center w-[1.87rem] h-[0.74rem] shrink-0">
                      Phone
                    </div>
                    <div className="relative leading-[0.94rem] font-medium text-darkslategray-200 flex items-center w-[4.3rem] h-[0.74rem] shrink-0">
                      +12-123-1234
                    </div>
                  </div>
                  <div className="bg-gray-400 flex flex-col items-start justify-start py-[0.09rem] px-[0rem] gap-[0.18rem]">
                    <div className="relative leading-[0.94rem] flex items-center w-[2.54rem] h-[0.74rem] shrink-0">
                      Location
                    </div>
                    <div className="relative leading-[0.94rem] font-medium text-darkslategray-200">
                      Colombo, Sri Lanka
                    </div>
                  </div>
                  <div className="bg-gray-400 flex flex-col items-start justify-start py-[0.09rem] px-[0rem] gap-[0.18rem]">
                    <div className="relative leading-[0.94rem]">
                      Registered date
                    </div>
                    <div className="relative leading-[0.94rem] font-medium text-darkslategray-200 flex items-center w-[3.26rem] h-[0.74rem] shrink-0">
                      17/11/1993
                    </div>
                  </div>
                  <div className="bg-gray-400 flex flex-col items-start justify-start py-[0.09rem] px-[0rem] gap-[0.18rem]">
                    <div className="relative leading-[0.94rem] flex items-center w-[1.29rem] h-[0.74rem] shrink-0">
                      Title
                    </div>
                    <div className="relative leading-[0.94rem] font-medium text-darkslategray-200">
                      Fast-food restaurant company
                    </div>
                  </div>
                  <div className="bg-gray-400 flex flex-col items-start justify-start gap-[0.8rem]">
                    <div className="relative leading-[0.94rem] flex items-center w-[1.77rem] h-[0.74rem] shrink-0">
                      Social
                    </div>
                    <div className="relative bg-gray-400 w-[11.23rem] h-[1.61rem]">
                      <button
                        className="cursor-pointer p-0 bg-white absolute top-[0rem] left-[0rem] rounded-[7142.14px] box-border w-[1.61rem] h-[1.61rem] border-[0.5px] border-solid border-lightgray-200"
                        onClick={onButtonbutton2Click}
                      >
                        <img
                          className="absolute top-[0.4rem] left-[0.4rem] w-[0.81rem] h-[0.81rem] overflow-hidden"
                          alt=""
                          src="/svg4.svg"
                        />
                      </button>
                      <button
                        className="cursor-pointer p-0 bg-white absolute top-[0rem] left-[1.96rem] rounded-[7142.14px] box-border w-[1.61rem] h-[1.61rem] border-[0.5px] border-solid border-lightgray-200"
                        onClick={onButtonbutton3Click}
                      >
                        <img
                          className="absolute top-[0.4rem] left-[0.4rem] w-[0.81rem] h-[0.81rem] overflow-hidden"
                          alt=""
                          src="/svg5.svg"
                        />
                      </button>
                      <button
                        className="cursor-pointer p-0 bg-white absolute top-[0rem] left-[3.93rem] rounded-[7142.14px] box-border w-[1.61rem] h-[1.61rem] border-[0.5px] border-solid border-lightgray-200"
                        onClick={onButtonbutton4Click}
                      >
                        <img
                          className="absolute top-[0.4rem] left-[0.4rem] w-[0.81rem] h-[0.81rem] overflow-hidden"
                          alt=""
                          src="/svg6.svg"
                        />
                      </button>
                      <button
                        className="cursor-pointer p-0 bg-white absolute top-[0rem] left-[5.89rem] rounded-[7142.14px] box-border w-[1.61rem] h-[1.61rem] border-[0.5px] border-solid border-lightgray-200"
                        onClick={onButtonbutton5Click}
                      >
                        <img
                          className="absolute top-[0.4rem] left-[0.4rem] w-[0.81rem] h-[0.81rem] overflow-hidden"
                          alt=""
                          src="/svg7.svg"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isNavbarOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeNavbar}
        >
          <SettingNavbar onClose={closeNavbar} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Setting;
