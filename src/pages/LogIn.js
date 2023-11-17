import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./LogIn.module.css";

const LogIn = () => {
  const navigate = useNavigate();

  const onButtonsClick = useCallback(() => {
    navigate("/getting-started-04");
  }, [navigate]);

  const onSignUpClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <div className={styles.logIn}>
      <div className={styles.bg}>
        <i className={styles.welcomeStartYourContainer}>
          <span className={styles.welcomeStartYourContainer1}>
            <p className={styles.welcome}>Welcome.</p>
            <p className={styles.welcome}>
              Start your journey now with our management system!
            </p>
          </span>
        </i>
      </div>
      <div className={styles.bgLogin}>
        <div className={styles.logo}>
          <img
            className={styles.asset84xIcon}
            alt=""
            src="/asset-84x1@2x.png"
          />
        </div>
        <div className={styles.login}>
          <div className={styles.welcomeBackParent}>
            <div className={styles.welcomeBack}>Welcome back</div>
            <div className={styles.loginToYour}>Login to your account</div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.emailWrapper}>
                <div className={styles.email}>Email</div>
              </div>
              <div className={styles.inputTextWrapper}>
                <div className={styles.inputText}>
                  <div className={styles.context}>balamia@gmail.com</div>
                  <div className={styles.iconeyeWrapper}>
                    <img
                      className={styles.iconeye}
                      alt=""
                      src="/iconeye3.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.emailWrapper}>
                <div className={styles.email}>Password</div>
                <div className={styles.forgot}>Forgot？</div>
              </div>
              <div className={styles.inputTextContainer}>
                <div className={styles.inputText1}>
                  <div className={styles.context}>Enter your password</div>
                  <div className={styles.iconeyeWrapper}>
                    <img
                      className={styles.iconeye1}
                      alt=""
                      src="/iconeye3.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.buttonsParent}>
            <button className={styles.buttons} onClick={onButtonsClick}>
              <div className={styles.loginNow}>Login now</div>
            </button>
            <div className={styles.dontHaveAnAccountParent}>
              <div className={styles.dontHaveAn}>Don't have an account ?</div>
              <Link
                className={styles.signUp}
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
