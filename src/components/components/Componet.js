import { useState } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const Componet = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="bg-white w-[640px] h-[1633px] overflow-hidden">
      <section className="absolute top-[645px] left-[120px] rounded-3xs w-[400px] flex flex-col items-center justify-center gap-[32px] text-left text-base text-text-secondary font-body-large-semibold">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div className="relative leading-[100%]">Welcome back</div>
          <h2 className="m-0 relative text-9xl leading-[100%] font-semibold font-inherit text-text-primary">
            Login to your account
          </h2>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[100%] capitalize">
                Email
              </div>
            </div>
            <div className="self-stretch h-12 flex flex-row items-start justify-start">
              <TextField
                className="[border:none] font-body-large-semibold text-sm bg-[transparent] self-stretch flex-1"
                label="balamia@gmail.com"
                type="text"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[100%] capitalize">
                Password
              </div>
              <Link
                className="cursor-pointer [text-decoration:none] relative leading-[100%] capitalize text-red-200 text-right"
                to="/log-in"
              >
                Forgot？
              </Link>
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
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] text-text-tertiary">
          <button className="cursor-pointer [border:none] p-4 bg-red-200 self-stretch rounded-lg h-[52px] flex flex-row items-center justify-center box-border">
            <div className="relative text-base leading-[100%] font-semibold font-body-large-semibold text-white text-left">
              Login now
            </div>
          </button>
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <div className="relative leading-[100%] capitalize">
              Don't have an account?
            </div>
            <Link
              className="cursor-pointer [text-decoration:none] relative leading-[100%] capitalize text-red-200"
              to="/log-in"
            >
              Sign up
            </Link>
          </div>
        </div>
      </section>
      <img
        className="absolute top-[80px] left-[120px] w-8 h-8"
        alt=""
        src="/iconeye2.svg"
      />
      <img
        className="absolute top-[80px] left-[182px] w-8 h-8"
        alt=""
        src="/iconeyeslash.svg"
      />
      <section className="absolute top-[192px] left-[120px] rounded-8xs box-border w-96 h-[149px] overflow-hidden border-[1px] border-dashed border-blueviolet">
        <TextField
          className="[border:none] bg-[transparent] absolute top-[16px] left-[16px]"
          color="primary"
          placeholder="Context"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleShowPasswordClick}
                  aria-label="toggle password visibility"
                >
                  <Icon>{showPassword ? "visibility_off" : "visibility"}</Icon>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          className="[border:none] bg-[transparent] absolute top-[80px] left-[16px]"
          color="primary"
          defaultValue="Context"
          placeholder="Context"
          sx={{ width: 352 }}
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleShowPasswordClick}
                  aria-label="toggle password visibility"
                >
                  <Icon>{showPassword ? "visibility_off" : "visibility"}</Icon>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </section>
      <section className="absolute top-[421px] left-[120px] rounded-8xs box-border w-96 h-36 overflow-hidden border-[1px] border-dashed border-blueviolet">
        <button className="cursor-pointer [border:none] p-4 bg-red-200 absolute top-[16px] left-[16px] rounded-lg w-[352px] h-12 flex flex-row items-center justify-center box-border">
          <div className="relative text-base leading-[100%] font-semibold font-body-large-semibold text-white text-left">
            Login now
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-4 bg-primary-weak absolute top-[80px] left-[16px] rounded-lg w-[352px] h-12 flex flex-row items-center justify-center box-border gap-[8px]">
          <img
            className="relative w-5 h-5 overflow-hidden shrink-0"
            alt=""
            src="/icongoogle--original1.svg"
          />
          <div className="relative text-base leading-[100%] font-semibold font-body-large-semibold text-azure-700 text-left">
            Login now
          </div>
        </button>
      </section>
      <img
        className="absolute top-[80px] left-[244px] w-8 h-8 overflow-hidden"
        alt=""
        src="/icongoogle--original2.svg"
      />
      <section className="absolute top-[1085px] left-[120px] rounded-3xs w-[400px] flex flex-col items-center justify-center gap-[32px] text-left text-base text-text-secondary font-body-large-semibold">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div className="relative leading-[100%] hidden">Welcome back</div>
          <h2 className="m-0 relative text-9xl leading-[100%] font-semibold font-inherit text-text-primary">
            Create an account
          </h2>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[100%] capitalize">
                Email
              </div>
            </div>
            <input
              className="[border:none] font-body-large-semibold text-sm bg-[transparent] self-stretch h-12 flex flex-row items-start justify-start"
              placeholder="balamia@gmail.com"
              type="text"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[100%] capitalize">
                Password
              </div>
              <div className="relative leading-[100%] capitalize text-red-200 text-right">
                Forgot？
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-sm text-text-tertiary">
              <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-3 px-4 gap-[5px] border-[1px] border-solid border-text-tertiary">
                <div className="flex-1 relative leading-[100%]">
                  Enter your password
                </div>
                <div className="flex flex-row items-center justify-end">
                  <img className="relative w-6 h-6" alt="" src="/iconeye.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] text-azure-700">
          <button className="cursor-pointer [border:none] p-4 bg-red-200 self-stretch rounded-lg h-12 flex flex-row items-center justify-center box-border">
            <div className="relative text-base leading-[100%] font-semibold font-body-large-semibold text-white text-left">
              Create account
            </div>
          </button>
          <div className="self-stretch rounded-lg bg-primary-weak h-12 flex flex-row items-center justify-center p-4 box-border gap-[8px]">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/icongoogle--original.svg"
            />
            <div className="relative leading-[100%] font-semibold">
              Continue with Google
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[8px] text-text-tertiary">
            <div className="relative leading-[100%] capitalize">
              Already have an account ?
            </div>
            <div className="relative leading-[100%] capitalize text-red-200">
              Log in
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Componet;
