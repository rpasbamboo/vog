import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NavbarComingSoon = ({ onClose }) => {
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
            targetElement.classList.add("animate");
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
    navigate("/retargetting");
  }, [navigate]);

  const onComponent13Click = useCallback(() => {
    navigate("/billing");
  }, [navigate]);

  const onComponent14Click = useCallback(() => {
    navigate("/setting");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/log-in1");
  }, [navigate]);

  return (
    <div
      className="bg-white box-border w-[180.7px] h-full overflow-hidden [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] max-w-[90%] text-left text-[12.86px] text-gray-200 font-lexend border-r-[2.1px] border-solid border-gainsboro-300"
      data-animate-on-scroll
    >
      <div className="absolute top-[17.9px] left-[0px] bg-gray-400 w-[178.6px] h-[45.7px]">
        <div className="absolute top-[11.4px] left-[17.9px] w-[125px] h-[25px]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/asset-84x3@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[112.9px] left-[0px] w-[178.6px] flex flex-col items-start justify-start gap-[5.71px]">
        <div className="self-stretch flex flex-col items-center justify-center">
          <button
            className="cursor-pointer [border:none] py-[11.428622245788574px] px-[23.571533203125px] bg-[transparent] w-[142.9px] flex flex-row items-center justify-start box-border gap-[5.71px]"
            onClick={onComponent1Click}
          >
            <img
              className="relative w-[12.9px] h-[12.9px] overflow-hidden shrink-0"
              alt=""
              src="/growth.svg"
            />
            <div className="relative text-3xs tracking-[0.02em] leading-[137.1%] font-medium font-lexend text-gray-100 text-left">
              Analytics
            </div>
          </button>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center">
          <button
            className="cursor-pointer [border:none] py-[11.428622245788574px] px-[23.571533203125px] bg-[transparent] w-[142.9px] flex flex-row items-center justify-start box-border gap-[5.71px]"
            onClick={onComponent11Click}
          >
            <img
              className="relative w-[12.9px] h-[12.9px] overflow-hidden shrink-0"
              alt=""
              src="/carprofile.svg"
            />
            <div className="relative text-3xs tracking-[0.02em] leading-[137.1%] font-medium font-lexend text-gray-100 text-left">
              About campaign
            </div>
          </button>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center relative gap-[39.29px]">
          <button className="cursor-pointer [border:none] py-[11.428622245788574px] px-[22.85724449157715px] bg-lavenderblush rounded-[11.43px] shadow-[0px_2.9px_41.43px_rgba(0,_0,_0,_0.07)] w-[156.4px] flex flex-row items-center justify-start box-border gap-[5.71px] z-[0]">
            <img
              className="relative w-[12.9px] h-[12.9px] overflow-hidden shrink-0"
              alt=""
              src="/rocketlaunch1.svg"
            />
            <div className="relative text-3xs tracking-[0.02em] leading-[137.1%] font-medium font-lexend text-red-100 text-left">
              Drivers information
            </div>
          </button>
          <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11.35px)] left-[0px] rounded-tl-none rounded-tr-[2.86px] rounded-br-[2.86px] rounded-bl-none bg-red-100 w-[4.3px] h-[22.9px] z-[1]" />
        </div>
        <div className="self-stretch flex flex-col items-center justify-center">
          <button
            className="cursor-pointer [border:none] py-[11.428622245788574px] px-[23.571533203125px] bg-[transparent] w-[142.9px] flex flex-row items-center justify-start box-border gap-[5.71px]"
            onClick={onComponent12Click}
          >
            <img
              className="relative w-[12.9px] h-[12.9px] overflow-hidden shrink-0"
              alt=""
              src="/arrowscounterclockwise.svg"
            />
            <div className="relative text-3xs tracking-[0.02em] leading-[137.1%] font-medium font-lexend text-gray-100 text-left">
              Retargeting
            </div>
          </button>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center">
          <button
            className="cursor-pointer [border:none] py-[11.428622245788574px] px-[23.571533203125px] bg-[transparent] w-[142.9px] flex flex-row items-center justify-start box-border gap-[5.71px]"
            onClick={onComponent13Click}
          >
            <img
              className="relative w-[12.9px] h-[12.9px] overflow-hidden shrink-0"
              alt=""
              src="/dollar-coin1.svg"
            />
            <div className="relative text-3xs tracking-[0.02em] leading-[137.1%] font-medium font-lexend text-gray-100 text-left">
              Billing
            </div>
          </button>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center">
          <button
            className="cursor-pointer [border:none] py-[11.428622245788574px] px-[23.571533203125px] bg-[transparent] w-[142.9px] flex flex-row items-center justify-start box-border gap-[5.71px]"
            onClick={onComponent14Click}
          >
            <img
              className="relative w-[12.9px] h-[12.9px] overflow-hidden shrink-0"
              alt=""
              src="/setting.svg"
            />
            <div className="relative text-3xs tracking-[0.02em] leading-[137.1%] font-medium font-lexend text-gray-100 text-left">
              Settings
            </div>
          </button>
        </div>
      </div>
      <div
        className="absolute top-[480px] right-[19.3px] w-[144.3px] h-[128.3px] cursor-pointer"
        onClick={onGroupContainerClick}
      >
        <div className="absolute top-[21.4px] right-[0px] rounded-[11.43px] bg-white shadow-[0px_7.9px_40px_rgba(0,_0,_0,_0.07)] box-border w-[144.3px] flex flex-col items-start justify-center pt-[25.714399337768555px] px-[11.428622245788574px] pb-[11.428622245788574px] gap-[8.57px] border-[0.7px] border-solid border-gainsboro-100">
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="relative tracking-[0.02em] leading-[137.1%] font-medium">
              popeyes
            </div>
            <div className="relative text-[8.57px] tracking-[0.01em] leading-[137.1%] text-gray-100">
              Brand
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-[8.571466445922852px] px-[22.85724449157715px] bg-orangered-200 self-stretch rounded-[8.57px] flex flex-row items-center justify-center gap-[2.86px]">
            <img
              className="relative w-[12.9px] h-[12.9px] overflow-hidden shrink-0"
              alt=""
              src="/logout.svg"
            />
            <div className="relative text-3xs tracking-[0.02em] leading-[137.1%] font-medium font-lexend text-orangered-100 text-left">
              Logout
            </div>
          </button>
        </div>
        <img
          className="absolute top-[0px] left-[50.7px] rounded-[50%] w-[42.9px] h-[42.9px] object-cover"
          alt=""
          src="/ellipse-12@2x.png"
        />
      </div>
    </div>
  );
};

export default NavbarComingSoon;
