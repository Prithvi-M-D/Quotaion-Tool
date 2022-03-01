import React from "react";
import { useState } from "react";
import { clientActions } from "../store/client";
import { useDispatch } from "react-redux";

export default function Decor() {
  const [reception, setReception] = useState(false);
  const [mehendi, setMehendi] = useState(false);
  const [muhurta, setMuhurta] = useState(false);
  const dispatch = useDispatch();

  const decorDetailHandler = () => {
    const payload = {
      reception,
      mehendi,
      muhurta,
    };
    dispatch(clientActions.decorDetail(payload));
  };
  return (
    <div className="vendordetails-container">
      <div>
        <div className="label">
          <label>Reception</label>
        </div>
        <input
          className="input"
          type="checkbox"
          name="Reception"
          value={reception}
          onChange={(e) => {
            setReception(!reception);
          }}
        />
      </div>
      <div>
        <div className="label">
          <label>Muhurta</label>
        </div>
        <input
          className="input"
          type="checkbox"
          name="muhurta"
          value={muhurta}
          onChange={(e) => {
            setMuhurta(!muhurta);
          }}
        />
      </div>
      <div>
        <div className="label">
          <label>Mehendi</label>
        </div>
        <input
          className="input"
          type="checkbox"
          name="Mehendi"
          value={mehendi}
          onChange={(e) => {
            setMehendi(!mehendi);
          }}
        />
      </div>
      <button className="button" onClick={decorDetailHandler}>
        Save
      </button>
    </div>
  );
}
