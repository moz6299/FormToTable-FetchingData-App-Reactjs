import React, { useState } from "react";
import "./EditForm.css";

const EditForm = ({setEditPop, data, setData, findindex}) => {

  const [editInfo, setEditinfo] = useState(data[findindex]) // كدة مسكنا بيانات الأوبجكت اللي ضغطنا على الاندكس بتاعه

  const handlethisChange = (e)=>{
    setEditinfo((prev)=>{return{...prev,[e.target.name]:e.target.value}}) // كدة لما دخلنا بيانات جديدة عدلنا الأوبجكت اللي مسكناه
    if(e.target.name==="age" && e.target.value <1){
      e.target.value =""
    }
  }

  const handleSave = ()=>{
const newData = [...data]
newData[findindex] = editInfo
setData(newData)  // بعد ما ضغطنا على زرار سيف كدة استبدلنا الأوبجكت اللي عدلناه بالأوبجكت اللي كان في مصفوفة الداتا 

    setEditPop(false) //قفلنا الكومبوننت
  }

  

  return <div className="editform">
    <form>   
    <label>First Name:</label><input type="text"  onChange={handlethisChange}  name='firstname' value={editInfo.firstname}  placeholder='First Name' required/>
    <label>Last Name:</label><input type="text"  onChange={handlethisChange}  name='lastname' value={editInfo.lastname}  placeholder='Last Name' required />
    <label>Adress:</label> <input type="text"  onChange={handlethisChange}  name='address' value={editInfo.address}  placeholder='Address' required />
    <label>Age:</label><input type="number"   onChange={handlethisChange}  name='age' value={editInfo.age}  placeholder='Age' required min={1}/>
    <label>Martial Status:</label><select  onChange={handlethisChange}  name='maritalStatus' required value={editInfo.maritalStatus}  >
                <option value="Single">Single</option>
                <option value="Married">Married</option>
            </select>
            <button className="save" onClick={handleSave} type='button'>Save</button>
            <button onClick={()=>setEditPop(false)} type='button'>Cancel</button>
            
        </form>
      
  </div>;
};

export default EditForm;




