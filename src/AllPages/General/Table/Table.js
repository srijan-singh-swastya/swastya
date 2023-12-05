import styles from './Table.module.css'; // Import CSS module styles

import React from 'react'

const Table = () => {
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
        }
        // Add more data objects as needed
    ];

    return (
        <div>

            <div className={styles.tableLayout}>
                <div className={styles.detailsTable}>
                    <div className={styles.detailsTableHeader}>
                        {/* <div className={styles.boxSize0f}>
                      <div className={styles.boxSizeHalf}>Id</div>
                      <div className={styles.boxSize1}>LabId</div>
                      <div className={styles.boxSize1}>UserId</div>
                      <div className={styles.boxSize2}>Vendar name</div>

                    </div> */}


                        {/* <div className={styles.boxSize0}></div> */}
                        <div className={styles.boxSizeHalf}>Id</div>
                        {/* <div className={styles.boxSize1}>LabId</div>
                        <div className={styles.boxSize1}>UserId</div>
                        <div className={styles.boxSize2}>Vendar name</div>
                        <div className={styles.boxSize2}>Vendor GSTIN</div>
                        <div className={styles.boxSize3}>Vendor Bank Details</div>
                        <div className={styles.boxSize2}>Lab Name</div>
                        <div className={styles.boxSize2}>Invoice Number</div>
                        <div className={styles.boxSize2}>Invoice Date</div>
                        <div className={styles.boxSize2}>Delivery Date</div>
                        <div className={styles.boxSize2}>Item Description</div> */}
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
                    {data.map((entry, index) => (
                        <div className={styles.detailsTableData} key={entry.id}>
                            {/* <div className={styles.boxSize0fData}>
                        <div className={styles.boxSizeHalf}>{entry.id}</div>
                        <div className={styles.boxSize1}>{entry.labId}</div>
                        <div className={styles.boxSize1}>{entry.userId}</div>
                        <div className={styles.boxSize2}>{entry.vendorName}</div>
                      </div>

                      <div className={styles.boxSize0Data}></div> */}
                            <div className={styles.boxSizeHalf}>{entry.id}</div>
                            {/* <div className={styles.boxSize1}>{entry.labId}</div>
                            <div className={styles.boxSize1}>{entry.userId}</div>
                            <div className={styles.boxSize2}>{entry.vendorName}</div>


                            <div className={styles.boxSize2}>{entry.vendorGST}</div>
                            <div className={styles.boxSize3}>{entry.vendorBank}</div>
                            <div className={styles.boxSize2}>{entry.labName}</div>
                            <div className={styles.boxSize2}>{entry.invoiceNumber}</div>
                            <div className={styles.boxSize2}>{entry.invoiceDate}</div>
                            <div className={styles.boxSize2}>{entry.deliveryDate}</div>
                            <div className={styles.boxSize2}>{entry.itemDescription}</div> */}
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
        </div>
    )
}

export default Table