import React, { useState } from "react";
import Form from "../../components/Form/Form";
import Table from "../../components/Table/Table";
import EditForm from "../../components/EditForm/EditForm";


const FormTable = () => {

  const [data, setData] = useState([]);

  const[editpop,setEditPop]= useState(false);

  const [findindex,setFindindex] = useState(null)



  return (
    <>
    {editpop === true ? <EditForm data={data} setData={setData} setEditPop={setEditPop} findindex={findindex} /> : <></> }
    <div className="formtable">
      <Form setData={setData} />
      <Table setEditPop={setEditPop} data={data} setData={setData} setFindindex={setFindindex} />
    </div>
    </>
  );
};

export default FormTable;


