import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import FormTable from "./pages/Form-table/FormTable";
import SearchTable from "./pages/Search-table/SearchTable";
import Navbar from "./components/Navbar/Navbar";
import EditForm from "./components/EditForm/EditForm";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<FormTable />} />
        <Route path="/searchtable" element={<SearchTable />} />
      </Routes>
    </div>
  );
};

export default App;
