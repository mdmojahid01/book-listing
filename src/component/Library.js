import React from "react";
import { useSelector } from "react-redux";
import NavBar from "./Navbar";
import { Card } from "react-bootstrap";
import libStyle from "../component/css/Library.module.css";
import { selectBookList } from "../features/book/bookSlice";

export default function Library() {
  const bookList = useSelector(selectBookList);

  return (
    <div className={`${libStyle.bg}`}>
      <div className={`${libStyle.libraryDiv}`}>
        <NavBar />
        <div className={`container-fluid`}>
          <h1>Library</h1>

          {bookList.map((value, index) => {
            return (
              <Card
                key={index}
                style={{
                  width: "18rem",
                  display: "inline-block",
                  backgroundColor: "yellow",
                  margin: "15px",
                }}
              >
                <Card.Body>
                  <Card.Title>{value}</Card.Title>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
