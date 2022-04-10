import React, { useState, useEffect } from "react";
import NavBar from "./Navbar";
// import api from "../api/contact";
import axios from "axios";
import { Card } from "react-bootstrap";
import Style from "./css/ViewAllContact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function ViewAllContact() {
  const [contact, setContact] = useState([]);
  const getContact = async () => {
    let response = await axios.get("http://localhost:3000/testing");
    setContact(response.data);
  };
  useEffect(() => {
    getContact();
  }, []);
  const deletehandle = async (id) => {
    await axios.delete(`http://localhost:3000/testing/${id}`);
    // console.log(id);
    getContact();
  };
  return (
    <div className={`${Style.contactViewDiv}`}>
      <NavBar />

      {contact.map((value, index) => {
        return (
          <Card
            key={index}
            className="w-100"
            style={{
              //   width: "50%",
              display: "block",
              backgroundColor: "yellow",
              margin: "15px 0",
            }}
          >
            <Card.Body>
              <FontAwesomeIcon
                onClick={() => {
                  deletehandle(value.id);
                }}
                className={`${Style.icon}`}
                icon={faTrashAlt}
              />
              <Card.Title>Name: {value.name}</Card.Title>
              <Card.Title>Mobile: {value.mobile}</Card.Title>
              <Card.Title>Email: {value.email}</Card.Title>
              <Card.Title>Query: {value.query}</Card.Title>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
