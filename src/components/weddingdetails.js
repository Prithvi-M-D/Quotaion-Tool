import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {clientActions} from '../store/client';
export default function Weddingdetails() {
  const [wdate, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [reception, setReception] = useState('');
  const [muhurta, setMuhurta] = useState('');
  const [Mehendi, setMehendi] = useState('');
  const dispatch=useDispatch();
 

  const weddingDetailHandler=()=>{
    const wed={wdate, venue, reception, muhurta, Mehendi};
    dispatch(clientActions.weddingDetail(wed));
  }

  return (
    <div className="vendordetails-container">
          <div>
            <div className="label">
              <label>Date</label>
            </div>
            <input
              className="input"
              type="date"
              name="date"
              value={wdate}
              placeholder="Enter wedding date"
              onChange={(e)=>{setDate(e.target.value);}}
            />
          </div>
          <div>
            <div className="label">
              <label>Venue</label>
            </div>
            <input
              className="input"
              type="text"
              name="Venue"
              value={venue}
              placeholder="Enter wedding venue"
              onChange={(e)=>{setVenue(e.target.value);}}
            />
          </div>
          <div>
            <div className="label">
              <label>Reception</label>
            </div>
            <input
              className="input"
              type="date"
              name="Reception"
              value={reception}
              onChange={(e)=>{setReception(e.target.value);}}
            />
          </div>
          <div>
            <div className="label">
              <label>Muhurta</label>
            </div>
            <input
              className="input"
              type="date"
              name="muhurta"
              value={muhurta}
              onChange={(e)=>{setMuhurta(e.target.value);}}
            />
          </div>
          <div>
            <div className="label">
              <label>Mehendi</label>
            </div>
            <input
              className="input"
              type="date"
              name="Mehendi"
              value={Mehendi}
              onChange={(e)=>{setMehendi(e.target.value);}}
            />
          </div>
          <button className="button" onClick={weddingDetailHandler}>Save</button>
    </div>
  );
}
