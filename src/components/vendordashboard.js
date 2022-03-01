import React from "react";
import Header from "./Header";
import VendorDetails from "./VendorDetails";
import "./vendordashboard.css";


export default function VendorDashboard() {
  return (
    <div className="page">
      <div className="container">
        <div>
          <Header />
        </div>
        <div
          style={{
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "rgb(90, 160, 240)",
            margin: "20px",
            
          }}
        >
          <VendorDetails />
        </div>
      </div>
    </div>
  );
}
