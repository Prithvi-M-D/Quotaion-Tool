import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { clientActions } from "../store/client";
import Alert from "./alert";
import { weddingSchema } from "../validations/client";
import TextField from "@mui/material/TextField";
import "./vendordetails.css";

export default function Weddingdetails() {
  const [venue, setVenue] = useState("");
  const [reception, setReception] = useState(null);
  const [muhurta, setMuhurta] = useState(null);
  const [Mehendi, setMehendi] = useState(null);
  const dispatch = useDispatch();

  const [isValid, setisValid] = useState(true); //Validation Modal
  const weddingUpdate = async (event) => {
    event.preventDefault();
    let formData = {
      venue,
      reception,
      muhurta,
      Mehendi,
    };
    setisValid(true);
    const valid = await weddingSchema.isValid(formData);
    setisValid(valid);
    console.log(isValid);
    console.log(valid);
  };
  
  const weddingDetailHandler = () => {
    const wed = { venue, reception, muhurta, Mehendi };
    dispatch(clientActions.weddingDetail(wed));
  };

  return (
    <form onSubmit={weddingUpdate}>
      {isValid ? null : (
        <Alert open={true} message={"Please enter proper wedding details"} />
      )}
      <div className="vendordetails-container">
        <div style={{margin:'10px'}}>
          
          <TextField
            className="input"
            type="text"
            name="Venue"
            value={venue}
            placeholder="Enter wedding venue"
            onChange={(e) => {
              setVenue(e.target.value);
            }}
          />
        </div>
        <div style={{margin:'10px'}}>
         
          <TextField
            className="input"
            type="date"
            name="Reception"
            value={reception}
            onChange={(e) => {
              setReception(e.target.value);
            }}
          />
        </div>
        <div style={{margin:'10px'}}>
         
          <TextField
            className="input"
            type="date"
            name="muhurta"
            value={muhurta}
            onChange={(e) => {
              setMuhurta(e.target.value);
            }}
          />
        </div>
        <div style={{margin:'10px'}}>
         
          <TextField
            className="input"
            type="date"
            name="Mehendi"
            value={Mehendi}
            onChange={(e) => {
              setMehendi(e.target.value);
            }}
          />
        </div>
        <button className="button" onClick={weddingDetailHandler} style={{margin:'10px'}}>
          Save
        </button>
      </div>
    </form>
  );
}
