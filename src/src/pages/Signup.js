import { useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";

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
    <div className={styles.signup}>
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
        <div className={styles.signUpWrapper}>
          <section className={styles.signUp}>
            <div className={styles.welcomeBackParent}>
              <div className={styles.welcomeBack}>Welcome back</div>
              <h2 className={styles.createAnAccount}>Create an account</h2>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <div className={styles.emailWrapper}>
                  <div className={styles.email}>Email</div>
                </div>
                <TextField
                  className={styles.frameChild}
                  color="primary"
                  placeholder="balamia@gmail.com"
                  variant="outlined"
                />
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.emailWrapper}>
                  <div className={styles.email}>Password</div>
                  <div className={styles.forgot}>Forgot？</div>
                </div>
                <TextField
                  className={styles.frameChild}
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
            <div className={styles.buttonsParent}>
              <button className={styles.buttons} onClick={onButtonsClick}>
                <div className={styles.loginNow}>Create account</div>
              </button>
              <div className={styles.buttons1}>
                <img
                  className={styles.icongoogleOriginal}
                  alt=""
                  src="/icongoogle--original.svg"
                />
                <div className={styles.loginNow1}>Continue with Google</div>
              </div>
              <div className={styles.alreadyHaveAnAccountParent}>
                <div className={styles.alreadyHaveAn}>
                  Already have an account ?
                </div>
                <Link className={styles.logIn} to="/log-in">
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
