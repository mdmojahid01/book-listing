import React, { useState } from "react";
import addStyle from "../component/css/Addbook.module.css";
import NavBar from "./Navbar";
import { useDispatch } from "react-redux";
import { addBook } from "../features/book/bookSlice";

export default function Addbook() {
  const [bookName, setBookName] = useState("");
  const dispatch = useDispatch();
  function handleBook(e) {
    setBookName(e.target.value);
  }
  function resetBookName() {
    setBookName("");
  }

  const enterKeyHandle = (e) => {
    if (e.key === "Enter") {
      if (bookName === "") {
        alert("Please Enter Book Name");
      } else {
        dispatch(addBook(bookName));
        resetBookName();
      }
    }
  };

  return (
    <>
      <div className={`${addStyle.addBookdiv}`}>
        <NavBar />
        <div
          className={`container - fluid ${addStyle.colCenter} ${addStyle.inputDiv}`}
        >
          <h1>Add Books In Library:</h1>
          <input
            className={`${addStyle.inputField} bg-transparent p-2 m-2`}
            type="text"
            onChange={handleBook}
            onKeyDown={enterKeyHandle}
            value={bookName}
            placeholder="Type Your Book Name..."
          />
          <button
            className={`btn-warning p-2 m-2 ${addStyle.btnWarning}`}
            onClick={() => {
              if (bookName === "") {
                alert("Please Enter Book Name");
              } else {
                dispatch(addBook(bookName));
                resetBookName();
              }
            }}
          >
            Add in Library
          </button>
        </div>
      </div>
    </>
  );
}
