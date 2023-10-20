import styles from "./PaymentDetails.module.css";
const PaymentDetails = () => {
  return (
    <div className={styles.paymentdetails}>
      <div className={styles.paymentdetailsInner}>
        <div className={styles.frameParent}>
          <div className={styles.wrapper}>
            <div className={styles.div}>3</div>
          </div>
          <div className={styles.text}>Payment details</div>
        </div>
      </div>
      <div className={styles.dropdown}>
        <div className={styles.labelParent}>
          <div className={styles.label}>Amount collected</div>
          <div className={styles.div1}>*</div>
        </div>
        <div className={styles.parent}>
          <div className={styles.div2}>
            <div className={styles.div3}>₹</div>
          </div>
          <input
            className={styles.text1}
            name="ammountCollectd"
            placeholder="500"
            type="text"
          />
          
          <img
            className={styles.arrowaltdownIcon}
            alt=""
            src="/undefined1.png"
          />
        </div>
        <div className={styles.helpText}>Help text</div>
      </div>
      <div className={styles.paymentdetailsChild} />
      <div className={styles.frameGroup}>
        <div className={styles.labelParent}>
          <div className={styles.div}>Select payment method</div>
          <div className={styles.div4}>*</div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.radioButtonParent}>
            <input
              className={styles.radioButton}
              type="radio"
              name="paymentMethod"
            />
            <div className={styles.label}>Cash</div>
          </div>
          <div className={styles.radioButtonParent}>
            <input
              className={styles.radioButton}
              type="radio"
              name="paymentMethod"
            />
            <div className={styles.label}>Online Banking</div>
          </div>
          <div className={styles.radioButtonParent}>
              <input
                className={styles.radioButton}
                type="radio"
                name="paymentMethod"
              />
            <div className={styles.label}>UPI</div>
          </div>
        </div>
      </div>
      <div className={styles.dropdown1} >
        <div className={styles.labelParent}>
          <div className={styles.label}>Discount</div>
          <div className={styles.div1}>*</div>
        </div>
        <div className={styles.searchfatParent}>
          <img
            className={styles.arrowaltdownIcon}
            alt=""
            src="/undefined2.png"
          />
          <input className={styles.text1} placeholder="No discounts" type="text"/>
           
          <button className={styles.arrowaltdown}>
            <img
              className={styles.arrowaltdownIcon1}
              alt=""
              src="/Image/PatientInfo/arrowaltdown1.svg"
            />
            
          </button>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameParent1}>
          <div className={styles.frameParent2}>
            <div className={styles.particularsWrapper}>
              <b className={styles.particulars}>Particulars</b>
            </div>
            <div className={styles.testTotalParent}>
              <div className={styles.testTotal}>Test total</div>
             
            </div>
            
            <div className={styles.testTotalParent}>
              <div className={styles.testTotal}>( - ) Amount collected</div>
             
            </div>
            <div className={styles.testTotalParent}>
              <div className={styles.testTotal}>( - ) Discount</div>
              
            </div>
            
            <div className={styles.totalPayableParent}>
              <b className={styles.totalPayable}>Total payable</b>
            
            </div>
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.amountWrapper}>
              <b className={styles.particulars}>Amount (₹)</b>
            </div>
            <div className={styles.container}>
              <b className={styles.particulars}>1300.00</b>
            </div>
           
            <div className={styles.wrapper2}>
              <b className={styles.particulars}>500.00</b>
            </div>
            <div className={styles.container}>
              <b className={styles.particulars}>000.00</b>
            </div>
            <div className={styles.wrapper6}>
              <b className={styles.b3}>800.00</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
