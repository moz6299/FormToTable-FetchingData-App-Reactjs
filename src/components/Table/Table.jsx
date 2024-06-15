import React, { useState } from "react";
import "./Table.css";

const Table = ({ data,setData,setEditPop,setFindindex}) => {

    

  const handleDelete = (index) => {
    const updatedData = data.filter((item, num) => {
      return num !== index;
    });

    setData(updatedData);
  };

//دالة مسئولة عن تعيين الإندكس للصف اللي ضغطنا على زرار الإيديت بتاعه
  const handleEdit = (index)=>{
    setFindindex(index);
    setEditPop(true); //عشان الكومبوننت يظهر
  }

  return (
    <div className="tablecomp">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Age</th>
            <th>Marital Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.address}</td>
                <td>{item.age}</td>
                <td>{item.maritalStatus}</td>
                <td>
                  <button className="edit" onClick={()=> handleEdit(index)}>Edit</button>
                  <button className="delete" onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
