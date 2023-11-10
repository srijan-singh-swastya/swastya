import React, { useCallback, createRef, useState, useEffect } from "react";
import styles from "./LoginOtp.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const LoginOtp = () => {
  const navigate=useNavigate();
  const inputRefs = Array(6).fill(null).map(() => createRef(null));
  const [active, setActive] = useState(false);
  const [otp, setOtp] = useState({
    otp0: "",
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
  });



  const handleInputChange = (e, index) => {
    const { value } = e.target;
    setOtp({ ...otp, [e.target.name]: e.target.value });

    // Clear the current input if it contains more than one character
    if (value.length > 1) {
      inputRefs[index].current.value = "";
      inputRefs[index].current.focus();
      setOtp({ ...otp, [e.target.name]: "" });
    } 
    else if (index >0 && value.length === 0) {
      inputRefs[index].current.value = "";
      inputRefs[index - 1].current.focus();
      setOtp({ ...otp, [e.target.name]: "" });
    }

    // Move to the next input field if available
    else if (index < inputRefs.length - 1 && value.length === 1) {
      inputRefs[index + 1].current.focus();
    }

  
  };

useEffect(()=>{
  const Allotp =  otp.otp0 + otp.otp1 + otp.otp2 + otp.otp3 + otp.otp4 + otp.otp5;
  if (Allotp.length === 6) {
    setActive(true);
  } else {
    setActive(false);
  }
})
  useEffect(() => {
    // Focus the first input when the component mounts
    if (inputRefs.length > 0) {
      inputRefs[0].current.focus();
    }
  }, []);


  useEffect(() => {
    const handleEnterKeyPress = (e) => {
      if (e.key === "Enter" && active) {
        // Trigger a click event on the "Verify" button when Enter is pressed and all digits are entered
        document.getElementById("verifyButton").click();
      }
    };

    document.addEventListener("keydown", handleEnterKeyPress);

    return () => {
      // Remove the event listener when the component unmounts
      document.removeEventListener("keydown", handleEnterKeyPress);
    };
  }, [active]);



  //time ka functionality
  const [timer, setTimer] = useState(89); // 89 seconds = 01:29
  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(countdown);
  }, [timer]);
  const handelResendOtp=()=>{
    setTimer(89)
  }


  const handelVerify=()=>{

    navigate("/technicianDashbord")
    // navigate("/dashbord")
  }

  // Format the timer into "mm:ss" format
  const formattedTimer = `${Math.floor(timer / 60)
    .toString()
    .padStart(2, "0")}:${(timer % 60).toString().padStart(2, "0")}`;

  return (
    <div className={styles.loginotp}>
      <div className={styles.forgotPasswordParent}>
        <div className={styles.forgotPassword}>Login to swastya.ai</div>
        <div className={styles.enterTheOtpSentTo919879Parent}>
          <div className={styles.enterTheOtpContainer}>
            <span className={styles.enterTheOtpContainer1}>
              <span>{`Enter the OTP sent to `}</span>
              <b>+91 987987333</b>
            </span>
          </div>
          <button className={styles.button}>
            <button className={styles.buttonSize}>
              <img
                className={styles.fileDownloadInLc}
                alt=""
                src="/undefined8.png"
              />
               <Link to="/login" className={styles.text}>Change number</Link>
              {/* <div className={styles.text}>Change number</div> */}
              <img
                className={styles.arrowforwardIcon}
                alt=""
                src="/undefined7.png"
              />
            </button>
          </button>
        </div>
      </div>

      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          {inputRefs.map((ref, index) => (
            <input
              key={index}
              ref={ref}
              className={styles.frameChild}
              name={"otp" + index}
              type="number"
              maxLength={1}
              onChange={(e) => handleInputChange(e, index)}
              required
            />
          ))}
        </div>

        <div className={styles.otpValidFor0129Parent}>
          <div className={styles.otpValidForContainer}>
            <span>OTP valid for</span>
            <b> {formattedTimer}</b>
          </div>
          <div className={styles.didntReceiveOtpParent}>
            <div className={styles.didntReceiveOtp}>Didn't receive OTP?</div>
            <button className={styles.button}>
              <button className={styles.buttonSize}>
                <img
                  className={styles.fileDownloadInLc}
                  alt=""
                  src="/undefined9.png"
                />
                <div onClick={handelResendOtp} className={styles.text}>Resend OTP</div>
                <img
                  className={styles.arrowforwardIcon}
                  alt=""
                  src="/undefined10.png"
                />
              </button>
            </button>
          </div>
        </div>
        {active ? (
           <button onClick={handelVerify}  id="verifyButton" className={styles.button3}>
     
            <div
              className={styles.buttonSize2}
        
            >
              <div className={styles.text2}>Verify</div>
            </div>
   
          </button>
        ) : (
          <button className={styles.button2}>
            <div
              className={styles.buttonSize2}
     
            >
              <div className={styles.text2}>Verify</div>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default LoginOtp;
