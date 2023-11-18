import { useState, useCallback } from "react";
import "antd/dist/antd.min.css";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import NavbarDriverProfileDetail from "../components/NavbarDriverProfileDetail";
import PortalDrawer from "../components/PortalDrawer";

const DriverProfileDetail = () => {
  const [isNavbarDriverProfileDetailOpen, setNavbarDriverProfileDetailOpen] =
    useState(false);

  const openNavbarDriverProfileDetail = useCallback(() => {
    setNavbarDriverProfileDetailOpen(true);
  }, []);

  const closeNavbarDriverProfileDetail = useCallback(() => {
    setNavbarDriverProfileDetailOpen(false);
  }, []);

  return (
    <>
      <div className="relative bg-white w-full h-[99.54rem] overflow-hidden text-left text-[0.72rem] text-black-2 font-urbanist">
        <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
          <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-whitesmoke-500" />
          <div className="absolute top-[5.23rem] left-[2.7rem] text-[0.9rem] font-semibold">
            Driver Profile
          </div>
          <div className="absolute top-[9.28rem] left-[2.7rem] rounded-[6.48px] box-border w-[46.19rem] h-[24.36rem] overflow-hidden text-steelblue-200 border-[0.7px] border-solid border-gainsboro-700">
            <div className="absolute top-[0rem] left-[0rem] rounded-[9.36px] bg-white shadow-[0px_0px_3.6px_rgba(0,_0,_0,_0.15)] w-[46.78rem] h-[28.95rem]" />
            <div className="absolute top-[1.44rem] left-[3.06rem] w-[9.44rem] h-[21.04rem]">
              <div className="absolute top-[0rem] left-[0rem] w-[9.44rem] h-[21.04rem]">
                <b className="absolute top-[0rem] left-[0rem] leading-[0.95rem] uppercase">
                  personal info
                </b>
                <div className="absolute top-[2.52rem] left-[0rem] w-[9.44rem] h-[18.51rem] text-slategray">
                  <div className="absolute top-[0rem] left-[0rem] w-[9.44rem] h-[2.31rem] text-center">
                    <div className="absolute top-[0rem] left-[0.04rem] leading-[0.95rem] font-medium">
                      Full Name
                    </div>
                    <div className="absolute top-[1.31rem] left-[0rem] leading-[0.95rem] font-semibold text-darkslategray-300 text-left">
                      Charindu Udantha Edirisuriya
                    </div>
                  </div>
                  <div className="absolute top-[3.24rem] left-[0rem] w-[6.81rem] h-[2.31rem]">
                    <div className="absolute top-[0rem] left-[0rem] leading-[0.95rem] font-medium">
                      Full Name with Initials
                    </div>
                    <div className="absolute top-[1.31rem] left-[0rem] leading-[0.95rem] font-semibold text-darkslategray-200">
                      C.U Edirisuriya
                    </div>
                  </div>
                  <div className="absolute top-[6.48rem] left-[0rem] w-[7.38rem] h-[2.31rem] text-darkslategray-200">
                    <div className="absolute top-[1.31rem] left-[0rem] leading-[0.95rem] font-semibold">
                      udantha15@gmail.com
                    </div>
                    <div className="absolute top-[0rem] left-[0rem] leading-[0.95rem] font-medium text-slategray">
                      Email
                    </div>
                  </div>
                  <div className="absolute top-[9.73rem] left-[0rem] w-[4.81rem] h-[2.31rem] text-darkslategray-200">
                    <div className="absolute top-[1.31rem] left-[0rem] leading-[0.95rem] font-semibold">
                      +94775248346
                    </div>
                    <div className="absolute top-[0rem] left-[0rem] leading-[0.95rem] font-medium text-slategray">
                      Phone
                    </div>
                  </div>
                  <div className="absolute top-[12.97rem] left-[0rem] w-[4.06rem] h-[2.31rem] text-darkslategray-200">
                    <div className="absolute top-[1.31rem] left-[0rem] leading-[0.95rem] font-semibold">
                      1999-08-14
                    </div>
                    <div className="absolute top-[0rem] left-[0rem] leading-[0.95rem] font-medium text-slategray">
                      Date of birth
                    </div>
                  </div>
                  <div className="absolute top-[16.21rem] left-[0rem] w-[4.5rem] h-[2.31rem]">
                    <div className="absolute top-[0rem] left-[0rem] leading-[0.95rem] capitalize font-medium">
                      age category
                    </div>
                    <div className="absolute top-[1.31rem] left-[0rem] leading-[0.95rem] font-semibold text-darkslategray-200">
                      20 - 25
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[1.44rem] left-[30.93rem] w-[12.13rem] h-[17.79rem]">
              <div className="absolute top-[0rem] left-[0rem] w-[12.13rem] h-[17.79rem]">
                <b className="absolute top-[0rem] left-[0rem] leading-[0.95rem] uppercase">
                  route info
                </b>
                <div className="absolute top-[2.52rem] left-[0rem] w-[12.13rem] h-[15.27rem] text-darkslategray-200">
                  <div className="absolute top-[0rem] left-[0rem] w-[11.31rem] h-[2.75rem]">
                    <div className="absolute top-[0.81rem] left-[0rem] leading-[0.95rem] capitalize font-semibold">
                      <p className="m-0">143, Main Road, Athidiya, Dehiwala,</p>
                      <p className="m-0">Colombo, Western, 10350</p>
                    </div>
                    <div className="absolute top-[0rem] left-[0rem] leading-[0.95rem] font-medium text-slategray">
                      Address line 1
                    </div>
                  </div>
                  <div className="absolute top-[3.24rem] left-[0rem] w-[11.31rem] h-[2.31rem]">
                    <div className="absolute top-[1.31rem] left-[0rem] leading-[0.95rem] font-semibold">
                      143, Main Road, Athidiya, Dehiwala,
                    </div>
                    <div className="absolute top-[0rem] left-[0rem] leading-[0.95rem] font-medium text-slategray">
                      Address line 2
                    </div>
                  </div>
                  <div className="absolute top-[6.48rem] left-[0rem] w-[10.5rem] h-[2.31rem]">
                    <div className="absolute top-[1.31rem] left-[0rem] leading-[0.95rem] font-semibold">
                      100,000 - 150,000 KM
                    </div>
                    <div className="absolute top-[0rem] left-[0rem] leading-[0.95rem] font-medium text-slategray">
                      Average kilometers (KM) per day
                    </div>
                  </div>
                  <div className="absolute top-[9.73rem] left-[0rem] w-[12.13rem] h-[2.31rem]">
                    <div className="absolute top-[1.31rem] left-[0rem] leading-[0.95rem] capitalize font-semibold">
                      Colombo
                    </div>
                    <div className="absolute top-[0rem] left-[0rem] leading-[0.95rem] font-medium text-slategray">
                      on average which routes do you travel
                    </div>
                  </div>
                  <div className="absolute top-[12.97rem] left-[0rem] w-[3.75rem] h-[2.31rem]">
                    <div className="absolute top-[1.31rem] left-[0rem] leading-[0.95rem] capitalize font-semibold">
                      technology
                    </div>
                    <div className="absolute top-[0rem] left-[0rem] leading-[0.95rem] font-medium text-slategray">
                      Occupation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[10.71rem] left-[19.9rem] w-[11.31rem] h-[21.98rem] text-darkslategray-200">
            <div className="absolute top-[2.52rem] left-[0rem] w-[11.31rem] h-[19.45rem]">
              <div className="absolute top-[12.97rem] left-[0rem] w-[4.94rem] h-[2.31rem] text-slategray">
                <div className="absolute top-[0rem] left-[0rem] leading-[0.95rem] capitalize font-medium">
                  education level
                </div>
                <div className="absolute top-[1.31rem] left-[0rem] leading-[0.95rem] font-semibold text-darkslategray-200">
                  Diploma
                </div>
              </div>
              <div className="absolute top-[9.73rem] left-[0rem] w-[4.5rem] h-[2.31rem]">
                <div className="absolute top-[1.31rem] left-[0rem] leading-[0.95rem] capitalize font-semibold">
                  single
                </div>
                <div className="absolute top-[0rem] left-[0rem] leading-[0.95rem] font-medium text-slategray">
                  Marital Status
                </div>
              </div>
              <div className="absolute top-[0rem] left-[0rem] w-[6.19rem] h-[2.31rem]">
                <div className="absolute top-[1.31rem] left-[0rem] leading-[0.95rem] font-semibold">
                  199922810193
                </div>
                <div className="absolute top-[0rem] left-[0rem] leading-[0.95rem] font-medium text-slategray">
                  National Id Number
                </div>
              </div>
              <div className="absolute top-[3.24rem] left-[0rem] w-[5.5rem] h-[2.31rem]">
                <div className="absolute top-[1.31rem] left-[0rem] leading-[0.95rem] font-semibold">
                  N455346
                </div>
                <div className="absolute top-[0rem] left-[0rem] leading-[0.95rem] font-medium text-slategray">
                  Passport Number
                </div>
              </div>
              <div className="absolute top-[6.48rem] left-[0rem] w-[3.44rem] h-[2.31rem]">
                <div className="absolute top-[1.31rem] left-[0rem] leading-[0.95rem] font-semibold">
                  LK
                </div>
                <div className="absolute top-[0rem] left-[0rem] leading-[0.95rem] font-medium text-slategray">
                  Nationality
                </div>
              </div>
              <div className="absolute top-[16.21rem] left-[0rem] w-[11.31rem] h-[3.24rem]">
                <div className="absolute top-[1.31rem] left-[0rem] leading-[0.95rem] font-semibold">
                  <p className="m-0">143, Main Road, Athidiya, Dehiwala,</p>
                  <p className="m-0">Colombo, Western, 10350</p>
                </div>
                <div className="absolute top-[0rem] left-[0rem] leading-[0.95rem] font-medium text-slategray">
                  Home Address
                </div>
              </div>
            </div>
            <b className="absolute top-[0rem] left-[0rem] leading-[0.95rem] uppercase text-steelblue-200">
              Vehicle info
            </b>
          </div>
          <div className="absolute top-[6.53rem] left-[2.79rem] text-[0.63rem] leading-[0.95rem] font-medium text-slategray">
            Date created 04.03.2023
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[34.71rem] left-[38.31rem] w-[4.41rem] h-[1.98rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-[5.04px] bg-white box-border w-[4.41rem] h-[1.98rem] border-[1.4px] border-solid border-lightgray-100" />
            <div className="absolute top-[0.49rem] left-[0.99rem] w-[2.34rem] h-[1rem]">
              <div className="absolute top-[0rem] left-[0rem] text-[0.72rem] leading-[0.95rem] capitalize font-semibold font-urbanist text-darkslategray-200 text-left">
                Edit
              </div>
              <img
                className="absolute h-[78.75%] w-[34.67%] top-[11.88%] right-[0%] bottom-[9.38%] left-[65.33%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/notepencil.svg"
              />
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[34.71rem] left-[43.18rem] w-[5.76rem] h-[1.98rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-[5.04px] bg-indianred box-border w-[5.76rem] h-[1.98rem] border-[1.4px] border-solid border-lightgray-100" />
            <div className="absolute top-[0.49rem] left-[0.63rem] text-[0.68rem] leading-[0.95rem] capitalize font-semibold font-urbanist text-white text-left">
              Save changes
            </div>
          </button>
          <div className="absolute top-[0rem] left-[0rem] w-[53.13rem] h-[3.42rem]">
            <div className="absolute top-[0rem] left-[0rem] bg-white shadow-[0px_-0.7px_0px_#dfe5f1_inset] w-[53.13rem] h-[3.42rem]" />
            <div className="absolute top-[0.99rem] left-[50.11rem] rounded-[136.86px] bg-white w-[1.44rem] h-[1.44rem] overflow-hidden">
              <img
                className="absolute top-[0rem] left-[0rem] w-[1.94rem] h-[1.44rem] object-cover"
                alt=""
                src="/image-53@2x.png"
              />
              <img
                className="absolute top-[0rem] left-[0rem] w-[1.8rem] h-[1.89rem] object-cover"
                alt=""
                src="/image-55@2x.png"
              />
              <img
                className="absolute top-[0rem] left-[0rem] w-[2.7rem] h-[2.84rem] object-cover"
                alt=""
                src="/image-56@2x.png"
              />
            </div>
            <img
              className="absolute top-[1.17rem] left-[45.83rem] w-[1.08rem] h-[1.08rem]"
              alt=""
              src="/iconnotificationbing1.svg"
            />
            <img
              className="absolute top-[1.17rem] left-[47.86rem] w-[1.08rem] h-[1.08rem]"
              alt=""
              src="/iconmessages21.svg"
            />
            <Input
              className="bg-[transparent] absolute top-[0.81rem] left-[2.43rem]"
              placeholder="Search"
              style={{ width: "460.3px" }}
              bordered={true}
              prefix={<SearchOutlined />}
            />
            <div className="absolute top-[0.99rem] left-[50.16rem] rounded-[145.42px] bg-white w-[1.44rem] h-[1.44rem] overflow-hidden">
              <img
                className="absolute top-[0rem] left-[0rem] w-[2.21rem] h-[2.21rem] object-cover"
                alt=""
                src="/image-54@2x.png"
              />
              <img
                className="absolute top-[0rem] left-[0rem] w-[1.58rem] h-[1.62rem] object-cover"
                alt=""
                src="/image-551@2x.png"
              />
            </div>
          </div>
          <div className="absolute top-[38.13rem] left-[2.79rem] text-[0.9rem] font-semibold">
            Attached Documents
          </div>
          <div className="absolute top-[61.01rem] left-[2.79rem] text-[0.9rem] font-semibold">
            Activity Log
          </div>
          <div className="absolute top-[42.14rem] left-[2.7rem] w-[33.63rem] h-[3.42rem] overflow-hidden">
            <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-5xs-2 bg-white box-border border-[0.7px] border-solid border-gainsboro-700" />
            <div className="absolute top-[0.68rem] left-[2.52rem] rounded-5xs-2 w-[2.07rem] h-[2.07rem] overflow-hidden">
              <div className="absolute top-[-0.04rem] left-[-0.04rem] w-[2.21rem] h-[2.21rem] overflow-hidden" />
            </div>
            <img
              className="absolute top-[1.26rem] left-[23.86rem] w-[0.72rem] h-[0.72rem]"
              alt=""
              src="/iconstar.svg"
            />
            <div className="absolute top-[1.31rem] left-[2.07rem] font-semibold">
              Driving lisence
            </div>
          </div>
          <div className="absolute top-[46.24rem] left-[2.7rem] w-[33.63rem] h-[3.42rem]">
            <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-5xs-2 bg-white box-border border-[0.7px] border-solid border-gainsboro-700" />
            <div className="absolute top-[0.68rem] left-[2.52rem] rounded-5xs-2 w-[2.07rem] h-[2.07rem] overflow-hidden">
              <div className="absolute top-[-0.04rem] left-[-0.04rem] w-[2.21rem] h-[2.21rem] overflow-hidden" />
            </div>
            <img
              className="absolute top-[1.26rem] left-[23.86rem] w-[0.72rem] h-[0.72rem]"
              alt=""
              src="/iconstar.svg"
            />
            <div className="absolute top-[1.31rem] left-[2.07rem] font-semibold">
              Insurance lisence
            </div>
            <div className="absolute top-[0.81rem] left-[15.94rem] bg-gray-400 w-[1.8rem] h-[1.8rem]" />
          </div>
          <div className="absolute top-[50.33rem] left-[2.7rem] w-[33.63rem] h-[3.42rem]">
            <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-5xs-2 bg-white box-border border-[0.7px] border-solid border-gainsboro-700" />
            <div className="absolute top-[0.68rem] left-[2.52rem] rounded-5xs-2 w-[2.07rem] h-[2.07rem] overflow-hidden">
              <div className="absolute top-[-0.04rem] left-[-0.04rem] w-[2.21rem] h-[2.21rem] overflow-hidden" />
            </div>
            <img
              className="absolute top-[1.26rem] left-[23.86rem] w-[0.72rem] h-[0.72rem]"
              alt=""
              src="/iconstar.svg"
            />
            <div className="absolute top-[1.31rem] left-[2.12rem] font-semibold">
              NIC
            </div>
          </div>
          <div className="absolute top-[54.43rem] left-[2.7rem] w-[33.63rem] h-[3.42rem]">
            <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-5xs-2 bg-white box-border border-[0.7px] border-solid border-gainsboro-700" />
            <div className="absolute top-[0.68rem] left-[2.52rem] rounded-5xs-2 w-[2.07rem] h-[2.07rem] overflow-hidden">
              <div className="absolute top-[-0.04rem] left-[-0.04rem] w-[2.21rem] h-[2.21rem] overflow-hidden" />
            </div>
            <img
              className="absolute top-[1.26rem] left-[23.86rem] w-[0.72rem] h-[0.72rem]"
              alt=""
              src="/iconstar.svg"
            />
            <div className="absolute top-[1.26rem] left-[2.07rem] font-semibold">
              Vehicle image
            </div>
            <div className="absolute top-[-11.48rem] left-[12.38rem] w-[1.8rem] h-[14.23rem] text-[0.54rem] text-white">
              <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[1.8rem] h-[1.8rem]">
                <img
                  className="absolute top-[0rem] left-[0rem] rounded-[4.32px] w-[1.8rem] h-[1.8rem]"
                  alt=""
                  src="/spanavatar.svg"
                />
                <div className="absolute top-[-0.45rem] left-[0.76rem] rounded-[7202.67px] bg-mediumseagreen-100 w-[2.09rem] h-[0.9rem]">
                  <div className="absolute top-[0.12rem] left-[0.36rem] leading-[0.72rem] flex items-center w-[1.37rem] h-[0.63rem]">
                    Open
                  </div>
                </div>
              </div>
              <div className="absolute top-[4.1rem] left-[0rem] bg-gray-400 w-[1.8rem] h-[1.8rem]">
                <img
                  className="absolute top-[0rem] left-[0rem] rounded-[4.32px] w-[1.8rem] h-[1.8rem]"
                  alt=""
                  src="/spanavatar.svg"
                />
                <div className="absolute top-[-0.45rem] left-[0.76rem] rounded-[7202.67px] bg-mediumseagreen-100 w-[2.09rem] h-[0.9rem]">
                  <div className="absolute top-[0.12rem] left-[0.36rem] leading-[0.72rem] flex items-center w-[1.37rem] h-[0.63rem]">
                    Open
                  </div>
                </div>
              </div>
              <div className="absolute top-[8.24rem] left-[0rem] bg-gray-400 w-[1.8rem] h-[1.8rem]">
                <img
                  className="absolute top-[0rem] left-[0rem] rounded-[4.32px] w-[1.8rem] h-[1.8rem]"
                  alt=""
                  src="/spanavatar.svg"
                />
                <div className="absolute top-[-0.45rem] left-[0.76rem] rounded-[7202.67px] bg-mediumseagreen-100 w-[2.09rem] h-[0.9rem]">
                  <div className="absolute top-[0.12rem] left-[0.36rem] leading-[0.72rem] flex items-center w-[1.37rem] h-[0.63rem]">
                    Open
                  </div>
                </div>
              </div>
              <div className="absolute top-[12.43rem] left-[0rem] bg-gray-400 w-[1.8rem] h-[1.8rem]">
                <img
                  className="absolute top-[0rem] left-[0rem] rounded-[4.32px] w-[1.8rem] h-[1.8rem]"
                  alt=""
                  src="/spanavatar.svg"
                />
                <div className="absolute top-[-0.45rem] left-[0.76rem] rounded-[7202.67px] bg-mediumseagreen-100 w-[2.09rem] h-[0.9rem]">
                  <div className="absolute top-[0.12rem] left-[0.36rem] leading-[0.72rem] flex items-center w-[1.37rem] h-[0.63rem]">
                    Open
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[-11.16rem] left-[23.19rem] w-[9.06rem] h-[13.73rem]">
              <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[9.06rem] h-[1.62rem]">
                <button className="cursor-pointer [border:none] p-0 bg-mediumseagreen-100 absolute top-[0rem] left-[0rem] rounded-[4.32px] w-[4.62rem] h-[1.26rem]">
                  <div className="absolute top-[0.23rem] left-[0.54rem] bg-gray-400 w-[3.54rem] h-[0.81rem]">
                    <img
                      className="absolute top-[0rem] left-[0rem] w-[0.81rem] h-[0.81rem]"
                      alt=""
                      src="/spantextlg.svg"
                    />
                    <b className="absolute top-[0.08rem] left-[0.99rem] text-[0.54rem] leading-[0.72rem] flex font-urbanist text-white text-center items-center justify-center w-[2.55rem] h-[0.63rem]">
                      Approved
                    </b>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] p-0 bg-salmon-100 absolute top-[0rem] left-[4.98rem] rounded-[4.32px] w-[3.72rem] h-[1.26rem]">
                  <div className="absolute top-[0.23rem] left-[0.56rem] bg-gray-400 w-[2.64rem] h-[0.81rem]">
                    <img
                      className="absolute top-[0rem] left-[0.14rem] w-[0.81rem] h-[0.81rem]"
                      alt=""
                      src="/spantextlg1.svg"
                    />
                    <div className="absolute top-[0.09rem] left-[1.14rem] text-[0.45rem] leading-[0.72rem] font-semibold font-urbanist text-white text-center flex items-center justify-center w-[1.35rem] h-[0.63rem]">
                      Reject
                    </div>
                    <img
                      className="absolute top-[0rem] left-[0.14rem] w-[0.81rem] h-[0.81rem]"
                      alt=""
                      src="/spantextlg1.svg"
                    />
                    <div className="absolute top-[0.09rem] left-[1.14rem] text-[0.45rem] leading-[0.72rem] font-semibold font-urbanist text-white text-center flex items-center justify-center w-[1.35rem] h-[0.63rem]">
                      Reject
                    </div>
                  </div>
                </button>
              </div>
              <div className="absolute top-[4.01rem] left-[0rem] bg-gray-400 w-[9.06rem] h-[1.62rem]">
                <button className="cursor-pointer [border:none] p-0 bg-mediumseagreen-100 absolute top-[0rem] left-[0rem] rounded-[4.32px] w-[4.62rem] h-[1.26rem]">
                  <div className="absolute top-[0.23rem] left-[0.54rem] bg-gray-400 w-[3.54rem] h-[0.81rem]">
                    <img
                      className="absolute top-[0rem] left-[0rem] w-[0.81rem] h-[0.81rem]"
                      alt=""
                      src="/spantextlg.svg"
                    />
                    <b className="absolute top-[0.08rem] left-[0.99rem] text-[0.54rem] leading-[0.72rem] flex font-urbanist text-white text-center items-center justify-center w-[2.55rem] h-[0.63rem]">
                      Approved
                    </b>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] p-0 bg-salmon-100 absolute top-[0rem] left-[4.98rem] rounded-[4.32px] w-[3.72rem] h-[1.26rem]">
                  <div className="absolute top-[0.23rem] left-[0.54rem] bg-gray-400 w-[2.64rem] h-[0.81rem]" />
                  <img
                    className="absolute top-[0.23rem] left-[0.69rem] w-[0.81rem] h-[0.81rem]"
                    alt=""
                    src="/spantextlg2.svg"
                  />
                  <div className="absolute top-[0.31rem] left-[1.7rem] text-[0.45rem] leading-[0.72rem] font-semibold font-urbanist text-white text-center flex items-center justify-center w-[1.35rem] h-[0.63rem]">
                    Reject
                  </div>
                </button>
              </div>
              <div className="absolute top-[8.15rem] left-[0rem] bg-gray-400 w-[9.06rem] h-[1.62rem]">
                <button className="cursor-pointer [border:none] p-0 bg-mediumseagreen-100 absolute top-[0rem] left-[0rem] rounded-[4.32px] w-[4.62rem] h-[1.26rem]">
                  <div className="absolute top-[0.23rem] left-[0.54rem] bg-gray-400 w-[3.54rem] h-[0.81rem]">
                    <img
                      className="absolute top-[0rem] left-[0rem] w-[0.81rem] h-[0.81rem]"
                      alt=""
                      src="/spantextlg3.svg"
                    />
                    <b className="absolute top-[0.08rem] left-[0.99rem] text-[0.54rem] leading-[0.72rem] flex font-urbanist text-white text-center items-center justify-center w-[2.55rem] h-[0.63rem]">
                      Approved
                    </b>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] p-0 bg-salmon-100 absolute top-[0rem] left-[4.98rem] rounded-[4.32px] w-[3.72rem] h-[1.26rem]">
                  <img
                    className="absolute top-[0.23rem] left-[0.69rem] w-[0.81rem] h-[0.81rem]"
                    alt=""
                    src="/spantextlg4.svg"
                  />
                  <div className="absolute top-[0.31rem] left-[1.7rem] text-[0.45rem] leading-[0.72rem] font-semibold font-urbanist text-white text-center flex items-center justify-center w-[1.35rem] h-[0.63rem]">
                    Reject
                  </div>
                </button>
              </div>
              <div className="absolute top-[12.11rem] left-[0rem] bg-gray-400 w-[9.06rem] h-[1.62rem]">
                <button className="cursor-pointer [border:none] p-0 bg-mediumseagreen-100 absolute top-[0rem] left-[0rem] rounded-[4.32px] w-[4.62rem] h-[1.26rem]">
                  <div className="absolute top-[0.23rem] left-[0.54rem] bg-gray-400 w-[3.54rem] h-[0.81rem]">
                    <img
                      className="absolute top-[0rem] left-[0rem] w-[0.81rem] h-[0.81rem]"
                      alt=""
                      src="/spantextlg.svg"
                    />
                    <b className="absolute top-[0.08rem] left-[0.99rem] text-[0.54rem] leading-[0.72rem] flex font-urbanist text-white text-center items-center justify-center w-[2.55rem] h-[0.63rem]">
                      Approved
                    </b>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] p-0 bg-salmon-100 absolute top-[0rem] left-[4.98rem] rounded-[4.32px] w-[3.72rem] h-[1.26rem]">
                  <img
                    className="absolute top-[0.23rem] left-[0.69rem] w-[0.81rem] h-[0.81rem]"
                    alt=""
                    src="/spantextlg5.svg"
                  />
                  <div className="absolute top-[0.31rem] left-[1.7rem] text-[0.45rem] leading-[0.72rem] font-semibold font-urbanist text-white text-center flex items-center justify-center w-[1.35rem] h-[0.63rem]">
                    Reject
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="absolute top-[40.79rem] left-[4.78rem] text-[0.63rem] text-gray-2">
            Document Type
          </div>
          <div className="absolute top-[40.79rem] left-[14.9rem] text-[0.63rem] text-gray-2">
            Document
          </div>
          <div className="absolute top-[40.79rem] left-[29.13rem] text-[0.63rem] text-gray-2">
            Status
          </div>
          <div className="absolute top-[63.66rem] left-[2.7rem] rounded-[9.36px] bg-white box-border w-[37.86rem] h-[33.63rem] border-[0.7px] border-solid border-gainsboro-700" />
          <div className="absolute top-[63.03rem] left-[5.68rem] bg-gray-400 w-[32.46rem] h-[29.13rem] text-[0.63rem] text-slategray">
            <div className="absolute top-[2.52rem] left-[0rem] bg-gray-400 w-[32.46rem] h-[28.05rem]">
              <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[32.44rem] h-[26.63rem]">
                <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[32.44rem] h-[0.94rem]">
                  <div className="absolute top-[0.09rem] left-[0rem] leading-[0.95rem] uppercase font-medium flex items-center w-[6.28rem] h-[0.75rem]">
                    SUNDAY, 06 MARCH
                  </div>
                </div>
                <div className="absolute top-[1.67rem] left-[0rem] bg-gray-400 w-[32.44rem] h-[24.96rem] font-inter">
                  <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[32.44rem] h-[3.15rem] text-[0.54rem] text-whitesmoke-200">
                    <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[1.35rem] h-[3.15rem]">
                      <div className="absolute top-[0.18rem] left-[0rem] rounded-[7202.67px] bg-lightseagreen w-[1.35rem] h-[1.35rem]">
                        <div className="absolute top-[0.36rem] left-[0.31rem] leading-[1.35rem] flex items-center w-[0.74rem] h-[0.63rem]">
                          CP
                        </div>
                      </div>
                      <div className="absolute top-[1.97rem] left-[0.63rem] bg-gainsboro-200 w-[0.09rem] h-[1.19rem]" />
                    </div>
                    <div className="absolute top-[0.27rem] left-[2.07rem] bg-gray-400 w-[30.37rem] h-[0.94rem] text-[0.63rem] text-slategray">
                      <div className="absolute top-[0.29rem] left-[13.89rem] rounded-[7202.67px] bg-mediumseagreen-200 w-[0.36rem] h-[0.36rem]" />
                      <div className="absolute top-[0.09rem] left-[18.33rem] leading-[0.95rem] flex items-center w-[2.87rem] h-[0.75rem]">
                        08:50 PM
                      </div>
                      <div className="absolute top-[0.09rem] left-[14.43rem] leading-[0.95rem] font-semibold font-urbanist text-gray-300 flex items-center w-[3.36rem] h-[0.75rem]">
                        Approved
                      </div>
                      <div className="absolute top-[0.09rem] left-[11.09rem] leading-[0.95rem] flex items-center w-[2.62rem] h-[0.75rem]">
                        status to
                      </div>
                      <div className="absolute top-[0.09rem] left-[8.51rem] leading-[0.95rem] font-semibold font-urbanist text-gray-300">
                        Passport
                      </div>
                      <div className="absolute top-[0.09rem] left-[4.82rem] leading-[0.95rem] flex items-center w-[3.44rem] h-[0.75rem]">
                        has change
                      </div>
                      <div className="absolute top-[0.09rem] left-[0rem] leading-[0.95rem] font-semibold font-urbanist text-gray-300 flex items-center w-[4.79rem] h-[0.75rem]">
                        Carolyn Perkins
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[3.15rem] left-[0rem] bg-gray-400 w-[32.44rem] h-[6.77rem]">
                    <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[1.35rem] h-[6.77rem]">
                      <div className="absolute top-[0.18rem] left-[0rem] rounded-[7202.67px] bg-darkgray-200 w-[1.35rem] h-[1.35rem]">
                        <img
                          className="absolute top-[0rem] left-[0rem] rounded-[7202.67px] w-[1.35rem] h-[1.35rem] object-cover"
                          alt=""
                          src="/imgavatarimg@2x.png"
                        />
                        <img
                          className="absolute top-[0.01rem] left-[0rem] rounded-[7202.67px] w-[1.35rem] h-[1.35rem] object-cover"
                          alt=""
                          src="/imgavatarimg1@2x.png"
                        />
                        <img
                          className="absolute top-[0rem] left-[0rem] rounded-[7202.67px] w-[1.35rem] h-[1.35rem] object-cover"
                          alt=""
                          src="/imgavatarimg2@2x.png"
                        />
                      </div>
                      <div className="absolute top-[1.97rem] left-[0.63rem] bg-gainsboro-200 w-[0.09rem] h-[4.8rem]" />
                    </div>
                    <div className="absolute top-[0.27rem] left-[2.07rem] bg-gray-400 w-[30.37rem] h-[5.42rem]">
                      <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[30.37rem] h-[0.94rem]">
                        <div className="absolute top-[0.09rem] left-[10.93rem] leading-[0.95rem] flex items-center w-[2.88rem] h-[0.75rem]">
                          08:23 PM
                        </div>
                        <div className="absolute top-[0.09rem] left-[9.01rem] leading-[0.95rem] font-semibold font-urbanist text-gray-300 flex items-center w-[1.37rem] h-[0.75rem]">
                          Post
                        </div>
                        <div className="absolute top-[0.09rem] left-[3.63rem] leading-[0.95rem] flex items-center w-[5.21rem] h-[0.75rem]">
                          comment on your
                        </div>
                        <div className="absolute top-[0.09rem] left-[0rem] leading-[0.95rem] font-semibold font-urbanist text-gray-300 flex items-center w-[3.45rem] h-[0.75rem]">
                          Ron Vargas
                        </div>
                      </div>
                      <div className="absolute top-[1.67rem] left-[0rem] rounded-[5.76px] bg-white box-border w-[30.37rem] h-[3.75rem] border-[0.5px] border-solid border-gainsboro-200">
                        <div className="absolute top-[0.03rem] left-[0.03rem] bg-gray-400 w-[30.31rem] h-[3.69rem]">
                          <div className="absolute top-[0.99rem] left-[0.9rem] leading-[0.95rem] flex items-center w-[28.27rem] h-[1.69rem]">
                            <span className="[line-break:anywhere] w-full">
                              <p className="m-0">
                                Fine, Java MIGHT be a good example of what a
                                programming language should be like. But Java
                              </p>
                              <p className="m-0">
                                applications are good examples of what
                                applications SHOULDN'T be like.
                              </p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[9.92rem] left-[0rem] bg-gray-400 w-[32.44rem] h-[3.15rem] font-urbanist">
                    <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[1.35rem] h-[3.15rem]">
                      <img
                        className="absolute top-[0.18rem] left-[0rem] rounded-[7202.67px] w-[1.35rem] h-[1.35rem]"
                        alt=""
                        src="/spanavatar1.svg"
                      />
                      <div className="absolute top-[1.71rem] left-[0.63rem] bg-gainsboro-200 w-[0.09rem] h-[1.44rem]" />
                    </div>
                    <div className="absolute top-[0.27rem] left-[2.07rem] bg-gray-400 w-[30.37rem] h-[1.14rem]">
                      <div className="absolute top-[0.1rem] left-[0rem] bg-gray-400 w-[4.63rem] h-[0.94rem] text-gray-300">
                        <div className="absolute top-[0.09rem] left-[0rem] leading-[0.95rem] font-semibold flex items-center w-[4.63rem] h-[0.75rem]">
                          Joyce Freeman
                        </div>
                      </div>
                      <div className="absolute top-[0rem] left-[8.54rem] rounded-[7202.67px] bg-gray-400 box-border w-[4.18rem] h-[1.14rem] text-[0.54rem] border-[0.5px] border-solid border-gainsboro-200">
                        <div className="absolute top-[0.39rem] left-[0.48rem] rounded-[7202.67px] bg-crimson-100 w-[0.36rem] h-[0.36rem]" />
                        <div className="absolute top-[0.24rem] left-[1.11rem] leading-[0.72rem] font-semibold flex items-center w-[2.59rem] h-[0.63rem]">
                          Live Issue
                        </div>
                      </div>
                      <div className="absolute top-[0rem] left-[13.09rem] rounded-[7202.67px] bg-gray-400 box-border w-[3.86rem] h-[1.14rem] text-[0.54rem] border-[0.5px] border-solid border-gainsboro-200">
                        <div className="absolute top-[0.39rem] left-[0.48rem] rounded-[7202.67px] bg-dodgerblue w-[0.36rem] h-[0.36rem]" />
                        <div className="absolute top-[0.24rem] left-[1.11rem] leading-[0.72rem] font-semibold flex items-center w-[2.26rem] h-[0.63rem]">
                          Backend
                        </div>
                      </div>
                      <div className="absolute top-[0.19rem] left-[17.66rem] leading-[0.95rem] font-inter flex items-center w-[2.72rem] h-[0.75rem]">
                        07:10 PM
                      </div>
                      <div className="absolute top-[0.19rem] left-[4.81rem] leading-[0.95rem] font-inter flex items-center w-[3.38rem] h-[0.75rem]">
                        added tags
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[13.07rem] left-[0rem] bg-gray-400 w-[32.44rem] h-[3.15rem] text-gray-300 font-urbanist">
                    <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[1.35rem] h-[3.15rem]">
                      <img
                        className="absolute top-[0.18rem] left-[0rem] rounded-[7202.67px] w-[1.35rem] h-[1.35rem]"
                        alt=""
                        src="/spanavatar2.svg"
                      />
                      <div className="absolute top-[1.71rem] left-[0.63rem] bg-gainsboro-200 w-[0.09rem] h-[1.44rem]" />
                    </div>
                    <div className="absolute top-[0.27rem] left-[2.07rem] bg-gray-400 w-[30.37rem] h-[0.94rem]">
                      <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[3.21rem] h-[0.94rem]">
                        <div className="absolute top-[0.09rem] left-[0rem] leading-[0.95rem] font-semibold flex items-center w-[3.21rem] h-[0.75rem]">
                          Luke Cook
                        </div>
                      </div>
                      <div className="absolute top-[0rem] left-[12.61rem] bg-gray-400 w-[2.68rem] h-[0.94rem]">
                        <div className="absolute top-[0.09rem] left-[0rem] leading-[0.95rem] font-semibold flex items-center w-[2.68rem] h-[0.75rem]">
                          PD-1092
                        </div>
                      </div>
                      <div className="absolute top-[0.09rem] left-[15.83rem] leading-[0.95rem] font-inter text-slategray flex items-center w-[2.88rem] h-[0.75rem]">
                        05:48 PM
                      </div>
                      <div className="absolute top-[0.09rem] left-[9.99rem] leading-[0.95rem] font-inter text-slategray flex items-center w-[2.44rem] h-[0.75rem]">
                        to ticket
                      </div>
                      <div className="absolute top-[0.09rem] left-[5.46rem] leading-[0.95rem] font-semibold flex items-center w-[4.35rem] h-[0.75rem]">
                        document.csv
                      </div>
                      <div className="absolute top-[0.09rem] left-[3.39rem] leading-[0.95rem] font-inter text-slategray flex items-center w-[1.89rem] h-[0.75rem]">
                        added
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[16.23rem] left-[0rem] bg-gray-400 w-[32.44rem] h-[6.77rem]">
                    <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[1.35rem] h-[6.77rem]">
                      <div className="absolute top-[0.18rem] left-[0rem] rounded-[7202.67px] bg-darkgray-200 w-[1.35rem] h-[1.35rem]">
                        <img
                          className="absolute top-[0rem] left-[0rem] rounded-[7202.67px] w-[1.35rem] h-[1.35rem] object-cover"
                          alt=""
                          src="/imgavatarimg3@2x.png"
                        />
                      </div>
                      <div className="absolute top-[1.97rem] left-[0.63rem] bg-gainsboro-200 w-[0.09rem] h-[4.8rem]" />
                    </div>
                    <div className="absolute top-[0.27rem] left-[2.07rem] bg-gray-400 w-[30.37rem] h-[5.42rem]">
                      <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[30.37rem] h-[0.94rem]">
                        <div className="absolute top-[0.09rem] left-[14.9rem] leading-[0.95rem] flex items-center w-[2.88rem] h-[0.75rem]">
                          04:47 PM
                        </div>
                        <div className="absolute top-[0.09rem] left-[12.99rem] leading-[0.95rem] font-semibold font-urbanist text-gray-300 flex items-center w-[1.37rem] h-[0.75rem]">
                          Post
                        </div>
                        <div className="absolute top-[0.09rem] left-[4.19rem] leading-[0.95rem] flex items-center w-[8.62rem] h-[0.75rem]">
                          mentioned you in a comment
                        </div>
                        <div className="absolute top-[0.09rem] left-[0rem] leading-[0.95rem] font-semibold font-urbanist text-gray-300 flex items-center w-[4.01rem] h-[0.75rem]">
                          Tara Fletcher
                        </div>
                      </div>
                      <div className="absolute top-[1.67rem] left-[0rem] rounded-[5.76px] bg-white box-border w-[30.37rem] h-[3.75rem] border-[0.5px] border-solid border-gainsboro-200">
                        <div className="absolute top-[0.03rem] left-[0.03rem] bg-gray-400 w-[30.31rem] h-[3.69rem]">
                          <div className="absolute top-[0.99rem] left-[3.95rem] leading-[0.95rem] flex items-center w-[24.96rem] h-[0.75rem]">
                            One of the main causes of the fall of the Roman
                            Empire was that-lacking zero-they
                          </div>
                          <div className="absolute top-[1.94rem] left-[0.9rem] leading-[0.95rem] flex items-center w-[19.95rem] h-[0.75rem]">
                            had no way to indicate successful termination of
                            their C programs.
                          </div>
                          <b className="absolute top-[0.99rem] left-[0.9rem] leading-[0.95rem] flex items-center w-[3.05rem] h-[0.75rem]">
                            @Carolyn
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[22.99rem] left-[0rem] bg-gray-400 w-[32.44rem] h-[1.97rem] text-[0.54rem] text-whitesmoke-200">
                    <div className="absolute top-[0.18rem] left-[0rem] rounded-[7202.67px] bg-hotpink w-[1.35rem] h-[1.35rem]">
                      <div className="absolute top-[0.36rem] left-[0.27rem] leading-[1.35rem] flex items-center w-[0.82rem] h-[0.63rem]">
                        LW
                      </div>
                    </div>
                    <div className="absolute top-[0.27rem] left-[2.07rem] bg-gray-400 w-[30.37rem] h-[0.94rem] text-[0.63rem] text-gray-300 font-urbanist">
                      <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[3.82rem] h-[0.94rem]">
                        <div className="absolute top-[0.09rem] left-[0rem] leading-[0.95rem] font-semibold flex items-center w-[3.82rem] h-[0.75rem]">
                          Lee Wheeler
                        </div>
                      </div>
                      <div className="absolute top-[0rem] left-[12.33rem] bg-gray-400 w-[3.46rem] h-[0.94rem]">
                        <div className="absolute top-[0.09rem] left-[0rem] leading-[0.95rem] font-semibold flex items-center w-[3.46rem] h-[0.75rem]">
                          Gail Barnes
                        </div>
                      </div>
                      <div className="absolute top-[0.09rem] left-[16.32rem] leading-[0.95rem] font-inter text-slategray flex items-center w-[2.81rem] h-[0.75rem]">
                        01:43 PM
                      </div>
                      <div className="absolute top-[0.09rem] left-[11.54rem] leading-[0.95rem] font-inter text-slategray flex items-center w-[0.6rem] h-[0.75rem]">
                        to
                      </div>
                      <div className="absolute top-[0.09rem] left-[8.69rem] leading-[0.95rem] font-semibold flex items-center w-[2.68rem] h-[0.75rem]">
                        PD-1092
                      </div>
                      <div className="absolute top-[0.09rem] left-[3.99rem] leading-[0.95rem] font-inter text-slategray flex items-center w-[4.51rem] h-[0.75rem]">
                        assigned ticket
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[0.8rem] left-[0.06rem] bg-gray-400 w-[2.19rem] h-[1.81rem]">
          <button
            className="cursor-pointer [border:none] p-0 bg-gray-400 absolute top-[0rem] left-[0.18rem] rounded-[7202.67px] w-[1.8rem] h-[1.8rem]"
            onClick={openNavbarDriverProfileDetail}
          >
            <img
              className="absolute top-[0.36rem] left-[0.36rem] w-[1.08rem] h-[1.08rem]"
              alt=""
              src="/div.svg"
            />
          </button>
          <img
            className="absolute top-[0rem] left-[2.34rem] rounded-[7202.67px] w-[1.8rem] h-[1.8rem] hidden"
            alt=""
            src="/divheaderactionitem.svg"
          />
        </div>
      </div>
      {isNavbarDriverProfileDetailOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeNavbarDriverProfileDetail}
        >
          <NavbarDriverProfileDetail onClose={closeNavbarDriverProfileDetail} />
        </PortalDrawer>
      )}
    </>
  );
};

export default DriverProfileDetail;
