import React from "react";
import './logmein.css';
import {Link} from 'react-router-dom';
export default function LogMeIn() {
  return (
    
      <div className="page">
        <div className="login">
          <h4 className="headtag">Quotation Tool</h4>
          <p className="login-tagline">
            having messed up in a bunch of clients
          </p>
          <p className="login-tagline">
            ever wanted to have an organized quotation creator, this tool is
            gonna make your life better
          </p>
          <Link className="login-google-signin" to='/vendordashboard'>sign in with google</Link>
        </div>
      </div>
      
  );
}
