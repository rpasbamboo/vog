import { useState, useCallback } from "react";
import "antd/dist/antd.min.css";
import { Input } from "antd";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Signup1 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onButtonsClick = useCallback(() => {
    navigate("/getting-started-04");
  }, [navigate]);

  const onLogInClick = useCallback(() => {
    navigate("/log-in1");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[42.19rem] overflow-hidden flex flex-row items-center justify-start text-left text-[2.68rem] font-body-large-semibold">
      <div className="[background:linear-gradient(180deg,_rgba(218,_34,_34,_0.88),_rgba(218,_89,_34,_0.85))] w-[27.46rem] h-[43.13rem] overflow-hidden shrink-0 flex flex-col items-end justify-end py-[0.19rem] px-[1.68rem] box-border">
        <i className="relative leading-[120%] flex font-light [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.44))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] items-center w-[22.95rem]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">Welcome.</p>
            <p className="m-0">
              Start your journey now with our management system!
            </p>
          </span>
        </i>
      </div>
      <div className="bg-white w-[41.54rem] h-[43.13rem] overflow-hidden shrink-0 flex flex-col items-center justify-end py-[3.79rem] px-[7.47rem] box-border relative gap-[0.96rem]">
        <div className="relative w-[19.17rem] h-[20.43rem] z-[0]">
          <section className="absolute top-[0rem] left-[0rem] rounded-[7.67px] w-[19.17rem] flex flex-col items-center justify-center gap-[1.53rem] text-left text-[0.77rem] text-text-secondary font-body-large-semibold">
            <div className="self-stretch flex flex-col items-start justify-start py-[0rem] px-[2.92rem] gap-[0.77rem]">
              <div className="relative leading-[100%] hidden">Welcome back</div>
              <h2 className="m-0 relative text-[1.34rem] leading-[100%] font-semibold font-inherit text-text-primary">
                Create an account
              </h2>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.15rem]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.57rem]">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 relative leading-[100%] capitalize">
                    Email
                  </div>
                </div>
                <Input
                  className="bg-[transparent] self-stretch"
                  placeholder="balamia@gmail.com"
                  type="email"
                  bordered={true}
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.57rem]">
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
            <div className="self-stretch flex flex-col items-center justify-start gap-[1.15rem] text-text-tertiary">
              <button
                className="cursor-pointer [border:none] p-[0.77rem] bg-red-200 self-stretch rounded-[6.13px] h-[2.3rem] flex flex-row items-center justify-center box-border"
                onClick={onButtonsClick}
              >
                <div className="relative text-[0.77rem] leading-[100%] font-semibold font-body-large-semibold text-white text-left">
                  Create account
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-[0.77rem] bg-primary-weak self-stretch rounded-[6.13px] h-[2.3rem] flex flex-row items-center justify-center box-border gap-[0.38rem]">
                <img
                  className="relative w-[0.96rem] h-[0.96rem] overflow-hidden shrink-0"
                  alt=""
                  src="/icongoogle--original3.svg"
                />
                <div className="relative text-[0.77rem] leading-[100%] font-semibold font-body-large-semibold text-azure-700 text-left">
                  Continue with Google
                </div>
              </button>
              <div className="flex flex-row items-start justify-start gap-[0.38rem]">
                <div className="relative leading-[100%] capitalize">
                  Already have an account ?
                </div>
                <Link
                  className="cursor-pointer [text-decoration:none] relative leading-[100%] capitalize text-red-200"
                  to="/log-in"
                  onClick={onLogInClick}
                >
                  Log in
                </Link>
              </div>
            </div>
          </section>
        </div>
        <img
          className="absolute my-0 mx-[!important] top-[7.48rem] left-[13.18rem] w-[13.8rem] h-[2.73rem] object-cover z-[1]"
          alt=""
          src="/asset-84x6@2x.png"
        />
      </div>
    </div>
  );
};

export default Signup1;
