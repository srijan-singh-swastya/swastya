import { useState, useCallback } from "react";
import ReviewInvoicePage1 from "../ReviewInvoicePage1/ReviewInvoicePage1";
import styles from "./KitInventoryHome.module.css";
const data = [
  {
    "id": 1,
    "labId": 104,
    "userId": "sat104",
    "vendorName": "satish",
    "vendorGST": "SDFFD434",
    "vendorBank": "SBI",
    "labName": "Dpharma",
    "invoiceNumber": "pkFGFGH",
    "invoiceDate": "12 march",
    "deliveryDate": "12 er",
    "itemDescription": "i dont know",
    "AWB": 240
  },
  {
    "id": 2,
    "labId": 104,
    "userId": "sat104",
    "vendorName": "satish",
    "vendorGST": "SDFFD434",
    "vendorBank": "SBI",
    "labName": "Dpharma",
    "invoiceNumber": "SDFGFGH",
    "invoiceDate": "12 march",
    "deliveryDate": "12 er",
    "itemDescription": "i dont know",
    "AWB": 240
  },

]
const KitInventoryHome = () => {
  const [reportLetterhead, setReportLetterhead] = useState("");
  const [reviewInvoicePopUp,setReviewInvoicePopUp]=useState(false)
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter((user) => {

    return user.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase())

  })
  console.log(reportLetterhead)


  const [isFrameOpen, setFrameOpen] = useState(false);

  const handleFileInput = useCallback(() => {
    const fileInput = document.getElementById('fileInput');
    fileInput.click();
  }, []);

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setReportLetterhead(e.target.result);
        setReviewInvoicePopUp(!reviewInvoicePopUp)
      };
      reader.readAsDataURL(file);
    }
  };
  const handleReviewInvoicePage1PopupClick=()=>{
    setReviewInvoicePopUp(!reviewInvoicePopUp)
  }


  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const goBack = () => {
    window.history.back();
  };



  return (
    <>
      <div className={styles.kitinventoryhome}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.frameWrapper}>
              <div className={styles.arrowLeftParent}>
                <img onClick={goBack}
                  className={styles.arrowLeftIcon}
                  alt=""
                  src="/Image/KitInventory/arrowleft.svg"
                />
                <div className={styles.text}>Kit Inventory</div>
              </div>
            </div>
            <div className={styles.dropdown}>
              <div className={styles.labelParent}>
                <div className={styles.label}>Label</div>
                <div className={styles.div}>*</div>
              </div>
              <div className={styles.searchfatParent}>

                <div className={styles.text1}>12 Jun - 17 Jun</div>
                <img
                  className={styles.arrowaltdownIcon}
                  alt=""
                  src="/Image/KitInventory/arrowaltdown.svg"
                />
              </div>
              <div className={styles.helpText}>Help text</div>
            </div>
            <div className={styles.button}>
              <div className={styles.buttonSize}>
                <img
                  className={styles.infoCrFrIcon}
                  alt=""
                  src="/Image/KitInventory/info-crfr.svg"
                />
                <div className={styles.text2}>
                  See how to send invoices via whatsapp
                </div>

              </div>
            </div>
          </div>
          <button className={styles.button1}>
            <div className={styles.buttonSize1} onClick={handleFileInput}>
              <div className={styles.text3}>Upload kit invoice</div>
            </div>
            <div className={styles.uploadSection}>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
            </div>
          </button>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameWrapper1}>
            <div className={styles.searchWrapper}>
              <div className={styles.search}>

                <div className={styles.searchfatGroup}>
                  <img
                    className={styles.arrowaltdownIcon}
                    alt=""
                    src="/Image/KitInventory/searchfat.svg"
                  />
                  <input
                    className={styles.text9}
                    placeholder="Search by invoice number"
                    type="text"
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />

                </div>
              </div>
            </div>
          </div>

          {
            filteredData.length === 0 ?

              <div className={styles.frameWrapper2}>
                <div className={styles.parent}>
                  <div className={styles.div2}>
                    <img className={styles.icon} alt="" src="/Image/KitInventory/20.svg" />
                    <div className={styles.noKitsPresent}>
                      No kits present. Start uploading kit invoice.
                    </div>
                  </div>
                  <div className={styles.button2}>
                  <div className={styles.buttonSize1} onClick={handleFileInput}>
                        <div className={styles.text3}>Upload kit invoice</div>
                      </div>
                  </div>
                </div>
              </div>
              :
              <div className={styles.tableContainer}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Lab ID</th>
                      <th>User ID</th>
                      <th>Vendor Name</th>
                      <th>Vendor GST</th>
                      <th>Vendor Bank Details</th>
                      <th>Lab Name</th>
                      <th>Invoice Number</th>
                      <th>Invoice Date</th>
                      <th>Delivery Date</th>
                      <th>itemDescription</th>
                      <th>AWB Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((doctor, index) => (
                      <tr key={index}>
                        <td>{doctor.id}</td>
                        <td>{doctor.labId}</td>
                        <td>{doctor.userId}</td>
                        <td>{doctor.vendorName}</td>
                        <td>{doctor.vendorGST}</td>
                        <td>{doctor.vendorBank}</td>
                        <td>{doctor.labName}</td>
                        <td>{doctor.invoiceNumber}</td>
                        <td>{doctor.invoiceDate}</td>
                        <td>{doctor.deliveryDate}</td>
                        <td>{doctor.itemDescription}</td>
                        <td>{doctor.AWB}</td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
          }
        </div>
      </div>
      {
            reviewInvoicePopUp ?
              <div className={styles.modalOverlay}>
                <div className={styles.detailsAndTestLayout}>
                  <ReviewInvoicePage1 onClick={handleReviewInvoicePage1PopupClick} />
                </div>
              </div> : ""
          }

    </>
  );
};

export default KitInventoryHome;
