import { useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onButtonsClick = useCallback(() => {
    navigate("/getting-started-04");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[56.25rem] overflow-hidden flex flex-row items-center justify-start text-left text-[3.5rem] font-body-large-semibold">
      <div className="[background:linear-gradient(180deg,_rgba(218,_34,_34,_0.88),_rgba(218,_89,_34,_0.85))] w-[35.81rem] h-[56.25rem] overflow-hidden shrink-0 flex flex-col items-end justify-end py-[0.25rem] px-[2.19rem] box-border">
        <i className="relative leading-[120%] flex font-light [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.44))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] items-center w-[29.94rem]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">Welcome.</p>
            <p className="m-0">
              Start your journey now with our management system!
            </p>
          </span>
        </i>
      </div>
      <div className="bg-white w-[54.19rem] h-[56.25rem] overflow-hidden shrink-0 flex flex-col items-center justify-end py-[4.94rem] px-[9.75rem] box-border">
        <div className="relative w-[25rem] h-[26.75rem]">
          <section className="absolute top-[0rem] left-[0rem] rounded-3xs w-[25rem] flex flex-col items-center justify-center gap-[2rem] text-left text-[1rem] text-text-secondary font-body-large-semibold">
            <div className="self-stretch flex flex-col items-start justify-start py-[0rem] px-[3.81rem] gap-[1rem]">
              <div className="relative leading-[100%] hidden">Welcome back</div>
              <h2 className="m-0 relative text-[1.75rem] leading-[100%] font-semibold font-inherit text-text-primary">
                Create an account
              </h2>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
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
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
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
            <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem] text-azure-700">
              <button
                className="cursor-pointer [border:none] p-[1rem] bg-red-200 self-stretch rounded-lg h-[3rem] flex flex-row items-center justify-center box-border"
                onClick={onButtonsClick}
              >
                <div className="relative text-[1rem] leading-[100%] font-semibold font-body-large-semibold text-white text-left">
                  Create account
                </div>
              </button>
              <div className="self-stretch rounded-lg bg-primary-weak h-[3rem] flex flex-row items-center justify-center p-[1rem] box-border gap-[0.5rem]">
                <img
                  className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                  alt=""
                  src="/icongoogle--original.svg"
                />
                <div className="relative leading-[100%] font-semibold">
                  Continue with Google
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[0.5rem] text-text-tertiary">
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
      </div>
    </div>
  );
};

export default Signup;
