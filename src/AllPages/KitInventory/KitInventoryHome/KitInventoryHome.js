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
  const [kitUpload, setKitUpload] = useState("");
  const [reviewInvoicePopUp, setReviewInvoicePopUp] = useState(false)
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter((user) => {
    return user.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase())
  })



  // Function to handle kit pdf/image upload
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [checkingIsOpen, setCheckingIsOpen] = useState(false)
  const [successIsOpen, setSuccessIsOpen] = useState(false)
  const [readingIsOpen, setReadingIsOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const openModal = () => {

    setModalIsOpen(!modalIsOpen);
  };
  const handleCancleModal = () => {
    setModalIsOpen(!modalIsOpen);
    setErrorMessage('');
    setSuccessMessage('');
  }

  const closeModal = () => {
    setSuccessIsOpen(false);
    setReadingIsOpen(true)
    setErrorMessage('');
    setSuccessMessage('');
    setTimeout(() => {
      closeReading(); // Close modal after successful upload (simulated)
    }, 3000);
  };
  const closeReading = () => {
    setReadingIsOpen(false)
    setReviewInvoicePopUp(!reviewInvoicePopUp)
  }

  const handleFileInput = useCallback(() => {
    const fileInput = document.getElementById('fileInput');
    fileInput.click();
  }, []);

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setModalIsOpen(false);
      setCheckingIsOpen(true)
    }
    if (!selectedFile) {
      setErrorMessage('Please Upload PDF/PNG');
      return;
    }

    if (!['application/pdf', 'image/png'].includes(selectedFile.type)) {
      setErrorMessage('Please upload a PDF or PNG file.');
      setCheckingIsOpen(false)
      setModalIsOpen(true);
      return;
    }

    if (selectedFile.size > 3 * 1024 * 1024) {
      setErrorMessage('File size exceeds 3MB. Please select a smaller file.');
      setCheckingIsOpen(false)
      setModalIsOpen(true);
      return;
    }

    // Perform upload logic here (replace this with your upload functionality)
    setSuccessMessage('File uploaded successfully!');
    setCheckingIsOpen(false)
    setSuccessIsOpen(true)
    setKitUpload(selectedFile)
    setTimeout(() => {
      closeModal(); // Close modal after successful upload (simulated)
    }, 2000);
  };





  const handleReviewInvoicePage1PopupClick = () => {
    setReviewInvoicePopUp(!reviewInvoicePopUp)
  }
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
            <div className={styles.buttonSize1} onClick={openModal}>
              <div className={styles.text3}>Upload kit invoice7</div>
            </div>
            {/* <div className={styles.uploadSection}>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
            </div> */}
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
                    <div className={styles.buttonSize1} onClick={openModal}>
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
      {modalIsOpen ?
        <div className={styles.modal}>
          <div className={styles.modalLayout}>
            <div className={styles.modelTopBox} >
              <div className={styles.blackBoldText}>Upload Kit invoice2</div>
              <div onClick={handleCancleModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4.16699 4.16602L10.0003 9.99935M15.8337 15.8327L10.0003 9.99935M10.0003 9.99935L15.8337 4.16602L4.16699 15.8327" stroke="#181B1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
            {errorMessage ?
              <div className={styles.modelErrorBox}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00033 1.29102C13.2578 1.29102 16.7087 4.74268 16.7087 8.99935C16.7087 13.256 13.2578 16.7077 9.00033 16.7077C4.74366 16.7077 1.29199 13.256 1.29199 8.99935C1.29199 4.74268 4.74366 1.29102 9.00033 1.29102Z" stroke="#E81A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8.99577 5.83594V9.51844" stroke="#E81A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8.99648 12.1628H9.00482" stroke="#E81A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                {errorMessage}
              </div> : ""
            }
            <div className={styles.modelBottomBox}>
              <div onClick={handleFileInput} className={styles.BottomBoxIcon}><img src="/Image/StartHere/kitupload.svg" /></div>
              <div className={styles.blackBoldText}> Upload PDF/PNG (max file size 3mb)</div>

              <button className={styles.button1}>
                <div onClick={handleFileInput}>
                  <div className={styles.text4}>Upload kit invoice
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                      <path d="M3.75 9.5H14.25M14.25 9.5L9.75 5M14.25 9.5L9.75 14" stroke="#0067DF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></div>
                </div>
                <div className={styles.uploadSection}>
                  <input
                    type="file"
                    id="fileInput"
                    ccept=".pdf,.png"
                    onChange={handleFileUpload}
                    style={{ display: 'none' }}
                  />
                </div>
              </button>
              {/* {errorMessage && <p className={styles.error}>{errorMessage}</p>}
              {successMessage && <p className={styles.success}>{successMessage}</p>} */}

            </div>

          </div>
        </div>
        : ""
      }
      {checkingIsOpen ?
        <div className={styles.modal}>
          <div className={styles.modalLayout}>
            <div className={styles.modelTopBox} >
              <div className={styles.blackBoldText}>Upload Kit invoice</div>
            </div>
            <div className={styles.modelBottomBox}>
              <div className={styles.blackBoldText}>Checking file...</div>
              <div className={styles.blackBoldText}>Please Wait</div>
            </div>

          </div>
        </div>
        : ""
      }
      {successIsOpen ?
        <div className={styles.modal}>
          <div className={styles.modalLayout}>
            <div className={styles.modelTopBox} >
              <div className={styles.blackBoldText}>Upload Kit invoice</div>
            </div>
            <div className={styles.modelBottomBox}>
              <div ><img className={styles.BottomBoxIcon} src="/Image/StartHere/fileUploaded.svg" /></div>
              <div className={styles.blackBoldText}>File uploaded...</div>
            </div>

          </div>
        </div>
        : ""
      }
      {readingIsOpen ?
        <div className={styles.modal}>
          <div className={styles.modalLayout}>
            <div className={styles.modelBottomBox1}>
              <img className={styles.BottomBoxIcon} src="https://s3-alpha-sig.figma.com/img/26e0/0aca/41f1850b42974fc9d572d07c290d1bac?Expires=1702252800&Signature=VpSSC8PSUF4Oy8W7QrrOhZpOhK4dlCbDoA6s6dlwvlZbX07RkqK60jl6tQatDyTRso4PL3amNYGXH7XfhVoo0FUGVKLWHsx1dCZgAs9lk1ZI-GmSLhSVm8AxjYFThxSWFzaQkF74V7ZtUMEOYkRYbiC~LxlTR-GXg2CEcXT76noWUPKcssTBc4DSRyKmR-IkqveHHd5jqoCPjWCKJb8ONZKSgtTdU-eHkRG6suvOvh06jINa3yA6qitsl6F0guYkcrc--vvqsbgDfUm709QHGQPmoT9or4kM6Wo~-pRgFkImsl1bj6MWlGykqGxdaTuqVC4wsjUR3RBPY-U6oGPwYg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
              <div className={styles.blackBoldText}>Reading the invoice</div>
              <div className={styles.blackNormalText}>Please wait...</div>
            </div>

          </div>
        </div>
        : ""
      }
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
