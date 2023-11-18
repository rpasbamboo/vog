import { useState, useCallback } from "react";
import NavbarBillingInvoice from "../components/NavbarBillingInvoice";
import PortalDrawer from "../components/PortalDrawer";

const BillingInvoice = () => {
  const [isNavbarBillingInvoiceOpen, setNavbarBillingInvoiceOpen] =
    useState(false);

  const openNavbarBillingInvoice = useCallback(() => {
    setNavbarBillingInvoiceOpen(true);
  }, []);

  const closeNavbarBillingInvoice = useCallback(() => {
    setNavbarBillingInvoiceOpen(false);
  }, []);

  return (
    <>
      <div className="relative bg-white w-full h-[54.6rem] overflow-hidden text-left text-[0.54rem] text-slategray font-inter">
        <div className="absolute top-[calc(50%_-_436.8px)] left-[0rem] bg-white w-[53.13rem] h-[54.6rem] overflow-hidden">
          <div className="absolute top-[0rem] left-[calc(50%_-_425px)] bg-white box-border w-[53.13rem] h-[2.86rem] border-b-[0.5px] border-solid border-gainsboro-200">
            <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[43.43rem] h-[2.9rem]">
              <div className="absolute top-[0.56rem] left-[0.71rem] bg-gray-400 w-[4.29rem] h-[1.79rem]">
                <button
                  className="cursor-pointer [border:none] p-0 bg-gray-400 absolute top-[0rem] left-[0.18rem] rounded-[7142.14px] w-[1.79rem] h-[1.79rem]"
                  onClick={openNavbarBillingInvoice}
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
                  src="/divheaderactionitem1.svg"
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
          <div className="absolute top-[8.08rem] left-[calc(50%_-_325px)] rounded-[5.71px] bg-white box-border w-[40.58rem] h-[44.96rem] text-[0.63rem] border-[2.1px] border-solid border-whitesmoke-400">
            <div className="absolute top-[0.03rem] left-[0.03rem] bg-gray-400 w-[40.51rem] h-[43.53rem]">
              <div className="absolute top-[0.89rem] left-[0.89rem] bg-gray-400 w-[38.72rem] h-[9.64rem]">
                <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[9.04rem] h-[9.64rem]">
                  <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[9.04rem] h-[2.86rem]">
                    <div className="absolute top-[0.64rem] left-[0.01rem] w-[7.81rem] h-[1.56rem]">
                      <img
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/asset-84x@2x.png"
                      />
                    </div>
                  </div>
                  <div className="absolute top-[3.41rem] left-[0.01rem] bg-gray-400 w-[12.46rem] h-[5rem]">
                    <div className="absolute top-[4.15rem] left-[0rem] bg-gray-400 w-[2.04rem] h-[0.74rem]">
                      <div className="absolute top-[0rem] left-[0rem] [text-decoration:underline] leading-[0.94rem] flex items-center w-[2.04rem] h-[0.74rem]">
                        Phone:
                      </div>
                    </div>
                    <div className="absolute top-[4.06rem] left-[2.04rem] leading-[0.94rem]">
                      (94) 76-901-6271
                    </div>
                    <div className="absolute top-[3.13rem] left-[0rem] leading-[0.94rem]">
                      Dehiwalla, Colombo - 06, Sri Lanka 00600
                    </div>
                    <div className="absolute top-[2.19rem] left-[0rem] leading-[0.94rem]">
                      12/5 Balapokuna Road
                    </div>
                    <div className="absolute top-[-0.01rem] left-[0rem] text-[0.8rem] leading-[1.25rem] font-semibold text-gray-300">
                      Vegatise, Pvt.
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0.71rem] left-[27.4rem] bg-gray-400 w-[11.32rem] h-[8.21rem] text-gray-300">
                  <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[11.32rem] h-[2.19rem] text-[0.89rem]">
                    <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[11.32rem] h-[1.25rem]">
                      <div className="absolute top-[0rem] left-[0rem] leading-[1.25rem] font-semibold">
                        Invoice #
                      </div>
                      <div className="absolute top-[0.09rem] left-[3.89rem] leading-[1.25rem] font-semibold flex items-center w-[2.85rem] h-[1.07rem]">
                        36223
                      </div>
                    </div>
                    <div className="absolute top-[1.34rem] left-[0rem] bg-gray-400 w-[8.58rem] h-[0.74rem] text-[0.63rem] text-slategray">
                      <div className="absolute top-[0rem] left-[0rem] leading-[0.94rem] flex items-center w-[1.56rem] h-[0.74rem]">
                        Date:
                      </div>
                      <div className="absolute top-[-0.09rem] left-[1.74rem] leading-[0.94rem]">
                        Friday, 04 May, 2023
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[4.33rem] left-[0rem] bg-gray-400 w-[11.32rem] h-[2.23rem] text-slategray">
                    <img
                      className="absolute top-[0rem] left-[0rem] w-[0.89rem] h-[0.89rem] overflow-hidden"
                      alt=""
                      src="/svg1.svg"
                    />
                    <div className="absolute top-[0rem] left-[1.43rem] bg-gray-400 w-[9.89rem] h-[2.23rem]">
                      <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[9.89rem] h-[0.94rem]">
                        <div className="absolute top-[0rem] left-[0rem] leading-[0.94rem]">
                          12/5 Balapokuna Road, Dehiwala
                        </div>
                      </div>
                      <div className="absolute top-[1.12rem] left-[0rem] bg-gray-400 w-[9.89rem] h-[0.94rem]">
                        <div className="absolute top-[0rem] left-[0rem] leading-[0.94rem]">
                          Colombo - 06, Sri Lanka
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[7.28rem] left-[0rem] bg-gray-400 w-[11.32rem] h-[0.94rem] text-slategray">
                    <img
                      className="absolute top-[0rem] left-[0rem] w-[0.89rem] h-[0.89rem] overflow-hidden"
                      alt=""
                      src="/svg2.svg"
                    />
                    <div className="absolute top-[0rem] left-[1.43rem] bg-gray-400 w-[4.77rem] h-[0.94rem]">
                      <div className="absolute top-[0rem] left-[0rem] leading-[0.94rem]">
                        (94) 76-901-6271
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[2.73rem] left-[0rem] text-[0.71rem] leading-[1.07rem] font-semibold">
                    Abdurrahman Ithisham
                  </div>
                </div>
              </div>
              <div className="absolute top-[12.32rem] left-[0.89rem] bg-gray-400 w-[38.72rem] h-[27.11rem]">
                <div className="absolute top-[0rem] left-[0rem] bg-whitesmoke-100 w-[38.72rem] h-[1.8rem] text-[0.54rem]">
                  <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[38.72rem] h-[1.8rem]">
                    <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[15.03rem] h-[1.8rem]">
                      <div className="absolute top-[0.56rem] left-[1.07rem] tracking-[0.43px] leading-[0.71rem] uppercase font-semibold flex items-center w-[2.83rem] h-[0.63rem]">
                        PRODUCT
                      </div>
                    </div>
                    <div className="absolute top-[0rem] left-[15.03rem] bg-gray-400 w-[6.75rem] h-[1.8rem]">
                      <div className="absolute top-[0.56rem] left-[1.07rem] tracking-[0.43px] leading-[0.71rem] uppercase font-semibold flex items-center w-[1.7rem] h-[0.63rem]">
                        PRICE
                      </div>
                    </div>
                    <div className="absolute top-[0rem] left-[21.78rem] bg-gray-400 w-[8.95rem] h-[1.8rem]">
                      <div className="absolute top-[0.56rem] left-[1.07rem] tracking-[0.43px] leading-[0.71rem] uppercase font-semibold flex items-center w-[3.04rem] h-[0.63rem]">
                        QUANTITY
                      </div>
                    </div>
                    <div className="absolute top-[0rem] left-[30.73rem] bg-gray-400 w-[7.99rem] h-[1.8rem]">
                      <div className="absolute top-[0.56rem] left-[1.07rem] tracking-[0.43px] leading-[0.71rem] uppercase font-semibold flex items-center w-[1.87rem] h-[0.63rem]">
                        TOTAL
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[1.8rem] left-[0rem] bg-gray-400 box-border w-[38.72rem] h-[14.24rem] border-t-[0.5px] border-solid border-gainsboro-200">
                  <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[38.72rem] h-[5.12rem]">
                    <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[15.03rem] h-[5.12rem]">
                      <div className="absolute top-[0.73rem] left-[1.43rem] bg-gray-400 w-[5.59rem] h-[3.66rem]">
                        <div className="absolute top-[1.43rem] left-[0rem] bg-gray-400 w-[5.59rem] h-[0.94rem]">
                          <div className="absolute top-[0.09rem] left-[0rem] bg-gray-400 w-[1.93rem] h-[0.74rem]">
                            <div className="absolute top-[-0.11rem] left-[0.01rem] leading-[0.94rem] capitalize">
                              Month
                            </div>
                            <div className="absolute top-[0rem] left-[1.94rem] leading-[0.94rem] capitalize flex items-center w-[0.35rem] h-[0.74rem]">
                              :
                            </div>
                          </div>
                          <div className="absolute top-[0.03rem] left-[2.29rem] leading-[0.94rem] font-semibold">
                            3 months
                          </div>
                        </div>
                        <div className="absolute top-[2.54rem] left-[0rem] bg-gray-400 w-[5.59rem] h-[0.94rem]" />
                        <div className="absolute top-[-0.04rem] left-[0rem] text-[0.71rem] leading-[1.07rem] font-semibold text-gray-300">
                          Full wrap campaign
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-[0rem] left-[15.03rem] bg-gray-400 w-[6.75rem] h-[5.12rem]">
                      <div className="absolute top-[2.09rem] left-[1.07rem] leading-[0.94rem]">
                        $252.00
                      </div>
                    </div>
                    <div className="absolute top-[0rem] left-[21.78rem] bg-gray-400 w-[8.95rem] h-[5.12rem]">
                      <div className="absolute top-[2.18rem] left-[1.07rem] leading-[0.94rem] flex items-center w-[0.38rem] h-[0.74rem]">
                        2
                      </div>
                    </div>
                    <div className="absolute top-[0rem] left-[30.73rem] bg-gray-400 w-[7.99rem] h-[5.12rem]">
                      <div className="absolute top-[2.18rem] left-[1.07rem] leading-[0.94rem] flex items-center w-[2.48rem] h-[0.74rem]">
                        $252.00
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[5.12rem] left-[0rem] bg-gray-400 box-border w-[38.72rem] h-[5.12rem] border-t-[0.5px] border-solid border-gainsboro-200">
                    <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[15.03rem] h-[5.12rem]">
                      <div className="absolute top-[0.73rem] left-[1.43rem] bg-gray-400 w-[6.64rem] h-[3.66rem]">
                        <div className="absolute top-[1.43rem] left-[0rem] bg-gray-400 w-[6.64rem] h-[0.94rem]">
                          <div className="absolute top-[0.09rem] left-[0rem] bg-gray-400 w-[1.93rem] h-[0.74rem]">
                            <div className="absolute top-[-0.09rem] left-[0rem] leading-[0.94rem] capitalize">
                              Month
                            </div>
                            <div className="absolute top-[0rem] left-[1.98rem] leading-[0.94rem] capitalize flex items-center w-[0.35rem] h-[0.74rem]">
                              :
                            </div>
                          </div>
                          <div className="absolute top-[0rem] left-[2.34rem] leading-[0.94rem] font-semibold">
                            3 months
                          </div>
                        </div>
                        <div className="absolute top-[-0.04rem] left-[0rem] text-[0.71rem] leading-[1.07rem] font-semibold text-gray-300">
                          Lite wrap campaign
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-[0rem] left-[15.03rem] bg-gray-400 w-[6.75rem] h-[5.12rem]">
                      <div className="absolute top-[2.18rem] left-[1.07rem] leading-[0.94rem] flex items-center w-[2.49rem] h-[0.74rem]">
                        $389.00
                      </div>
                    </div>
                    <div className="absolute top-[0rem] left-[21.78rem] bg-gray-400 w-[8.95rem] h-[5.12rem]">
                      <div className="absolute top-[2.18rem] left-[1.07rem] leading-[0.94rem] flex items-center w-[0.29rem] h-[0.74rem]">
                        1
                      </div>
                    </div>
                    <div className="absolute top-[0rem] left-[30.73rem] bg-gray-400 w-[7.99rem] h-[5.12rem]">
                      <div className="absolute top-[2.18rem] left-[1.07rem] leading-[0.94rem] flex items-center w-[2.49rem] h-[0.74rem]">
                        $389.00
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[10.24rem] left-[0rem] bg-gray-400 box-border w-[38.72rem] h-[4rem] border-t-[0.5px] border-solid border-gainsboro-200">
                    <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[15.03rem] h-[4rem] text-[0.71rem] text-gray-300">
                      <div className="absolute top-[0.73rem] left-[1.43rem] bg-gray-400 w-[7.83rem] h-[2.54rem]">
                        <div className="absolute top-[-0.03rem] left-[0.01rem] leading-[1.07rem] font-semibold flex items-center w-[12.59rem]">
                          Digital web attribution and social media campaign
                        </div>
                        <div className="absolute top-[2.51rem] left-[0.01rem] bg-gray-400 w-[6.64rem] h-[0.94rem] text-[0.63rem] text-slategray">
                          <div className="absolute top-[0.09rem] left-[0rem] bg-gray-400 w-[1.93rem] h-[0.74rem]">
                            <div className="absolute top-[-0.09rem] left-[0rem] leading-[0.94rem] capitalize">
                              Month
                            </div>
                            <div className="absolute top-[0rem] left-[1.98rem] leading-[0.94rem] capitalize flex items-center w-[0.35rem] h-[0.74rem]">
                              :
                            </div>
                          </div>
                          <div className="absolute top-[0rem] left-[2.34rem] leading-[0.94rem] font-semibold">
                            3 months
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-[0rem] left-[15.03rem] bg-gray-400 w-[6.75rem] h-[4rem]">
                      <div className="absolute top-[1.63rem] left-[1.07rem] leading-[0.94rem] flex items-center w-[2.49rem] h-[0.74rem]">
                        $869.00
                      </div>
                    </div>
                    <div className="absolute top-[0rem] left-[21.78rem] bg-gray-400 w-[8.95rem] h-[4rem]">
                      <div className="absolute top-[1.63rem] left-[1.07rem] leading-[0.94rem] flex items-center w-[0.29rem] h-[0.74rem]">
                        1
                      </div>
                    </div>
                    <div className="absolute top-[0rem] left-[30.73rem] bg-gray-400 w-[7.99rem] h-[4rem]">
                      <div className="absolute top-[1.63rem] left-[1.07rem] leading-[0.94rem] flex items-center w-[2.49rem] h-[0.74rem]">
                        $869.00
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[16.94rem] left-[0rem] bg-gray-400 box-border w-[38.72rem] h-[11.07rem] border-t-[0.5px] border-solid border-gainsboro-200">
                  <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[38.72rem] h-[2.74rem]">
                    <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[21.78rem] h-[2.74rem]" />
                    <div className="absolute top-[0rem] left-[21.78rem] bg-gray-400 w-[8.95rem] h-[2.74rem]">
                      <div className="absolute top-[1rem] left-[1.07rem] leading-[0.94rem] font-semibold flex items-center w-[2.56rem] h-[0.74rem]">
                        Subtotal
                      </div>
                    </div>
                    <div className="absolute top-[0rem] left-[30.73rem] bg-gray-400 w-[7.99rem] h-[2.74rem]">
                      <div className="absolute top-[1rem] left-[1.07rem] leading-[0.94rem] flex items-center w-[2.88rem] h-[0.74rem]">
                        $1,762.00
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[2.74rem] left-[0rem] bg-gray-400 w-[38.72rem] h-[2.73rem]">
                    <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[21.78rem] h-[2.73rem]" />
                    <div className="absolute top-[0rem] left-[21.78rem] bg-gray-400 w-[8.95rem] h-[2.73rem]">
                      <div className="absolute top-[0.89rem] left-[1.07rem] leading-[0.94rem] font-semibold">
                        Handling fee
                      </div>
                    </div>
                    <div className="absolute top-[0rem] left-[30.73rem] bg-gray-400 w-[7.99rem] h-[2.73rem]">
                      <div className="absolute top-[0.98rem] left-[1.07rem] leading-[0.94rem] flex items-center w-[1.99rem] h-[0.74rem]">
                        $15.00
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[5.46rem] left-[0rem] bg-gray-400 w-[38.72rem] h-[2.74rem]">
                    <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[21.78rem] h-[2.74rem]" />
                    <div className="absolute top-[0rem] left-[21.78rem] bg-gray-400 w-[8.95rem] h-[2.74rem]">
                      <div className="absolute top-[0.98rem] left-[1.07rem] leading-[0.94rem] font-semibold flex items-center w-[2.5rem] h-[0.74rem]">
                        Tax(6%)
                      </div>
                    </div>
                    <div className="absolute top-[0rem] left-[30.73rem] bg-gray-400 w-[7.99rem] h-[2.74rem]">
                      <div className="absolute top-[0.98rem] left-[1.07rem] leading-[0.94rem] flex items-center w-[2.34rem] h-[0.74rem]">
                        $105.72
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[8.2rem] left-[0rem] bg-gray-400 w-[38.72rem] h-[2.88rem] text-[0.71rem]">
                    <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[21.78rem] h-[2.88rem]" />
                    <div className="absolute top-[0rem] left-[21.78rem] bg-gray-400 box-border w-[8.95rem] h-[2.88rem] border-t-[0.5px] border-solid border-gainsboro-200">
                      <div className="absolute top-[1rem] left-[1.07rem] leading-[1.07rem] font-semibold flex items-center w-[4.01rem] h-[0.86rem]">
                        Grand Total
                      </div>
                    </div>
                    <div className="absolute top-[0rem] left-[30.73rem] bg-gray-400 box-border w-[7.99rem] h-[2.88rem] border-t-[0.5px] border-solid border-gainsboro-200">
                      <div className="absolute top-[1rem] left-[1.07rem] leading-[1.07rem] font-semibold flex items-center w-[3.35rem] h-[0.86rem]">
                        $1,870.72
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[40.51rem] left-[0.89rem] bg-gray-400 w-[38.72rem] h-[1.96rem]">
                <button className="cursor-pointer [border:none] p-0 bg-crimson-300 absolute top-[1.34rem] left-[33.54rem] rounded-[4.29px] w-[4.29rem] h-[1.96rem]">
                  <div className="absolute top-[0.6rem] left-[1.43rem] text-[0.63rem] leading-[0.94rem] font-semibold font-inter text-white text-center flex items-center justify-center w-[1.43rem] h-[0.74rem]">
                    Print
                  </div>
                </button>
              </div>
            </div>
            <div className="absolute top-[43.84rem] left-[1.02rem] text-[0.5rem] leading-[0.75rem] flex items-center w-[18.49rem] h-[0.59rem]">
              Invoice was created on a computer and is valid without the
              signature and seal.
            </div>
          </div>
          <b className="absolute top-[5.09rem] left-[2.68rem] text-[1.07rem] leading-[0.94rem] flex font-body-large-semibold text-darkslategray-400 items-center w-[6.83rem] h-[0.76rem]">
            Invoice
          </b>
        </div>
      </div>
      {isNavbarBillingInvoiceOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeNavbarBillingInvoice}
        >
          <NavbarBillingInvoice onClose={closeNavbarBillingInvoice} />
        </PortalDrawer>
      )}
    </>
  );
};

export default BillingInvoice;
