import { useCallback } from "react";
import "antd/dist/antd.min.css";
import { Input } from "antd";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();

  const onButtonsClick = useCallback(() => {
    navigate("/getting-started-04");
  }, [navigate]);

  const onSignUpClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[42.19rem] overflow-hidden flex flex-row items-center justify-between text-left text-[2.63rem] text-text-secondary font-body-large-semibold">
      <div className="[background:linear-gradient(180deg,_rgba(218,_34,_34,_0.88),_rgba(218,_89,_34,_0.85))] w-[26.86rem] h-[42.19rem] overflow-hidden shrink-0 flex flex-col items-end justify-end py-[0.19rem] px-[1.64rem] box-border">
        <i className="relative leading-[120%] flex font-light [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.44))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] items-center w-[22.46rem]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">Welcome.</p>
            <p className="m-0">
              Start your journey now with our management system!
            </p>
          </span>
        </i>
      </div>
      <div className="bg-white w-[40.64rem] h-[42.19rem] overflow-hidden shrink-0 flex flex-col items-center justify-end py-[3.7rem] px-[7.31rem] box-border gap-[0.94rem] text-[0.75rem]">
        <div className="relative w-[13.5rem] h-[2.68rem]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/asset-84x1@2x.png"
          />
        </div>
        <div className="rounded-md bg-white w-[26.02rem] h-[27.56rem] flex flex-col items-center justify-center py-[2.25rem] px-[3.38rem] box-border gap-[1.88rem]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[0.75rem]">
            <div className="relative leading-[100%]">Welcome back</div>
            <div className="relative text-[1.31rem] leading-[100%] font-semibold text-text-primary">
              Login to your account
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.13rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.56rem]">
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[100%] capitalize">
                  Email
                </div>
              </div>
              <div className="self-stretch h-[2.25rem] flex flex-row items-start justify-start">
                <Input
                  className="bg-[transparent] self-stretch flex-1"
                  placeholder="balamia@gmail.com"
                  type="email"
                  bordered={true}
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.56rem]">
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[100%] capitalize">
                  Password
                </div>
                <div className="relative leading-[100%] capitalize text-red-200 text-right">
                  Forgot？
                </div>
              </div>
              <Input.Password
                className="bg-[transparent] self-stretch"
                placeholder="Enter your password"
                bordered={true}
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[1.13rem] text-text-tertiary">
            <button
              className="cursor-pointer [border:none] p-[0.75rem] bg-red-200 self-stretch rounded-md h-[2.44rem] flex flex-row items-center justify-center box-border"
              onClick={onButtonsClick}
            >
              <div className="relative text-[0.75rem] leading-[100%] font-semibold font-body-large-semibold text-white text-left">
                Login now
              </div>
            </button>
            <div className="flex flex-row items-start justify-start gap-[0.38rem]">
              <div className="relative leading-[100%] capitalize">
                Don't have an account ?
              </div>
              <Link
                className="cursor-pointer [text-decoration:none] relative leading-[100%] capitalize text-red-200"
                to="/signup"
                onClick={onSignUpClick}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
