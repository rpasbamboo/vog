import { useState, useCallback } from "react";
import NavbarAttribution from "../components/NavbarAttribution";
import PortalDrawer from "../components/PortalDrawer";

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
      <div className="relative bg-white w-full h-[40.18rem] overflow-hidden text-left text-[0.54rem] text-darkslategray-400 font-body-large-semibold">
        <div className="absolute top-[calc(50%_-_321.45px)] left-[0rem] bg-white w-[53.13rem] h-[40.18rem] overflow-hidden">
          <div className="absolute top-[0rem] left-[calc(50%_-_425px)] bg-white box-border w-[53.13rem] h-[2.86rem] text-slategray font-inter border-b-[0.5px] border-solid border-gainsboro-200">
            <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[43.43rem] h-[2.9rem]">
              <div className="absolute top-[0.56rem] left-[0.71rem] bg-gray-400 w-[4.29rem] h-[1.79rem]">
                <button
                  className="cursor-pointer [border:none] p-0 bg-gray-400 absolute top-[0rem] left-[0.18rem] rounded-[7142.14px] w-[1.79rem] h-[1.79rem]"
                  onClick={openNavbarAttribution}
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
                  src="/divheaderactionitem2.svg"
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
                    src="/svg.svg"
                  />
                  <div className="absolute top-[-0.04rem] left-[0.63rem] rounded-[7142.14px] bg-crimson-200 w-[0.36rem] h-[0.36rem]" />
                </div>
              </div>
              <img
                className="relative rounded-[7142.14px] w-[1.79rem] h-[1.79rem]"
                alt=""
                src="/div1.svg"
              />
              <div className="relative rounded-[7142.14px] bg-gray-400 w-[6.73rem] h-[2.37rem]">
                <img
                  className="absolute top-[0.44rem] left-[0.36rem] rounded-[7142.14px] w-[1.48rem] h-[1.48rem]"
                  alt=""
                  src="/spanavatar3.svg"
                />
                <div className="absolute top-[0.36rem] left-[2.14rem] bg-gray-400 w-[4.22rem] h-[1.65rem]">
                  <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[4.22rem] h-[0.71rem]">
                    <div className="absolute top-[0.03rem] left-[0rem] leading-[0.71rem] capitalize flex items-center w-[1.6rem] h-[0.63rem]">
                      Admin
                    </div>
                  </div>
                  <div className="absolute top-[0.71rem] left-[0rem] bg-gray-400 w-[4.22rem] h-[0.94rem] text-[0.63rem]">
                    <b className="absolute top-[0.09rem] left-[0rem] leading-[0.94rem] flex items-center w-[4.22rem] h-[0.74rem]">
                      Abdurrahman
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <b className="absolute top-[5.98rem] left-[calc(50%_-_265px)] text-[1.34rem] leading-[0.94rem]">
            This feature in under research and development
          </b>
          <img
            className="absolute top-[10.04rem] left-[calc(50%_-_177.1px)] w-[22.19rem] h-[14.15rem] overflow-hidden"
            alt=""
            src="/image-vector.svg"
          />
          <div className="absolute top-[29.6rem] left-[calc(50%_-_375.7px)] rounded-[11.43px] bg-white box-border w-[47.01rem] h-[7.73rem] overflow-hidden text-[0.89rem] border-[2.1px] border-solid border-whitesmoke-400">
            <div className="absolute top-[1.96rem] left-[calc(50%_-_248.15px)] leading-[0.94rem] font-semibold flex items-center w-[35.44rem]">
              Get exclusive early access to our upcoming features! Join the beta
              test now and share your feedback to shape the future of our
              product.
            </div>
            <a className="[text-decoration:none] absolute top-[4.96rem] left-[calc(50%_-_248.15px)] text-[0.71rem] leading-[0.89rem] font-bold text-salmon-200 cursor-pointer">
              Request Access
            </a>
            <img
              className="absolute top-[0rem] left-[0.71rem] w-[7.28rem] h-[7.28rem] overflow-hidden"
              alt=""
              src="/image-7-adobe-express-1.svg"
            />
          </div>
          <div className="absolute top-[26.88rem] left-[calc(50%_-_375px)] text-[1.12rem] leading-[0.94rem] font-semibold">
            Can’t wait ?
          </div>
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
