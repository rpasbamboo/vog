import { useState, useCallback } from "react";
import NavbarBillingInvoice from "../components/NavbarBillingInvoice";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./BillingInvoice.module.css";

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
      <div className={styles.billingInvoice}>
        <div className={styles.headerheaderParent}>
          <div className={styles.headerheader}>
            <div className={styles.divheaderWrapper}>
              <div className={styles.divheaderAction}>
                <button
                  className={styles.divheaderActionItem}
                  onClick={openNavbarBillingInvoice}
                >
                  <img className={styles.divIcon} alt="" src="/div2.svg" />
                </button>
                <img
                  className={styles.divheaderActionItemIcon}
                  alt=""
                  src="/divheaderactionitem1.svg"
                />
              </div>
            </div>
            <div className={styles.divheaderAction1}>
              <div className={styles.div} />
              <div className={styles.div}>
                <div className={styles.spanbadgeWrapper}>
                  <img className={styles.svgIcon} alt="" src="/svg.svg" />
                  <div className={styles.spanbadgeDot} />
                </div>
              </div>
              <img className={styles.divIcon1} alt="" src="/div1.svg" />
              <div className={styles.divheaderActionItem2}>
                <img
                  className={styles.spanavatarIcon}
                  alt=""
                  src="/spanavatar3.svg"
                />
                <div className={styles.divhidden}>
                  <div className={styles.divtextXs}>
                    <div className={styles.admin}>Admin</div>
                  </div>
                  <div className={styles.divfontBold}>
                    <b className={styles.abdurrahman}>Abdurrahman</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.divcard}>
            <div className={styles.divcardBody}>
              <div className={styles.divflex}>
                <div className={styles.div1}>
                  <div className={styles.divlogo}>
                    <div className={styles.logo}>
                      <img
                        className={styles.asset84xIcon}
                        alt=""
                        src="/asset-84x@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.div2}>
                    <div className={styles.abbr}>
                      <div className={styles.phone}>Phone:</div>
                    </div>
                    <div className={styles.div3}>(94) 76-901-6271</div>
                    <div className={styles.dehiwallaColombo}>
                      Dehiwalla, Colombo - 06, Sri Lanka 00600
                    </div>
                    <div className={styles.balapokunaRoad}>
                      12/5 Balapokuna Road
                    </div>
                    <div className={styles.vegatisePvt}>Vegatise, Pvt.</div>
                  </div>
                </div>
                <div className={styles.div4}>
                  <div className={styles.div5}>
                    <div className={styles.h4}>
                      <div className={styles.invoice}>Invoice #</div>
                      <div className={styles.div6}>36223</div>
                    </div>
                    <div className={styles.span}>
                      <div className={styles.date}>Date:</div>
                      <div className={styles.friday04May}>
                        Friday, 04 May, 2023
                      </div>
                    </div>
                  </div>
                  <div className={styles.div7}>
                    <img className={styles.svgIcon1} alt="" src="/svg1.svg" />
                    <div className={styles.div8}>
                      <div className={styles.div9}>
                        <div className={styles.balapokunaRoadDehiwala}>
                          12/5 Balapokuna Road, Dehiwala
                        </div>
                      </div>
                      <div className={styles.div10}>
                        <div className={styles.balapokunaRoadDehiwala}>
                          Colombo - 06, Sri Lanka
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.div11}>
                    <img className={styles.svgIcon1} alt="" src="/svg2.svg" />
                    <div className={styles.div12}>
                      <div className={styles.balapokunaRoadDehiwala}>
                        (94) 76-901-6271
                      </div>
                    </div>
                  </div>
                  <div className={styles.abdurrahmanIthisham}>
                    Abdurrahman Ithisham
                  </div>
                </div>
              </div>
              <div className={styles.tabletableDefault}>
                <div className={styles.thead}>
                  <div className={styles.tr}>
                    <div className={styles.th}>
                      <div className={styles.product}>PRODUCT</div>
                    </div>
                    <div className={styles.th1}>
                      <div className={styles.price}>PRICE</div>
                    </div>
                    <div className={styles.th2}>
                      <div className={styles.quantity}>QUANTITY</div>
                    </div>
                    <div className={styles.th3}>
                      <div className={styles.total}>TOTAL</div>
                    </div>
                  </div>
                </div>
                <div className={styles.tbody}>
                  <div className={styles.tr1}>
                    <div className={styles.td}>
                      <div className={styles.div14}>
                        <div className={styles.div15}>
                          <div className={styles.spancapitalize}>
                            <div className={styles.month}>Month</div>
                            <div className={styles.div16}>:</div>
                          </div>
                          <div className={styles.months}>3 months</div>
                        </div>
                        <div className={styles.div17} />
                        <div className={styles.fullWrapCampaign}>
                          Full wrap campaign
                        </div>
                      </div>
                    </div>
                    <div className={styles.td1}>
                      <div className={styles.div18}>$252.00</div>
                    </div>
                    <div className={styles.td2}>
                      <div className={styles.div19}>2</div>
                    </div>
                    <div className={styles.td3}>
                      <div className={styles.div20}>$252.00</div>
                    </div>
                  </div>
                  <div className={styles.tr2}>
                    <div className={styles.td}>
                      <div className={styles.div21}>
                        <div className={styles.div22}>
                          <div className={styles.spancapitalize}>
                            <div className={styles.month1}>Month</div>
                            <div className={styles.div23}>:</div>
                          </div>
                          <div className={styles.months1}>3 months</div>
                        </div>
                        <div className={styles.fullWrapCampaign}>
                          Lite wrap campaign
                        </div>
                      </div>
                    </div>
                    <div className={styles.td1}>
                      <div className={styles.div24}>$389.00</div>
                    </div>
                    <div className={styles.td2}>
                      <div className={styles.div25}>1</div>
                    </div>
                    <div className={styles.td3}>
                      <div className={styles.div24}>$389.00</div>
                    </div>
                  </div>
                  <div className={styles.tr3}>
                    <div className={styles.td8}>
                      <div className={styles.div27}>
                        <div className={styles.digitalWebAttribution}>
                          Digital web attribution and social media campaign
                        </div>
                        <div className={styles.div28}>
                          <div className={styles.spancapitalize}>
                            <div className={styles.month1}>Month</div>
                            <div className={styles.div23}>:</div>
                          </div>
                          <div className={styles.months1}>3 months</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.td9}>
                      <div className={styles.div30}>$869.00</div>
                    </div>
                    <div className={styles.td10}>
                      <div className={styles.div31}>1</div>
                    </div>
                    <div className={styles.td11}>
                      <div className={styles.div30}>$869.00</div>
                    </div>
                  </div>
                </div>
                <div className={styles.tfoot}>
                  <div className={styles.tr4}>
                    <div className={styles.td12} />
                    <div className={styles.tdfontSemibold}>
                      <div className={styles.subtotal}>Subtotal</div>
                    </div>
                    <div className={styles.td13}>
                      <div className={styles.div33}>$1,762.00</div>
                    </div>
                  </div>
                  <div className={styles.tr5}>
                    <div className={styles.td14} />
                    <div className={styles.tdfontSemibold1}>
                      <div className={styles.handlingFee}>Handling fee</div>
                    </div>
                    <div className={styles.td15}>
                      <div className={styles.div34}>$15.00</div>
                    </div>
                  </div>
                  <div className={styles.tr6}>
                    <div className={styles.td12} />
                    <div className={styles.tdfontSemibold}>
                      <div className={styles.tax6}>Tax(6%)</div>
                    </div>
                    <div className={styles.td13}>
                      <div className={styles.div35}>$105.72</div>
                    </div>
                  </div>
                  <div className={styles.tr7}>
                    <div className={styles.td18} />
                    <div className={styles.tdfontSemibold3}>
                      <div className={styles.grandTotal}>Grand Total</div>
                    </div>
                    <div className={styles.tdfontSemibold4}>
                      <div className={styles.div36}>$1,870.72</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.div37}>
                <button className={styles.buttonbutton}>
                  <div className={styles.print}>Print</div>
                </button>
              </div>
            </div>
            <div className={styles.invoiceWasCreated}>
              Invoice was created on a computer and is valid without the
              signature and seal.
            </div>
          </div>
          <b className={styles.invoice1}>Invoice</b>
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
