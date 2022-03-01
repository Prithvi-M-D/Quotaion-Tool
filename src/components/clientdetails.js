import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { clientActions } from "../store/client";
import { clientSchema } from "../validations/client";
import TextField from "@mui/material/TextField";
import Alert from "./alert";
import Stack from "@mui/material/Stack";

export default function ClientDetails() {
  const dispatch = useDispatch();
  const [cname, setCname] = useState('');
  const [cphone, setCphone] = useState('');
  const [caddress, setCaddress] = useState('');
  const [isValid, setisValid] = useState(true); //Validation Mod

  const clientValid = async (event) => {
    event.preventDefault();
    let formData = {
      cname,
      caddress,
      cphone,
    };
    setisValid(true);
    const valid = await clientSchema.isValid(formData);
    setisValid(valid);
    console.log(isValid);
    console.log(valid);
  };

  const clientDetails = () => {
    const payload = {
      cname,
      cphone,
      caddress,
    }
    dispatch(clientActions.clientDetail(payload));
  }

  return (
    <form onSubmit={clientValid}>
      {isValid ? null : <Alert open={true} message={'Please enter proper client details'} />}
      <div style={{ width: '500px' }} >
        <div>
        <Stack spacing={2} sx={{ padding: 5 }} direction="column">
          <div >
            {/* <div className="label">
            <label>Client Name</label>
          </div> */}
            <TextField
              fullWidth
              className="input"
              placeholder="Enter client name"
              type="text"
              value={cname}
              onChange={(event) => {
                setCname(event.target.value);
              }}
            />
          </div>
          <div>
            {/* <div className="label">
            <label>Phone</label>
          </div> */}
            {/* <input
              className="input"
              type="number"
              name="number"
              value={cphone}
              placeholder="Enter client number"
              onChange={(e) => { setCphone(e.target.value) }}
            /> */}
            <TextField
              fullWidth
              className="input"
              placeholder="Enter client number"
              type="text"
              value={cphone}
              onChange={(event) => {
                setCphone(event.target.value);
              }}
            />
          </div>
          <div>
            {/* <div className="label">
              <label>Address</label>
            </div> */}
            {/* <input
              className="input"
              type="text"
              name="date"
              value={caddress}
              placeholder="Enter client address"
              onChange={(e) => { setCaddress(e.target.value) }}
            /> */}
            <TextField
              fullWidth
              className="input"
              placeholder="Enter client number"
              type="text"
              value={caddress}
              onChange={(event) => {
                setCaddress(event.target.value);
              }}
            />
          </div>
          <button className="button" style={{ width : '320px', marginLeft : 'auto', marginRight: 'auto'  }} onClick={clientDetails}>Save</button>
        </Stack>
        </div>
        
      </div>
    </form>
  );
}
