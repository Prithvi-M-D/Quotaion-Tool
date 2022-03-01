import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { clientActions } from "../store/client";
import "./photography.css";

export default function Food() {
  const [reception, setReception] = useState(false);
  const [countrecep, setCountRecep] = useState(null);

  const [mehendi, setMehendi] = useState(false);
  const [countmehendi, setCountMehendi] = useState(null);

  const [muhurta, setMuhurta] = useState(false);
  const [countmuhurta, setCountMuhurta] = useState(null);

  const dispatch = useDispatch();

  const foodDetailHandler = () => {
    const payload = {
      reception,
      muhurta,
      mehendi,
      countmehendi,
      countmuhurta,
      countrecep,
    };
    dispatch(clientActions.foodDetail(payload));
  };
  return (
    <div className="vendordetails-container">
      <div className="options">
        <div className="label">
          <label>Reception</label>
        </div>
        <input
          className="input-photo"
          type="checkbox"
          value={reception}
          name="Reception"
          onChange={(e) => {
            setReception(!reception);
          }}
        />
         <div className="label">
          <label>Reception Number of guest</label>
        </div>
        <select
          name="Reception"
          id="Reception"
          value={countrecep}
          onChange={(e) => {
            setCountRecep(e.target.value);
          }}
        >
          <option id="500">500</option>
          <option id="1000">1000</option>
          <option id="1500">1500</option>
          <option id="2000">2000</option>
        </select>
      
      </div>
      
       

{/* -------------------------------------------------------------------------------------------------- */}
      <div className="options">
        <div className="label">
          <label>Muhurta</label>
        </div>
        <input
          className="input-photo"
          type="checkbox"
          value={muhurta}
          name="muhurta"
          onChange={(e) => {
            setMuhurta(!muhurta);
          }}
        />
        <div className="label">
          <label>Muhurta Number of guest</label>
        </div>
        <select
          name="Muhurta"
          id="Muhurta"
          value={countmuhurta}
          onChange={(e) => {
            setCountMuhurta(e.target.value);
          }}
        >
          <option id="500">500</option>
          <option id="1000">1000</option>
          <option id="1500">1500</option>
          <option id="2000">2000</option>
        </select>
      </div>
     

{/* --------------------------------------------------------------------------------------------------- */}
      <div className="options">
        <div className="label">
          <label>Mehendi</label>
        </div>
        <input
          className="input-photo"
          type="checkbox"
          value={mehendi}
          name="Mehendi"
          onChange={(e) => {
            setMehendi(!mehendi);
          }}
        />
          <div className="label">
          <label>Mehendi Number of guest</label>
        </div>
        <select
          name="Mehendi"
          id="Mehendi"
          value={countmehendi}
          onChange={(e) => {
            setCountMehendi(e.target.value);
          }}
        >
          <option id="500">500</option>
          <option id="1000">1000</option>
          <option id="1500">1500</option>
          <option id="2000">2000</option>
        </select>
      
      </div>
      


      <button className="button" style={{ width : '320px', marginLeft : 'auto', marginRight: 'auto'  }} onClick={foodDetailHandler}>
        Save
      </button>
    </div>
  );
}
