import React from "react";
import Header from "./Header";
import VendorDetails from "./VendorDetails";

export default function VendorDashboard() {
  return (
    <div className="page">
      <div className="dashboard-container">
        <div>
          <Header />
        </div>
        <div
          style={{
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "rgb(90, 160, 240)",
            marginBottom: "20px",
          }}
        >
          <VendorDetails />
        </div>
      </div>
    </div>
  );
}
