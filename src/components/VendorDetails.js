import React from "react";
import { useDispatch } from "react-redux";
import "./vendordetails.css";
import { useState } from "react";
import { vendorActions } from "../store/vendor";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Alert from "./alert";

import { vendorSchema } from "../validations/vendor";

export default function VendorDetails() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [update, setUpdate] = useState(false);
  const dispatch = useDispatch();

  const [isValid, setisValid] = useState(true); //Validation Modal
  const vendorUpdate = async (event) => {
    event.preventDefault();
    let formData = {
      name,
      address,
      number,
      email,
    };
    setisValid(true);
    const valid = await vendorSchema.isValid(formData);
    setisValid(valid);

    console.log(valid);
  };
  const vendorUpdateHandler = (event) => {
    const payload = {
      name,
      address,
      number,
      email,
    };
    dispatch(vendorActions.updateVendor(payload));
    setUpdate(true);
    // console.log('update',update);
  };
  return (
    <form onSubmit={vendorUpdate}>
      {isValid ? null : (
        <Alert open={true} message={"Please enter proper details"} />
      )}

      <div className="vendordetails-container">
        <>
          <Stack spacing={2} sx={{ padding: 5 }} direction="column">
            <TextField
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              placeholder="Your name"
              className="input"
            />

            <TextField
              className="input"
              placeholder="Your number"
              type="text"
              value={number}
              onChange={(event) => {
                setNumber(event.target.value);
              }}
            />

            <TextareaAutosize
              className="input"
              placeholder="Your address"
              type="text"
              value={address}
              onChange={(event) => {
                setAddress(event.target.value);
              }}
              minRows={3}
            />

            <TextField
              className="input"
              placeholder="Your mail"
              type="text"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </Stack>
        </>

        <button className="button" onClick={vendorUpdateHandler}>
          Update
          {update ? (
            <Alert
              open={true}
              message={"Your details were successfully updated!"}
            />
          ) : null}
        </button>
      </div>
    </form>
  );
}
