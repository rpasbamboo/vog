import { useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Signup11 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onButtonsClick = useCallback(() => {
    navigate("/getting-started-04");
  }, [navigate]);

  return (
    <div className="bg-white w-[1190px] h-[762px] overflow-hidden flex flex-row items-center justify-start text-left text-[47.41px] font-body-large-semibold">
      <div className="[background:linear-gradient(180deg,_rgba(218,_34,_34,_0.88),_rgba(218,_89,_34,_0.85))] w-[485.1px] h-[762px] overflow-hidden shrink-0 flex flex-col items-end justify-end py-[3.386666774749756px] px-[29.633333206176758px] box-border">
        <i className="relative leading-[120%] flex font-light [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.44))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] items-center w-[405.6px]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">Welcome.</p>
            <p className="m-0">
              Start your journey now with our management system!
            </p>
          </span>
        </i>
      </div>
      <div className="bg-white w-[734.1px] h-[762px] overflow-hidden shrink-0 flex flex-col items-center justify-end py-[66.88667297363281px] px-[132.0800018310547px] box-border relative gap-[16.93px]">
        <div className="relative w-[338.7px] h-[364px] z-[0]">
          <section className="absolute top-[0px] left-[0px] rounded-[8.47px] w-[338.7px] flex flex-col items-center justify-center gap-[27.09px] text-left text-[13.55px] text-text-secondary font-body-large-semibold">
            <div className="self-stretch flex flex-col items-start justify-start py-0 px-[51.64666748046875px] gap-[13.55px]">
              <div className="relative leading-[100%] hidden">Welcome back</div>
              <h2 className="m-0 relative text-[23.71px] leading-[100%] font-semibold font-inherit text-text-primary">
                Create an account
              </h2>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[20.32px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[10.16px]">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 relative leading-[100%] capitalize">
                    Email
                  </div>
                </div>
                <TextField
                  className="[border:none] bg-[transparent] self-stretch"
                  color="primary"
                  placeholder="balamia@gmail.com"
                  variant="outlined"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[10.16px]">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 relative leading-[100%] capitalize">
                    Password
                  </div>
                  <div className="relative leading-[100%] capitalize text-red-200 text-right hidden">
                    Forgot？
                  </div>
                </div>
                <TextField
                  className="[border:none] bg-[transparent] self-stretch"
                  color="primary"
                  placeholder="Enter your password"
                  required={true}
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
            <div className="self-stretch flex flex-col items-center justify-start gap-[20.32px] text-text-tertiary">
              <button
                className="cursor-pointer [border:none] p-[13.546667098999023px] bg-red-200 self-stretch rounded-[6.77px] h-[40.6px] flex flex-row items-center justify-center box-border"
                onClick={onButtonsClick}
              >
                <div className="relative text-[13.55px] leading-[100%] font-semibold font-body-large-semibold text-white text-left">
                  Create account
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-[13.546667098999023px] bg-primary-weak self-stretch rounded-[6.77px] h-[40.6px] flex flex-row items-center justify-center box-border gap-[6.77px]">
                <img
                  className="relative w-[16.9px] h-[16.9px] overflow-hidden shrink-0"
                  alt=""
                  src="/icongoogle--original31.svg"
                />
                <div className="relative text-[13.55px] leading-[100%] font-semibold font-body-large-semibold text-azure-700 text-left">
                  Continue with Google
                </div>
              </button>
              <div className="flex flex-row items-start justify-start gap-[6.77px]">
                <div className="relative leading-[100%] capitalize">
                  Already have an account ?
                </div>
                <Link
                  className="cursor-pointer [text-decoration:none] relative leading-[100%] capitalize text-red-200"
                  to="/log-in"
                >
                  Log in
                </Link>
              </div>
            </div>
          </section>
        </div>
        <img
          className="absolute my-0 mx-[!important] top-[132.1px] left-[232.8px] w-[243.8px] h-[48.3px] object-cover z-[1]"
          alt=""
          src="/asset-84x21@2x.png"
        />
      </div>
    </div>
  );
};

export default Signup11;
