import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import NavbarBilling from "../components/NavbarBilling";
import PortalDrawer from "../components/PortalDrawer";

const Billing = () => {
  const [isNavbarBillingOpen, setNavbarBillingOpen] = useState(false);

  const openNavbarBilling = useCallback(() => {
    setNavbarBillingOpen(true);
  }, []);

  const closeNavbarBilling = useCallback(() => {
    setNavbarBillingOpen(false);
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
                  onClick={openNavbarBilling}
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
          <Link
            className="cursor-pointer [text-decoration:none] absolute top-[10.04rem] left-[calc(50%_-_177.1px)] w-[22.19rem] h-[14.15rem] overflow-hidden"
            to="/billing-invoice"
          >
            <img
              className="absolute h-[23.14%] w-[18.87%] top-[76.81%] right-[80.79%] bottom-[0.04%] left-[0.34%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector8.svg"
            />
            <img
              className="absolute h-[21.6%] w-[10.34%] top-[77.83%] right-[86.39%] bottom-[0.57%] left-[3.27%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector9.svg"
            />
            <img
              className="absolute h-[57.16%] w-[53.13%] top-[0%] right-[24.56%] bottom-[42.84%] left-[22.31%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector10.svg"
            />
            <img
              className="absolute h-[0.35%] w-[52.93%] top-[4.68%] right-[24.65%] bottom-[94.96%] left-[22.42%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector11.svg"
            />
            <img
              className="absolute h-[1.99%] w-[1.27%] top-[1.5%] right-[75.15%] bottom-[96.51%] left-[23.58%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector12.svg"
            />
            <img
              className="absolute h-[1.99%] w-[1.27%] top-[1.5%] right-[73.32%] bottom-[96.51%] left-[25.41%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector13.svg"
            />
            <img
              className="absolute h-[1.99%] w-[1.27%] top-[1.5%] right-[71.49%] bottom-[96.51%] left-[27.24%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector14.svg"
            />
            <img
              className="absolute h-[2.34%] w-[10.39%] top-[10.07%] right-[45.94%] bottom-[87.59%] left-[43.66%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector15.svg"
            />
            <img
              className="absolute h-[2.34%] w-[22.59%] top-[15.72%] right-[39.83%] bottom-[81.93%] left-[37.58%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector16.svg"
            />
            <img
              className="absolute h-[12.68%] w-[8.08%] top-[40.11%] right-[30.2%] bottom-[47.22%] left-[61.72%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector17.svg"
            />
            <img
              className="absolute h-[12.68%] w-[8.08%] top-[23.1%] right-[64.11%] bottom-[64.22%] left-[27.8%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector18.svg"
            />
            <img
              className="absolute h-[6.71%] w-[3.94%] top-[26.1%] right-[66.17%] bottom-[67.18%] left-[29.89%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector19.svg"
            />
            <img
              className="absolute h-[12.68%] w-[8.08%] top-[86.93%] right-[2.76%] bottom-[0.4%] left-[89.15%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector20.svg"
            />
            <img
              className="absolute h-[4.15%] w-[4.06%] top-[92.05%] right-[4.76%] bottom-[3.8%] left-[91.18%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector21.svg"
            />
            <img
              className="absolute h-[3.84%] w-[4.06%] top-[90.33%] right-[4.76%] bottom-[5.83%] left-[91.18%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector22.svg"
            />
            <img
              className="absolute h-[12.68%] w-[8.08%] top-[23.1%] right-[46.93%] bottom-[64.22%] left-[44.99%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector23.svg"
            />
            <img
              className="absolute h-[4.59%] w-[4.87%] top-[27.16%] right-[48.54%] bottom-[68.24%] left-[46.59%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector24.svg"
            />
            <img
              className="absolute h-[12.68%] w-[8.08%] top-[39.71%] right-[46.93%] bottom-[47.61%] left-[44.99%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector25.svg"
            />
            <img
              className="absolute h-[12.68%] w-[8.08%] top-[22.61%] right-[30.17%] bottom-[64.71%] left-[61.75%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector26.svg"
            />
            <img
              className="absolute h-[12.68%] w-[6.03%] top-[39.71%] right-[64.11%] bottom-[47.61%] left-[29.86%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector27.svg"
            />
            <img
              className="absolute h-[12.68%] w-[8.08%] top-[40.11%] right-[66.42%] bottom-[47.22%] left-[25.49%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector28.svg"
            />
            <img
              className="absolute h-[3.89%] w-[2.9%] top-[42.54%] right-[68.08%] bottom-[53.58%] left-[29.01%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector29.svg"
            />
            <img
              className="absolute h-[6.93%] w-[4.54%] top-[43.37%] right-[68.31%] bottom-[49.69%] left-[27.15%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector30.svg"
            />
            <img
              className="absolute h-[12.68%] w-[8.08%] top-[63.34%] right-[22.56%] bottom-[23.98%] left-[69.35%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector31.svg"
            />
            <img
              className="absolute h-[5.08%] w-[4.99%] top-[67.14%] right-[24.11%] bottom-[27.78%] left-[70.9%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector32.svg"
            />
            <img
              className="absolute h-[7.77%] w-[1.83%] top-[90.37%] right-[76.59%] bottom-[1.86%] left-[21.58%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector33.svg"
            />
            <img
              className="absolute h-[2.78%] w-[4.06%] top-[97.17%] right-[74.11%] bottom-[0.04%] left-[21.83%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector34.svg"
            />
            <img
              className="absolute h-[7.51%] w-[1.83%] top-[90.5%] right-[88.73%] bottom-[1.99%] left-[9.44%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector35.svg"
            />
            <img
              className="absolute h-[2.34%] w-[3.89%] top-[97.44%] right-[86.93%] bottom-[0.22%] left-[9.18%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector36.svg"
            />
            <img
              className="absolute h-[32.29%] w-[14.76%] top-[63.25%] right-[76.11%] bottom-[4.46%] left-[9.13%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector37.svg"
            />
            <img
              className="absolute h-[7.77%] w-[4.96%] top-[41.08%] right-[82.31%] bottom-[51.15%] left-[12.73%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector38.svg"
            />
            <img
              className="absolute h-[17.98%] w-[6.79%] top-[50.04%] right-[81.41%] bottom-[31.98%] left-[11.8%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector39.svg"
            />
            <img
              className="absolute h-[5.48%] w-[4.9%] top-[49.25%] right-[72.42%] bottom-[45.27%] left-[22.68%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector40.svg"
            />
            <img
              className="absolute h-[7.46%] w-[12.14%] top-[50.04%] right-[74.31%] bottom-[42.49%] left-[13.55%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector41.svg"
            />
            <img
              className="absolute h-[22.13%] w-[12.9%] top-[38.91%] right-[82.42%] bottom-[38.96%] left-[4.68%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector42.svg"
            />
            <img
              className="absolute h-[23.41%] w-[4.25%] top-[54.68%] right-[10.31%] bottom-[21.91%] left-[85.44%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector43.svg"
            />
            <img
              className="absolute h-[20.45%] w-[3.61%] top-[76.94%] right-[17.24%] bottom-[2.61%] left-[79.15%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector44.svg"
            />
            <img
              className="absolute h-[20.45%] w-[3.61%] top-[77.43%] right-[11.97%] bottom-[2.12%] left-[84.42%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector45.svg"
            />
            <img
              className="absolute h-[2.47%] w-[4.08%] top-[97.22%] right-[18.79%] bottom-[0.31%] left-[77.13%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector46.svg"
            />
            <img
              className="absolute h-[2.47%] w-[4.08%] top-[97.48%] right-[13.49%] bottom-[0.04%] left-[82.42%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector47.svg"
            />
            <img
              className="absolute h-[8.17%] w-[5.21%] top-[37.81%] right-[13.52%] bottom-[54.02%] left-[81.27%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector48.svg"
            />
            <img
              className="absolute h-[23.28%] w-[9.63%] top-[47.26%] right-[10.14%] bottom-[29.46%] left-[80.23%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector49.svg"
            />
            <img
              className="absolute h-[4.81%] w-[2.34%] top-[51.86%] right-[10.03%] bottom-[43.33%] left-[87.63%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector50.svg"
            />
            <img
              className="absolute h-[14.31%] w-[10.17%] top-[68.95%] right-[11.15%] bottom-[16.74%] left-[78.68%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector51.svg"
            />
            <img
              className="absolute h-[17.23%] w-[6.73%] top-[52.34%] right-[17.13%] bottom-[30.43%] left-[76.14%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector52.svg"
            />
            <img
              className="absolute h-[7.38%] w-[3.66%] top-[48.9%] right-[16.48%] bottom-[43.73%] left-[79.86%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector53.svg"
            />
            <img
              className="absolute h-[9.67%] w-[6.17%] top-[36.09%] right-[12.51%] bottom-[54.24%] left-[81.32%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector54.svg"
            />
            <img
              className="absolute h-[0.35%] w-full top-[99.69%] right-[0%] bottom-[-0.04%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector55.svg"
            />
            <img
              className="absolute h-[1.02%] w-[3.61%] top-[48.1%] right-[32.45%] bottom-[50.88%] left-[63.94%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector56.svg"
            />
            <img
              className="absolute h-[1.02%] w-[3.61%] top-[45.94%] right-[32.45%] bottom-[53.05%] left-[63.94%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector57.svg"
            />
            <img
              className="absolute h-[1.02%] w-[3.61%] top-[43.77%] right-[32.45%] bottom-[55.21%] left-[63.94%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector58.svg"
            />
          </Link>
          <div className="absolute top-[29.6rem] left-[calc(50%_-_375.7px)] rounded-[11.43px] bg-white box-border w-[47.01rem] h-[7.73rem] overflow-hidden text-[0.89rem] border-[2.1px] border-solid border-whitesmoke-400">
            <div className="absolute top-[1.96rem] left-[calc(50%_-_248.15px)] leading-[0.94rem] font-semibold flex items-center w-[35.44rem]">
              Get exclusive early access to our upcoming features! Join the beta
              test now and share your feedback to shape the future of our
              product.
            </div>
            <a className="[text-decoration:none] absolute top-[4.96rem] left-[calc(50%_-_248.15px)] text-[0.71rem] leading-[0.89rem] font-bold text-salmon-200">
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
      {isNavbarBillingOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeNavbarBilling}
        >
          <NavbarBilling onClose={closeNavbarBilling} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Billing;
