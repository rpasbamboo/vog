import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const GettingStarted04 = () => {
  const navigate = useNavigate();

  const onIconlyClick = useCallback(() => {
    navigate("/setting");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[37.78rem] overflow-hidden text-center text-[0.74rem] text-darkslategray-600 font-body-large-semibold">
      <img
        className="absolute top-[0rem] left-[0rem] w-[53.13rem] h-[1.63rem]"
        alt=""
        src="/iphone-x-or-newer.svg"
      />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[2.54rem] left-[0.93rem] w-[0.74rem] h-[0.74rem]"
        onClick={onIconlyClick}
      >
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/iconlytwotonearrow--left-22.svg"
        />
      </button>
      <div className="absolute right-[12.81rem] bottom-[6.23rem] w-[37.08rem] h-[25.34rem] flex flex-col items-start justify-between">
        <div className="w-[37.08rem] flex flex-col items-start justify-start gap-[0.74rem]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-start">
            <div className="w-[12.62rem] flex flex-row items-center justify-start py-[0rem] pr-[1.14rem] pl-[0rem] box-border gap-[3.39rem]">
              <div className="flex flex-row items-center justify-start gap-[0.55rem]">
                <img
                  className="relative w-[0.81rem] h-[0.81rem] overflow-hidden shrink-0"
                  alt=""
                  src="/component-471.svg"
                />
                <div className="relative text-[0.59rem] capitalize font-medium font-body-large-semibold text-darkslategray-600 text-center">
                  personal information
                </div>
              </div>
              <img
                className="relative w-[0.66rem] h-[0.66rem]"
                alt=""
                src="/arrowleft1.svg"
              />
            </div>
            <div className="w-[9.74rem] flex flex-col items-start justify-center py-[0.41rem] px-[0rem] box-border">
              <div className="relative text-[0.44rem] capitalize font-body-large-semibold text-dimgray-100 text-left hidden">
                approved
              </div>
              <div className="relative box-border w-[10.66rem] h-[0.04rem] border-t-[0.6px] border-solid border-gainsboro-500" />
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-start">
            <div className="w-[12.62rem] flex flex-row items-center justify-start py-[0rem] pr-[1.14rem] pl-[0rem] box-border gap-[3.8rem]">
              <div className="flex flex-row items-center justify-start gap-[0.55rem]">
                <img
                  className="relative w-[0.81rem] h-[0.81rem] overflow-hidden shrink-0"
                  alt=""
                  src="/component-471.svg"
                />
                <div className="relative text-[0.59rem] capitalize font-medium font-body-large-semibold text-darkslategray-600 text-center">
                  vehicle information
                </div>
              </div>
              <img
                className="relative w-[0.66rem] h-[0.66rem]"
                alt=""
                src="/arrowleft2.svg"
              />
            </div>
            <div className="w-[9.74rem] flex flex-col items-start justify-center py-[0.41rem] px-[0rem] box-border">
              <div className="relative text-[0.44rem] capitalize font-body-large-semibold text-dimgray-100 text-left hidden">
                approved
              </div>
              <div className="relative box-border w-[10.66rem] h-[0.04rem] border-t-[0.6px] border-solid border-gainsboro-500" />
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-start">
            <div className="w-[12.62rem] flex flex-row items-center justify-start py-[0rem] pr-[1.14rem] pl-[0rem] box-border gap-[3.65rem]">
              <div className="flex flex-row items-center justify-start gap-[0.55rem]">
                <img
                  className="relative w-[0.81rem] h-[0.81rem] overflow-hidden shrink-0"
                  alt=""
                  src="/component-471.svg"
                />
                <div className="relative text-[0.59rem] capitalize font-medium font-body-large-semibold text-darkslategray-600 text-center">
                  address and routes
                </div>
              </div>
              <img
                className="relative w-[0.66rem] h-[0.66rem]"
                alt=""
                src="/arrowleft3.svg"
              />
            </div>
            <div className="w-[9.74rem] flex flex-col items-start justify-center py-[0.41rem] px-[0rem] box-border">
              <div className="relative text-[0.44rem] capitalize font-body-large-semibold text-dimgray-100 text-left hidden">
                approved
              </div>
              <div className="relative box-border w-[10.66rem] h-[0.04rem] border-t-[0.6px] border-solid border-gainsboro-500" />
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-start">
            <div className="w-[12.62rem] flex flex-row items-center justify-start py-[0rem] pr-[1.14rem] pl-[0rem] box-border gap-[5.17rem]">
              <div className="flex flex-row items-center justify-start gap-[0.55rem]">
                <img
                  className="relative w-[0.81rem] h-[0.81rem] overflow-hidden shrink-0"
                  alt=""
                  src="/component-472.svg"
                />
                <div className="relative text-[0.59rem] capitalize font-medium font-body-large-semibold text-darkslategray-600 text-center">
                  driving license
                </div>
              </div>
              <img
                className="relative w-[0.66rem] h-[0.66rem]"
                alt=""
                src="/arrowleft4.svg"
              />
            </div>
            <div className="w-[9.74rem] flex flex-col items-start justify-center py-[0.41rem] px-[0rem] box-border">
              <div className="relative text-[0.44rem] capitalize font-body-large-semibold text-dimgray-100 text-left hidden">
                approved
              </div>
              <div className="relative box-border w-[10.66rem] h-[0.04rem] border-t-[0.6px] border-solid border-gainsboro-500" />
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-start">
            <div className="w-[12.62rem] flex flex-row items-center justify-start py-[0rem] pr-[1.14rem] pl-[0rem] box-border gap-[4.94rem]">
              <div className="flex flex-row items-center justify-start gap-[0.55rem]">
                <img
                  className="relative w-[0.81rem] h-[0.81rem] overflow-hidden shrink-0"
                  alt=""
                  src="/component-472.svg"
                />
                <div className="relative text-[0.59rem] capitalize font-medium font-body-large-semibold text-darkslategray-600 text-center">
                  NIC Information
                </div>
              </div>
              <img
                className="relative w-[0.66rem] h-[0.66rem]"
                alt=""
                src="/arrowleft5.svg"
              />
            </div>
            <div className="w-[9.74rem] flex flex-col items-start justify-center py-[0.41rem] px-[0rem] box-border">
              <div className="relative text-[0.44rem] capitalize font-body-large-semibold text-dimgray-100 text-left hidden">
                approved
              </div>
              <div className="relative box-border w-[10.66rem] h-[0.04rem] border-t-[0.6px] border-solid border-gainsboro-500" />
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-start">
            <div className="w-[12.62rem] flex flex-row items-center justify-start py-[0rem] pr-[1.14rem] pl-[0rem] box-border gap-[5.35rem]">
              <div className="flex flex-row items-center justify-start gap-[0.55rem]">
                <img
                  className="relative w-[0.81rem] h-[0.81rem] overflow-hidden shrink-0"
                  alt=""
                  src="/component-472.svg"
                />
                <div className="relative text-[0.59rem] capitalize font-medium font-body-large-semibold text-darkslategray-600 text-center">
                  Vehicle image
                </div>
              </div>
              <img
                className="relative w-[0.66rem] h-[0.66rem]"
                alt=""
                src="/arrowleft6.svg"
              />
            </div>
            <div className="w-[9.74rem] flex flex-col items-start justify-center py-[0.41rem] px-[0rem] box-border">
              <div className="relative text-[0.44rem] capitalize font-body-large-semibold text-dimgray-100 text-left hidden">
                approved
              </div>
              <div className="relative box-border w-[10.66rem] h-[0.04rem] border-t-[0.6px] border-solid border-gainsboro-500" />
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-start">
            <div className="w-[12.62rem] flex flex-row items-center justify-start py-[0rem] pr-[1.14rem] pl-[0rem] box-border gap-[0.41rem]">
              <div className="flex flex-row items-center justify-start gap-[0.55rem]">
                <img
                  className="relative w-[0.81rem] h-[0.81rem] overflow-hidden shrink-0"
                  alt=""
                  src="/component-472.svg"
                />
                <div className="relative text-[0.59rem] capitalize font-medium font-body-large-semibold text-darkslategray-600 text-center">
                  vehicle registration document
                </div>
              </div>
              <img
                className="relative w-[0.66rem] h-[0.66rem]"
                alt=""
                src="/arrowleft7.svg"
              />
            </div>
            <div className="w-[9.74rem] flex flex-col items-start justify-center py-[0.41rem] px-[0rem] box-border">
              <div className="relative text-[0.44rem] capitalize font-body-large-semibold text-dimgray-100 text-left hidden">
                approved
              </div>
              <div className="relative box-border w-[10.66rem] h-[0.04rem] border-t-[0.6px] border-solid border-gainsboro-500" />
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-start">
            <div className="w-[12.62rem] flex flex-row items-center justify-start py-[0rem] pr-[1.14rem] pl-[0rem] box-border gap-[4.32rem]">
              <div className="flex flex-row items-center justify-start gap-[0.55rem]">
                <img
                  className="relative w-[0.81rem] h-[0.81rem] overflow-hidden shrink-0"
                  alt=""
                  src="/component-472.svg"
                />
                <div className="relative text-[0.59rem] capitalize font-medium font-body-large-semibold text-darkslategray-600 text-center">
                  vehicle insurance
                </div>
              </div>
              <img
                className="relative w-[0.66rem] h-[0.66rem]"
                alt=""
                src="/arrowleft8.svg"
              />
            </div>
            <div className="w-[9.74rem] flex flex-col items-start justify-center py-[0.41rem] px-[0rem] box-border">
              <div className="relative text-[0.44rem] capitalize font-body-large-semibold text-dimgray-100 text-left hidden">
                approved
              </div>
              <div className="relative box-border w-[10.66rem] h-[0.04rem] border-t-[0.6px] border-solid border-gainsboro-500" />
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-start">
            <div className="w-[12.62rem] flex flex-row items-center justify-start py-[0rem] pr-[1.14rem] pl-[0rem] box-border gap-[2.88rem]">
              <div className="flex flex-row items-center justify-start gap-[0.55rem]">
                <img
                  className="relative w-[0.81rem] h-[0.81rem] overflow-hidden shrink-0"
                  alt=""
                  src="/component-473.svg"
                />
                <div className="relative text-[0.59rem] capitalize font-medium font-body-large-semibold text-darkslategray-600 text-center">
                  billing proof (optional)
                </div>
              </div>
              <img
                className="relative w-[0.66rem] h-[0.66rem]"
                alt=""
                src="/arrowleft9.svg"
              />
            </div>
            <div className="w-[9.74rem] flex flex-col items-start justify-center py-[0.41rem] px-[0rem] box-border">
              <div className="relative text-[0.44rem] capitalize font-body-large-semibold text-dimgray-100 text-left hidden">
                approved
              </div>
              <div className="relative box-border w-[10.66rem] h-[0.04rem] border-t-[0.6px] border-solid border-gainsboro-500" />
            </div>
          </button>
        </div>
      </div>
      <div className="absolute top-[3.88rem] left-[17.27rem] flex flex-col items-center justify-start gap-[0.55rem]">
        <b className="relative capitalize">required steps</b>
        <div className="relative text-[0.44rem] capitalize inline-block w-[12.62rem]">
          Heres what you need to do to set up your account
        </div>
      </div>
      <div className="absolute bottom-[-0.01rem] left-[calc(50%_-_191.8px)] w-[14.39rem] h-[1.26rem]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute bottom-[0.29rem] left-[calc(50%_-_39.5px)] rounded-[59.03px] bg-steelblue-100 w-[4.94rem] h-[0.19rem]" />
        </div>
      </div>
    </div>
  );
};

export default GettingStarted04;
