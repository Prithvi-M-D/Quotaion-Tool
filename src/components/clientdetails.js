import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { clientActions } from "../store/client";

export default function ClientDetails() {
  const dispatch=useDispatch();
  const [cname, setCname] = useState('');
  const [cphone, setCphone] = useState('');
  const [caddress, setCaddress] = useState('');
  const clientDetails=()=>{
    const payload ={
      cname,
      cphone,
      caddress,
    }
    dispatch(clientActions.clientDetail(payload));
  }
 
  return (
    <div className="vendordetails-container">
       <div>
            <div className="label">
              <label>Client Name</label>
            </div>
            <input
              className="input"
              type="text"
              name="name"
              value={cname}
              placeholder="Enter client name"
              onChange={(e)=>{setCname(e.target.value)}}
            />
          </div>
          <div>
            <div className="label">
              <label>Phone</label>
            </div>
            <input
              className="input"
              type="number"
              name="number"
              value={cphone}
              placeholder="Enter client number"
              onChange={(e)=>{setCphone(e.target.value)}}
            />
          </div>
          <div>
            <div className="label">
              <label>Address</label>
            </div>
            <input
              className="input"
              type="text"
              name="date"
              value={caddress}
              placeholder="Enter client address"
              onChange={(e)=>{setCaddress(e.target.value)}}
            />
          </div>
          <button className="button" onClick={clientDetails}>Save</button>
    </div>
  );
}
