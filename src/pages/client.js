import React from "react";
import Header from "../components//Header";
import ClientDetails from "../components/clientdetails";
import HorizontalNonLinearStepper from "../components/stepper";
import Weddingdetails from "../components/weddingdetails";
import Decor from '../components/decor';
import Photography from '../components/photography';
import Food from '../components/food';

export default function Client(props) {
  const [active, setActive] = React.useState(0);
  let component='';
  function display(step){
    switch (active) {
      case 0:
        return (component=<ClientDetails/>);
      case 1:
        return (component=<Weddingdetails/>);
      case 2:
          return (component=<Food/>);
      case 3:
        return (component=<Decor/>);
      case 4:
        return (component=<Photography/>);
      default:
        return null;
    }}
    display(props);
  // console.log(step);
  return (
    <div className="page">
      <div style={{ width: '100%' }}>
        <div>
          <Header />
        </div>
        <div style={{ maxwidth: "800px", paddingTop: '5px'}}>
          <HorizontalNonLinearStepper currentstep={setActive} />
        </div>
        {/* <p>{console.log(step)}</p> */}
        <div
          style={{
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "rgb(90, 160, 240)",
            width: "fit-content",
            margin: 'auto'
          }}
         
        >
        {component}
          
        </div>
      </div>
    </div>
  );
}
