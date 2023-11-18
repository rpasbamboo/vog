import { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LogIn1 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onButtonsClick = useCallback(() => {
    navigate("/getting-started-04");
  }, [navigate]);

  return (
    <a className="[text-decoration:none] bg-white w-[1190px] overflow-hidden flex flex-row items-center justify-start text-left text-[47.1px] text-text-secondary font-body-large-semibold">
      <div className="[background:linear-gradient(180deg,_rgba(218,_34,_34,_0.88),_rgba(218,_89,_34,_0.85))] w-[482px] h-[757px] overflow-hidden shrink-0 flex flex-col items-end justify-end py-[3.3644444942474365px] px-[29.43889045715332px] box-border">
        <i className="relative leading-[120%] flex font-light [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.44))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] items-center w-[402.9px]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">Welcome.</p>
            <p className="m-0">
              Start your journey now with our management system!
            </p>
          </span>
        </i>
      </div>
      <div className="bg-white w-[729.2px] h-[757px] overflow-hidden shrink-0 flex flex-col items-center justify-end py-[66.4477767944336px] px-[131.2133331298828px] box-border gap-[16.82px] text-[13.46px]">
        <div className="relative w-[242.2px] h-[47.9px]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/asset-84x11@2x.png"
          />
        </div>
        <div className="rounded-[6.73px] bg-white w-[466.8px] h-[494.6px] flex flex-col items-center justify-center py-[40.37333297729492px] px-[60.560001373291016px] box-border gap-[33.64px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[13.46px]">
            <div className="relative leading-[100%]">Welcome back</div>
            <div className="relative text-[23.55px] leading-[100%] font-semibold text-text-primary">
              Login to your account
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[20.19px]">
            <Form className="[border:none] bg-[transparent] self-stretch">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="balamia@gmail.com" />
            </Form>
            <div className="self-stretch flex flex-col items-start justify-start gap-[10.09px]">
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[100%] capitalize">
                  Password
                </div>
                <a className="[text-decoration:none] relative leading-[100%] capitalize text-red-200 text-right cursor-pointer">
                  Forgot？
                </a>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <TextField
                  className="[border:none] bg-[transparent] self-stretch"
                  color="primary"
                  placeholder="Enter your password"
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleShowPasswordClick}
                          aria-label="toggle password visibility"
                        >
                          <Icon>
                            {showPassword ? "visibility_off" : "visibility"}
                          </Icon>
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[20.19px] text-text-tertiary">
            <button
              className="cursor-pointer [border:none] p-[13.457777976989746px] bg-red-200 self-stretch rounded-[6.73px] h-[43.7px] flex flex-row items-center justify-center box-border"
              onClick={onButtonsClick}
            >
              <div className="relative text-[13.46px] leading-[100%] font-semibold font-body-large-semibold text-white text-left">
                Login now
              </div>
            </button>
            <div className="flex flex-row items-start justify-start gap-[6.73px]">
              <div className="relative leading-[100%] capitalize">
                Don't have an account ?
              </div>
              <a className="[text-decoration:none] relative leading-[100%] capitalize text-red-200 cursor-pointer">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default LogIn1;
