import React from "react";
import { useState } from "react";
import { clientActions } from "../store/client";
import { useDispatch } from "react-redux";
import "./photography.css";

export default function Photography() {
  const [reception, setReception] = useState(false);
  const [mehendi, setMehendi] = useState(false);
  const [muhurta, setMuhurta] = useState(false);

  const [receptioncandid, setReceptionCandid] = useState(false);
  const [mehendicandid, setMehendiCandid] = useState(false);
  const [muhurtacandid, setMuhurtaCandid] = useState(false);

  const [receptionnormal, setReceptionNormal] = useState(false);
  const [mehendinormal, setMehendiNormal] = useState(false);
  const [muhurtanormal, setMuhurtaNormal] = useState(false);

  const dispatch = useDispatch();

  const photographyDetailHandler = () => {
    const payload = {
      reception,
      mehendi,
      muhurta,
      receptionnormal,
      receptioncandid,
      mehendicandid,
      mehendinormal,
      muhurtacandid,
      muhurtanormal,
    };
    dispatch(clientActions.photographyDetail(payload));
  };

  return (
    <div className="vendordetails-container">
      <div className="photo-outer">
        <div className="options">
          <div className="photo-label">
            <label>Reception</label>
          </div>
          <input
            className="photo-input"
            type="checkbox"
            name="Reception"
            value={reception}
            onChange={(e) => {
              setReception(!reception);
            }}
          />
          <div className="photo-label">
            <label>Candid</label>
          </div>
          <input
            type="checkbox"
            id="candid"
            value={receptioncandid}
            onChange={(e) => {
              setReceptionCandid(!receptioncandid);
            }}
          ></input>
          <div className="photo-label">
            <label>Photo and Video</label>
          </div>
          <input
            type="checkbox"
            id="normal"
            value={receptionnormal}
            onChange={(e) => {
              setReceptionNormal(!receptionnormal);
            }}
          />
        </div>
        {/* ------------------------------------------------------------------------------------------- */}

        <div className="options">
          <div className="photo-label">
            <label>Muhurta</label>
          </div>
          <input
            className="photo-input"
            type="checkbox"
            name="muhurta"
            value={muhurta}
            onChange={(e) => {
              setMuhurta(!muhurta);
            }}
          />
          <div className="photo-label">
            <label>Candid</label>
          </div>
          <input
            type="checkbox"
            id="candid"
            value={muhurtacandid}
            onChange={(e) => {
              setMuhurtaCandid(!muhurtacandid);
            }}
          />
          <div className="photo-label">
            <label>Photo and Video</label>
          </div>
          <input
            type="checkbox"
            id="normal"
            value={muhurtanormal}
            onChange={(e) => {
              setMuhurtaNormal(!muhurtanormal);
            }}
          />
        </div>
        {/* -------------------------------------------------------------------------------------------------------- */}

        <div className="options">
          <div className="photo-label">
            <label>Mehendi</label>
          </div>
          <input
            className="photo-input"
            type="checkbox"
            name="Mehendi"
            value={mehendi}
            onChange={(e) => {
              setMehendi(!mehendi);
            }}
          />
          <div className="photo-label">
            <label>Candid</label>
          </div>
          <input
            type="checkbox"
            id="candid"
            value={mehendicandid}
            onChange={(e) => {
              setMehendiCandid(!mehendicandid);
            }}
          />
          <div className="photo-label">
            <label>Photo and Video</label>
          </div>
          <input
            type="checkbox"
            id="normal"
            value={mehendinormal}
            onChange={(e) => {
              setMehendiNormal(!mehendinormal);
            }}
          />
        </div>
        <div className="options">
        <button className="button" onClick={photographyDetailHandler}>
          Save
        </button>
        </div>
      </div>
    </div>
  );
}
