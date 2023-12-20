import { useState, useCallback } from "react";
import ReviewInvoicePage1 from "../ReviewInvoicePage1/ReviewInvoicePage1";
import ReviewInvoicePage2 from "../ReviewInvoicePage2/ReviewInvoicePage2";
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
    "AWB": 240,
    "HSN": "ABC123",
    "GSTRate": 18,
    "CGSTRate": 9,
    "SGSTRate": 9,
    "IGSTRate": 0,
    "Discount": 50,
    "Quantity": 10,
    "FinalAmount": 4500,
    "KitsReceived": 8,
    "Amount": 4000
  },
  {
    "id": 2,
    "labId": 105,
    "userId": "john101",
    "vendorName": "john",
    "vendorGST": "ABCDE123",
    "vendorBank": "HDFC",
    "labName": "Pharmacy",
    "invoiceNumber": "abcXYZ",
    "invoiceDate": "15 March",
    "deliveryDate": "20 er",
    "itemDescription": "Testing items",
    "AWB": 245,
    "HSN": "XYZ456",
    "GSTRate": 12,
    "CGSTRate": 6,
    "SGSTRate": 6,
    "IGSTRate": 0,
    "Discount": 40,
    "Quantity": 15,
    "FinalAmount": 6000,
    "KitsReceived": 12,
    "Amount": 5500
  },

  // Add more data objects as needed
];
const KitInventoryHome = () => {
  const [kitUpload, setKitUpload] = useState("");
  const [reviewInvoicePopUp, setReviewInvoicePopUp] = useState(false)
  const [reviewInvoicePopUp2, setReviewInvoicePopUp2] = useState(false)

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
  const [whatsappPrevOpen, setWhatsappPrevOpen] = useState(false)

  const heandelWhatsappPrev = () => {
    setWhatsappPrevOpen(!whatsappPrevOpen)
  }

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
      setTimeout(() => {
        setCheckingIsOpen(false)
      }, 3000);

      // setCheckingIsOpen(false)
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
    setReviewInvoicePopUp2(!reviewInvoicePopUp2)
  }
  const handleReviewInvoicePage2PopupClick = () => {
    setReviewInvoicePopUp2(!reviewInvoicePopUp2)
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
            <div onClick={heandelWhatsappPrev} className={styles.button}>
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
        <div className={styles.frameContainer}>
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

              <div className={styles.tableLayout}>
                <div className={styles.detailsTable}>
                  <div className={styles.detailsTableHeader}>
                    <div className={styles.boxSize0f}>
                      <div className={styles.boxSizeHalf}>Id</div>
                      <div className={styles.boxSize1}>LabId</div>
                      <div className={styles.boxSize1}>UserId</div>
                      <div className={styles.boxSize2}>Vendar name</div>

                    </div>


                    <div className={styles.boxSize0}></div>
                    <div className={styles.boxSize2}>Vendor GSTIN</div>
                    <div className={styles.boxSize3}>Vendor Bank Details</div>
                    <div className={styles.boxSize2}>Lab Name</div>
                    <div className={styles.boxSize2}>Invoice Number</div>
                    <div className={styles.boxSize2}>Invoice Date</div>
                    <div className={styles.boxSize2}>Delivery Date</div>
                    <div className={styles.boxSize2}>Item Description</div>
                    <div className={styles.boxSize2}>AWB number</div>
                    <div className={styles.boxSize2}>HSN/ASN</div>
                    <div className={styles.boxSize2}>GST rate(%)</div>
                    <div className={styles.boxSize2}>CGST rate(%)</div>
                    <div className={styles.boxSize2}>SGST rate(%)</div>
                    <div className={styles.boxSize2}>IGST rate(%)</div>
                    <div className={styles.boxSize2}>Discount(₹)</div>
                    <div className={styles.boxSize2}>Quantity</div>
                    <div className={styles.boxSize2}>Final amount(₹)</div>
                    <div className={styles.boxSize3}>Kits actually recieved</div>
                    <div className={styles.boxSize2}>Amount(₹)</div>

                  </div>
                  {filteredData.map((entry, index) => (
                    <div className={styles.detailsTableData} key={entry.id}>
                      <div className={styles.boxSize0fData}>
                        <div className={styles.boxSizeHalf}>{entry.id}</div>
                        <div className={styles.boxSize1}>{entry.labId}</div>
                        <div className={styles.boxSize1}>{entry.userId}</div>
                        <div className={styles.boxSize2}>{entry.vendorName}</div>
                      </div>

                      <div className={styles.boxSize0Data}></div>
                      <div className={styles.boxSize2}>{entry.vendorGST}</div>
                      <div className={styles.boxSize3}>{entry.vendorBank}</div>
                      <div className={styles.boxSize2}>{entry.labName}</div>
                      <div className={styles.boxSize2}>{entry.invoiceNumber}</div>
                      <div className={styles.boxSize2}>{entry.invoiceDate}</div>
                      <div className={styles.boxSize2}>{entry.deliveryDate}</div>
                      <div className={styles.boxSize2}>{entry.itemDescription}</div>
                      <div className={styles.boxSize2}>{entry.AWB}</div>
                      <div className={styles.boxSize2}>{entry.HSN}</div>
                      <div className={styles.boxSize2}>{entry.GSTRate}</div>
                      <div className={styles.boxSize2}>{entry.CGSTRate}</div>
                      <div className={styles.boxSize2}>{entry.SGSTRate}</div>
                      <div className={styles.boxSize2}>{entry.IGSTRate}</div>
                      <div className={styles.boxSize2}>{entry.Discount}(₹)</div>
                      <div className={styles.boxSize2}>{entry.Quantity}</div>
                      <div className={styles.boxSize2}>{entry.FinalAmount}</div>
                      <div className={styles.boxSize3}>{entry.KitsReceived}</div>
                      <div className={styles.boxSize2}>{entry.Amount}</div>
                    </div>
                  ))}
                </div>
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

              <div className={styles.checkingFile}>Checking file ... <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                <path d="M4.6665 10H16.3332M16.3332 10L11.3332 5M16.3332 10L11.3332 15" stroke="#0067DF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg></div>
              <div className={styles.checkingFilePleaseWait}>Please Wait</div>
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
              <img className={styles.BottomBoxIcon} src="https://s3-alpha-sig.figma.com/img/26e0/0aca/41f1850b42974fc9d572d07c290d1bac?Expires=1703462400&Signature=DPAl2sy3YCDUkdl-cnc5jmY3igyMzW~KBUH7dE1T87PSLf0VhA2zMcHdhcz6Tx1WBg1gXMQg35FNebuZfMpXYaP7EayH3-gOFuOCqbRJbPMtRT5MzP~mjve5y~-hx24s0uzgdV4cLTZ5L2yavHLQsFRt~x3Vwqk7aLL2kE46r0Kja7OF9cckdIPwHUAtIp1-sIAXhFZW1qbRS7Eekm7z1~dQu1v5nUAst6ItO9sSSQ6YNjyJQuHlqUp1CfnlPeteCPqxuHFaamWmCw6ElQNyhN5taM6qlXZ9elaEULDlzBwh2CL1uCdMbOUzm0vLwYxrUv2Axh4LsenVpc6KMnGGYA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
              <div className={styles.blackBoldText}>Reading the invoice</div>
              <div className={styles.blackNormalText}>Please wait...</div>
            </div>

          </div>
        </div>
        : ""
      }
      {whatsappPrevOpen ?
        <div className={styles.whatsappModal}>
          <div className={styles.whatsappModalLayout}>
            <div className={styles.whatsappModelTopBox} >
              <div className={styles.blackBoldText}>See how to send invoices via whatsapp</div>
              <div onClick={heandelWhatsappPrev}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4.16699 4.16602L10.0003 9.99935M15.8337 15.8327L10.0003 9.99935M10.0003 9.99935L15.8337 4.16602L4.16699 15.8327" stroke="#181B1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
            <div className={styles.WhatsappModelBottomBox}>

              <video className={styles.VideoPlayer} controls autoPlay>
                <source src="/Image/StartHere/reactApp.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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
      {
        reviewInvoicePopUp2 ?
          <div className={styles.modalOverlay}>
            <div className={styles.detailsAndTestLayout}>
              <ReviewInvoicePage2 onClick={handleReviewInvoicePage2PopupClick} />
            </div>
          </div> : ""
      }

    </>
  );
};

export default KitInventoryHome;
