// rfce
import React, { useState } from "react";
import "./DOB.css"
function DateOfBirth() {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");

  const changeMonth = (e) => {
    setMonth(e.target.value);
  };

  const changeDay = (e) => {
    setDay(e.target.value);
  };

  const changeYear = (e) => {
    setYear(e.target.value);
  };

  const days = Array.from({ length: 31 }, (_, i) => (
    <option key={i + 1} value={i + 1}>
      {i + 1}
    </option>
  ));

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 80 }, (_, i) => (
    <option key={currentYear - i} value={currentYear - i}>
      {currentYear - i}
    </option>
  ));

  return (
    <div className="DOB">
      <select className="month" value={month} onChange={changeMonth}>
        <option value="" disabled>
          Month
        </option>
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
      <select value={day} onChange={changeDay}>
        <option value="" disabled>
          Day
        </option>
        {days}
      </select>

      <select value={year} onChange={changeYear}>
        <option value="" disabled>
          Year
        </option>
        {years}
      </select>
    </div>
  );
}

export default DateOfBirth;
