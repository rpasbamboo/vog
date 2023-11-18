import { useState, useCallback } from "react";
import "antd/dist/antd.min.css";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import NavbarComingSoon from "../components/NavbarComingSoon";
import PortalDrawer from "../components/PortalDrawer";
import { useNavigate } from "react-router-dom";

const ComingSoon = () => {
  const [isNavbarComingSoonOpen, setNavbarComingSoonOpen] = useState(false);
  const navigate = useNavigate();

  const openNavbarComingSoon = useCallback(() => {
    setNavbarComingSoonOpen(true);
  }, []);

  const closeNavbarComingSoon = useCallback(() => {
    setNavbarComingSoonOpen(false);
  }, []);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/driver-profile-detail");
  }, [navigate]);

  return (
    <>
      <div className="relative bg-white w-full h-[40.18rem] text-left text-[0.71rem] text-black-2 font-urbanist">
        <div className="absolute top-[0rem] left-[0rem] bg-white w-[53.13rem] h-[40.18rem] overflow-hidden">
          <div className="absolute top-[0rem] left-[calc(50%_-_425px)] bg-white box-border w-[53.13rem] h-[2.86rem] text-[0.54rem] text-slategray font-inter border-b-[0.5px] border-solid border-gainsboro-200">
            <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-[43.43rem] h-[2.9rem]">
              <div className="absolute top-[0.56rem] left-[0.71rem] bg-gray-400 w-[4.29rem] h-[1.79rem]">
                <button
                  className="cursor-pointer [border:none] p-0 bg-gray-400 absolute top-[0rem] left-[0.18rem] rounded-[7142.14px] w-[1.79rem] h-[1.79rem]"
                  onClick={openNavbarComingSoon}
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
          <div className="absolute top-[5.04rem] left-[2.68rem] text-[0.89rem] font-semibold text-orangered-100">
            Driver List
          </div>
          <div className="absolute top-[6.43rem] left-[2.68rem] text-[0.67rem] text-dimgray-300">{`Manage your Driver’s list easily and safely `}</div>
          <InputGroup
            className="bg-[transparent] absolute top-[8.88rem] left-[2.86rem]"
            width="178.6px"
            w="178.6px"
          >
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input variant="outline" placeholder="Search" size="sm" />
          </InputGroup>
          <Dropdown
            className="absolute top-[8.88rem] left-[21.29rem]"
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
              {`Filter `}
              <DownOutlined />
            </Button>
          </Dropdown>
          <Dropdown
            className="absolute top-[8.88rem] left-[14.56rem]"
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
              {`View all leads `}
              <DownOutlined />
            </Button>
          </Dropdown>
          <button
            className="cursor-pointer [border:none] p-0 bg-red-300 absolute top-[13.79rem] left-[2.86rem] rounded-[7.14px] shadow-[0px_2.9px_10px_rgba(0,_0,_0,_0.23)] w-[45.31rem] h-[2.23rem]"
            onClick={onRectangleButtonClick}
          />
          <div className="absolute top-[14.51rem] left-[3.79rem] rounded-[3.57px] bg-yellowgreen w-[0.81rem] h-[0.81rem]" />
          <div className="absolute top-[16.34rem] left-[2.86rem] w-[45.31rem] h-[2.23rem] overflow-hidden">
            <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-[7.14px] bg-white" />
            <div className="absolute top-[0.71rem] left-[0.94rem] rounded-[3.57px] bg-lightsteelblue w-[0.81rem] h-[0.81rem]" />
            <img
              className="absolute h-[50.14%] w-[2.47%] top-[24.09%] right-[90.92%] bottom-[25.77%] left-[6.61%] rounded-[2.86px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/vector@2x.png"
            />
          </div>
          <div className="absolute top-[18.88rem] left-[2.86rem] w-[45.31rem] h-[2.23rem] overflow-hidden">
            <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-[7.14px] bg-white" />
            <div className="absolute top-[0.71rem] left-[0.94rem] rounded-[3.57px] bg-lightsteelblue w-[0.81rem] h-[0.81rem]" />
            <img
              className="absolute h-[50.14%] w-[2.47%] top-[24.09%] right-[90.92%] bottom-[25.77%] left-[6.61%] rounded-[2.86px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/vector1@2x.png"
            />
          </div>
          <div className="absolute top-[21.43rem] left-[2.86rem] w-[45.31rem] h-[2.23rem] overflow-hidden">
            <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-[7.14px] bg-white" />
            <div className="absolute top-[0.71rem] left-[0.94rem] rounded-[3.57px] bg-lightsteelblue w-[0.81rem] h-[0.81rem]" />
            <img
              className="absolute h-[50.14%] w-[2.47%] top-[24.09%] right-[90.92%] bottom-[25.77%] left-[6.61%] rounded-[2.86px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/vector2@2x.png"
            />
          </div>
          <div className="absolute top-[23.98rem] left-[2.86rem] w-[45.31rem] h-[2.23rem] overflow-hidden">
            <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-[7.14px] bg-white" />
            <div className="absolute top-[0.71rem] left-[0.94rem] rounded-[3.57px] bg-lightsteelblue w-[0.81rem] h-[0.81rem]" />
            <img
              className="absolute h-[50.14%] w-[2.47%] top-[24.09%] right-[90.92%] bottom-[25.77%] left-[6.61%] rounded-[2.86px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/vector3@2x.png"
            />
          </div>
          <div className="absolute top-[26.52rem] left-[2.86rem] w-[45.31rem] h-[2.23rem] overflow-hidden">
            <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-[7.14px] bg-white" />
            <div className="absolute top-[0.71rem] left-[0.94rem] rounded-[3.57px] bg-lightsteelblue w-[0.81rem] h-[0.81rem]" />
            <img
              className="absolute h-[50.14%] w-[2.47%] top-[24.09%] right-[90.92%] bottom-[25.77%] left-[6.61%] rounded-[2.86px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/vector4@2x.png"
            />
          </div>
          <div className="absolute top-[29.06rem] left-[2.86rem] w-[45.31rem] h-[2.23rem] overflow-hidden">
            <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-[7.14px] bg-white" />
            <div className="absolute top-[0.71rem] left-[0.94rem] rounded-[3.57px] bg-lightsteelblue w-[0.81rem] h-[0.81rem]" />
            <img
              className="absolute h-[50.14%] w-[2.47%] top-[24.09%] right-[90.92%] bottom-[25.77%] left-[6.61%] rounded-[2.86px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/vector5@2x.png"
            />
          </div>
          <div className="absolute top-[31.61rem] left-[2.86rem] w-[45.31rem] h-[2.23rem] overflow-hidden">
            <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-[7.14px] bg-white" />
            <div className="absolute top-[0.71rem] left-[0.94rem] rounded-[3.57px] bg-lightsteelblue w-[0.81rem] h-[0.81rem]" />
            <img
              className="absolute h-[50.14%] w-[2.47%] top-[24.09%] right-[90.92%] bottom-[25.77%] left-[6.61%] rounded-[2.86px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/vector6@2x.png"
            />
          </div>
          <div className="absolute top-[12.37rem] left-[5.85rem] w-[8.29rem] h-[25.88rem]">
            <div className="absolute top-[0rem] left-[0rem] text-[0.63rem] text-gray-2">
              Name
            </div>
            <div className="absolute top-[2.19rem] left-[2.41rem] [text-decoration:underline] font-semibold text-white">
              Jacob Jones
            </div>
            <div className="absolute top-[4.64rem] left-[2.41rem] font-semibold">
              Eleanor Pena
            </div>
            <div className="absolute top-[7.19rem] left-[2.41rem] font-semibold">
              Brooklyn Simmons
            </div>
            <div className="absolute top-[9.73rem] left-[2.41rem] font-semibold">
              Annette Black
            </div>
            <div className="absolute top-[12.28rem] left-[2.41rem] font-semibold">
              Darlene Robertson
            </div>
            <div className="absolute top-[14.82rem] left-[2.41rem] font-semibold">
              Robert Fox
            </div>
            <div className="absolute top-[17.37rem] left-[2.41rem] font-semibold">
              Theresa Webb
            </div>
            <div className="absolute top-[19.91rem] left-[2.41rem] font-semibold">
              Floyd Miles
            </div>
            <div className="absolute top-[22.46rem] left-[2.41rem] font-semibold">
              Courtney Henry
            </div>
            <div className="absolute top-[25rem] left-[2.41rem] font-semibold">
              Esther Howard
            </div>
          </div>
          <img
            className="absolute h-[2.78%] w-[2.11%] top-[35.78%] right-[86.88%] bottom-[61.44%] left-[11.01%] rounded-[2.86px] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/vector7@2x.png"
          />
          <div className="absolute top-[12.37rem] left-[15.67rem] w-[10.56rem] h-[25.88rem]">
            <div className="absolute top-[2.19rem] left-[0rem] [text-decoration:underline] font-medium text-white">
              jackson.graham@example.com
            </div>
            <div className="absolute top-[4.64rem] left-[0rem] font-medium">
              georgia.young@example.com
            </div>
            <div className="absolute top-[7.19rem] left-[0rem] font-medium">
              sara.cruz@example.com
            </div>
            <div className="absolute top-[9.73rem] left-[0rem] font-medium">
              curtis.weaver@example.com
            </div>
            <div className="absolute top-[12.28rem] left-[0rem] font-medium">
              dolores.chambers@example.com
            </div>
            <div className="absolute top-[14.82rem] left-[0rem] font-medium">
              debbie.baker@example.com
            </div>
            <div className="absolute top-[17.37rem] left-[0rem] font-medium">
              jessica.hanson@example.com
            </div>
            <div className="absolute top-[19.91rem] left-[0rem] font-medium">
              deanna.curtis@example.com
            </div>
            <div className="absolute top-[22.46rem] left-[0rem] font-medium">
              michael.mitc@example.com
            </div>
            <div className="absolute top-[25rem] left-[0rem] font-medium">
              tanya.hill@example.com
            </div>
            <div className="absolute top-[0rem] left-[0rem] text-[0.63rem] text-gray-2">
              Email
            </div>
          </div>
          <div className="absolute top-[12.37rem] left-[27.63rem] w-[4.81rem] h-[25.88rem]">
            <div className="absolute top-[2.19rem] left-[0rem] font-medium text-white">
              (225) 555-0118
            </div>
            <div className="absolute top-[4.64rem] left-[0rem] font-medium">
              (308) 555-0121
            </div>
            <div className="absolute top-[7.19rem] left-[0rem] font-medium">
              (207) 555-0119
            </div>
            <div className="absolute top-[9.73rem] left-[0rem] font-medium">
              (405) 555-0128
            </div>
            <div className="absolute top-[12.28rem] left-[0rem] font-medium">
              (406) 555-0120
            </div>
            <div className="absolute top-[14.82rem] left-[0rem] font-medium">
              (629) 555-0129
            </div>
            <div className="absolute top-[17.37rem] left-[0rem] font-medium">
              (480) 555-0103
            </div>
            <div className="absolute top-[19.91rem] left-[0rem] font-medium">
              (808) 555-0111
            </div>
            <div className="absolute top-[22.46rem] left-[0rem] font-medium">
              (270) 555-0117
            </div>
            <div className="absolute top-[25rem] left-[0rem] font-medium">
              (907) 555-0101
            </div>
            <div className="absolute top-[0rem] left-[0rem] text-[0.63rem] text-gray-2">
              Phone number
            </div>
          </div>
          <div className="absolute top-[12.37rem] left-[33.79rem] w-[4.88rem] h-[25.88rem]">
            <div className="absolute top-[2.19rem] left-[0rem] font-medium text-white">
              In Progress
            </div>
            <div className="absolute top-[4.64rem] left-[0rem] font-medium">
              New
            </div>
            <div className="absolute top-[7.19rem] left-[0rem] font-medium">
              New
            </div>
            <div className="absolute top-[9.73rem] left-[0rem] font-medium">
              New
            </div>
            <div className="absolute top-[12.28rem] left-[0rem] font-medium">
              In Progress
            </div>
            <div className="absolute top-[14.82rem] left-[0rem] font-medium">
              New
            </div>
            <div className="absolute top-[17.37rem] left-[0rem] font-medium">
              In Progress
            </div>
            <div className="absolute top-[19.91rem] left-[0rem] font-medium">
              New
            </div>
            <div className="absolute top-[22.46rem] left-[0rem] font-medium">
              Undergraduate
            </div>
            <div className="absolute top-[25rem] left-[0rem] font-medium">
              Diploma
            </div>
            <div className="absolute top-[0rem] left-[0rem] text-[0.63rem] text-gray-2">
              Status
            </div>
          </div>
          <div className="absolute top-[12.32rem] left-[40.13rem] w-[6.31rem] h-[25.92rem]">
            <div className="absolute top-[2.19rem] left-[0rem] font-medium text-white">
              Nov 5, 2020, 4:35:43
            </div>
            <div className="absolute top-[4.64rem] left-[0rem] font-medium">
              Jan 21, 2021, 13:34:30
            </div>
            <div className="absolute top-[7.19rem] left-[0rem] font-medium">
              Jan 21, 2021, 13:34:30
            </div>
            <div className="absolute top-[9.73rem] left-[0rem] font-medium">
              Nov 5, 2020, 4:35:43
            </div>
            <div className="absolute top-[12.28rem] left-[0rem] font-medium">
              Nov 5, 2020, 4:35:43
            </div>
            <div className="absolute top-[14.82rem] left-[0rem] font-medium">
              Nov 5, 2020, 4:35:43
            </div>
            <div className="absolute top-[17.37rem] left-[0rem] font-medium">
              Nov 5, 2020, 4:35:43
            </div>
            <div className="absolute top-[19.91rem] left-[0rem] font-medium">
              Jan 21, 2021, 13:34:30
            </div>
            <div className="absolute top-[22.46rem] left-[0rem] font-medium">{`Jan 21, 2021, 13:34:30 `}</div>
            <div className="absolute top-[25.04rem] left-[2.41rem] font-medium">
              16/08/2013
            </div>
            <div className="absolute top-[0rem] left-[0rem] text-[0.63rem] text-gray-2">
              Date modified
            </div>
          </div>
          <img
            className="absolute top-[14.56rem] left-[49.02rem] w-[0.23rem] h-[23.13rem]"
            alt=""
            src="/group-1898.svg"
          />
        </div>
      </div>
      {isNavbarComingSoonOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeNavbarComingSoon}
        >
          <NavbarComingSoon onClose={closeNavbarComingSoon} />
        </PortalDrawer>
      )}
    </>
  );
};

export default ComingSoon;
