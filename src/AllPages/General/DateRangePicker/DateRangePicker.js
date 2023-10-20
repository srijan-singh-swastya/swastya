import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { addDays } from 'react-datepicker'; 
import "react-datepicker/dist/react-datepicker.css";
const DateRangePicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    };

    const dateObject = new Date(startDate);
    // console.log(dateObject);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth(); // Note: Months are zero-based (0 = January, 1 = February, etc.)
    const day = dateObject.getDate();
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    const seconds = dateObject.getSeconds();

    const dateObject1 = new Date(endDate);
    // console.log(dateObject);
    const endYear = dateObject1.getFullYear();
    const endMonth = dateObject1.getMonth(); // Note: Months are zero-based (0 = January, 1 = February, etc.)
    const endDay = dateObject1.getDate();


    return (
      <>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        // excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
        selectsRange
        selectsDisabledDaysInRange
        inline
      />
      <div>{day}/{month}/{year}</div>
      <div>{endDay}/{endMonth}/{endYear}</div>
      </>
    );
  };
export default DateRangePicker;
