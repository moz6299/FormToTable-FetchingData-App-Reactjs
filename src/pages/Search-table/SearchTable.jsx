import React, { useEffect, useRef, useState } from "react";
import "./SearchTable.css";

const SearchTable = () => {
  const [inputValue, setInputValue] = useState("");
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")    //Fetch Data From Api Using useEffect.
      .then((response) => {
        if (!response.ok) {
          throw new Error("Response was not ok");
        }
        return response.json();
      })
      .then((contacts) => setContacts(contacts))
      .catch((error) => {
        console.log("Error fetching data:", error);
        setError("Error in fetching data. Please try again ");
      });
  }, []);

  return (
    <div className="searchtable">
      <form>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          value={inputValue}
          placeholder="Search by'Name' OR 'Phone Number'"
        />
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {contacts
            .filter((person) => {
              return (
                inputValue === "" ||
                person.name.toLowerCase().includes(inputValue.toLowerCase()) ||
                person.phone.includes(inputValue)
              );
            })
            .map((person) => {
              return (
                <tr key={person.id}>
                  <td>{person.name}</td>
                  <td>{person.phone}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchTable;
