import { useState, useEffect } from "react";
import styles from "./LoginMain.module.css";
import { Link } from "react-router-dom";

const LoginMain = () => {

  const [number, setNumber] = useState("")
  const [active, setactive] = useState(false)
  const handleInputChange = (e) => {
    const { value } = e.target;
    // Limit the input to 10 digits


    // Set focus on the element with id "otpInput" when 10 digits are entered
    if (value.length === 10) {
      setactive(true)
      setNumber(e.target.value)
      console.log(value.length)
      const otpInputElement = document.getElementById("otpInput");
      if (otpInputElement) {
        otpInputElement.focus();
      }
    }
    else {
      e.target.value = value.slice(0, 9); // Truncate input to 10 characters
      console.log(e.target.value)
      // setNumber(e.target.value)
      setactive(false)
    }
  };
  const handelSubmit = (e) =>{
    console.log(number)
    
  }  
  // console.log(number)

  useEffect(() => {
    // Focus the first input when the component mounts
    if (number.length === 0) {
      const otpInputElement = document.getElementById("otpInput1");
      if (otpInputElement) {
        otpInputElement.focus();
      }
    }


  }, []);

  return (
    <div className={styles.loginmain}>
      <div className={styles.forgotPasswordParent}>
        <div className={styles.forgotPassword}>Login to swastya.ai</div>
        <div className={styles.enterYourEmail}>
          Enter phone number to receive OTP
        </div>
      </div>
      <div className={styles.inputFieldParent}>
        <div className={styles.inputField}>
          <div className={styles.labelParent}>
            <div className={styles.label}>Phone number</div>
            <div className={styles.div}>*</div>
          </div>
          <div className={styles.inputFieldflagsParent}>
            <div className={styles.inputFieldflags}>
              +91
            </div>
            {/* <input className={styles.text} placeholder="987987333" type="text"/> */}
            <input
              id="otpInput1"
              className={styles.text}
              placeholder="Enter Ur Number"
              type="number" // Use "text" to allow 1-character input
              onChange={(e) => handleInputChange(e)}
              required
            />
          </div>
        </div>
        <div className={styles.button1}>
          {active ?
            <Link to="loginOtp" className={styles.buttonSize1} onClick={(e) => handelSubmit(e)}>
              <div id="otpInput" className={styles.pp} >
                Get OTP
              </div>
            </Link>
            :
            <button id="otpInput" className={styles.buttonSize2}>
              Get OTP
            </button>
          }
        </div>
      </div>
    </div>
  );
};

export default LoginMain;
