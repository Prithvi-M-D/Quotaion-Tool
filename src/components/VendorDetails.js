import React from "react";
import { useDispatch } from "react-redux";
import "./vendordetails.css";
import { useState } from "react";
import { vendorActions } from "../store/vendor";
import TextField from "@mui/material/TextField";

import { vendorSchema } from "../validations/vendor";

export default function VendorDetails() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const vendorUpdate = async (event) => {
    event.preventDefault();
    let formData = {
      name,
      address,
      number,
      email,
    };
    const isValid = await vendorSchema.isValid(formData);
    console.log(isValid);
  };
  const vendorUpdateHandler = (event) => {
    const payload = {
      name,
      address,
      number,
      email,
    };
    dispatch(vendorActions.updateVendor(payload));
  };
  return (
    <form onSubmit={vendorUpdate}>
      <div className="vendordetails-container">
        <>
          <div className="label">
            <label>Name</label>
          </div>

          <TextField
            error
            id="outlined-error"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            placeholder="Your name"
            className="input"
          />

          <div className="label">
            <label>Number</label>
          </div>
          <input
            className="input"
            placeholder="Your number"
            type="text"
            value={number}
            onChange={(event) => {
              setNumber(event.target.value);
            }}
          />
          <div className="label">
            <label>Address</label>
          </div>
          <input
            className="input"
            placeholder="Your address"
            type="text"
            value={address}
            onChange={(event) => {
              setAddress(event.target.value);
            }}
          />
          <div className="label">
            <label>Mail</label>
          </div>
          <input
            className="input"
            placeholder="Your mail"
            type="text"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </>

        <button className="button" onClick={vendorUpdateHandler}>
          Update
        </button>
      </div>
    </form>
  );
}
