import React, { useEffect, useState } from "react";
import "./Form.css";

const Form = ({ setData }) => {
  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    address: "",
    age: "",
    maritalStatus: "Single",
  });

  const handleEvent = (e) => {
    setUserInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });

    if(e.target.name === "age" && e.target.value <1){    //التحقق من أن الرقم الذي يتم ادخاله موجب وأكبر من الصفر
        e.target.value=""
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prev) => {
      return [...prev, userInfo];
    });

    setUserInfo({
      //مسح الكلام في خانات الفورم بعد السبميت
      firstname: "",
      lastname: "",
      address: "",
      age: "",
      maritalStatus: "Single",
    });
  };

  return (
    <div className="formcomp">
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>{" "}
        <input
          type="text"
          onChange={handleEvent}
          value={userInfo.firstname}
          name="firstname"
          placeholder="First Name"
        />
        <label>Last Name:</label>{" "}
        <input
          type="text"
          onChange={handleEvent}
          value={userInfo.lastname}
          name="lastname"
          placeholder="Last Name"
          required
        />
        <label>Address:</label>{" "}
        <input
          type="text"
          onChange={handleEvent}
          value={userInfo.address}
          name="address"
          placeholder="Address"
          required
        />
        <label>Age:</label>{" "}
        <input
          type="number"
          onChange={handleEvent}
          value={userInfo.age}
          name="age"
          placeholder="Age"
          required
           min="1"
        />
        <label>Marital Status:</label>{" "}
        <select
          onChange={handleEvent}
          value={userInfo.maritalStatus}
          name="maritalStatus"
          required
        >
          <option value="Single">Single</option>
          <option value="Married">Married</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
