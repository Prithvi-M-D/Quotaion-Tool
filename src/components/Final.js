import { useSelector } from "react-redux";
// import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { Button } from "@mui/material";

const Final = () => {
  // const clientdetails = useSelector((state)=> state.client.clientdetails);
  //   const weddingdetails = useSelector((state)=> state.client.weddingdetails);
  const fooddetails = useSelector((state) => state.client.fooddetails);
  const decordetails = useSelector((state) => state.client.decordetails);
  const photographydetails = useSelector(
    (state) => state.client.photographydetails
  );
  let receptionfinal = null;
  let muhurtafinal = null;
  let mehendifinal = null;

  const downloadpdf = () => {
    //RECEPTION
    fooddetails.reception
      ? (receptionfinal = receptionfinal + fooddetails.countrecep * 200)
      : (receptionfinal = receptionfinal + 0);
    photographydetails.receptionnormal
      ? (receptionfinal = receptionfinal + 20000)
      : (receptionfinal = receptionfinal + 0);
    photographydetails.receptioncandid
      ? (receptionfinal = receptionfinal + 5000)
      : (receptionfinal = receptionfinal + 0);

    // eslint-disable-next-line no-unused-expressions
    decordetails.reception
      ? () => {
          switch (fooddetails.countrecep) {
            case 500:
              return (receptionfinal = receptionfinal + 10000);
            case 1000:
              return (receptionfinal = receptionfinal + 16000);
            case 1500:
              return (receptionfinal = receptionfinal + 22000);
            case 2000:
              return (receptionfinal = receptionfinal + 28000);
            default:
              return null;
          }
        }
      : (receptionfinal = receptionfinal + 0);
    console.log(receptionfinal);
    //--------------------------------------------------------------------------------------------

    //MUHURTA
    fooddetails.muhurta
      ? (muhurtafinal = muhurtafinal + fooddetails.countrecep * 150)
      : (muhurtafinal = muhurtafinal + 0);

    photographydetails.muhurtanormal
      ? (muhurtafinal = muhurtafinal + 20000)
      : (muhurtafinal = muhurtafinal + 0);
    photographydetails.muhurtacandid
      ? (muhurtafinal = muhurtafinal + 5000)
      : (muhurtafinal = muhurtafinal + 0);
    // eslint-disable-next-line no-unused-expressions
    decordetails.muhurta
      ? () => {
          switch (fooddetails.countrecep) {
            case 500:
              return (muhurtafinal = muhurtafinal + 8000);
            case 1000:
              return (muhurtafinal = muhurtafinal + 10000);
            case 1500:
              return (muhurtafinal = muhurtafinal + 12000);
            case 2000:
              return (muhurtafinal = muhurtafinal + 15000);
            default:
              return null;
          }
        }
      : (muhurtafinal = muhurtafinal + 0);
    console.log(muhurtafinal);
    //--------------------------------------------------------------------------------------------

    //MEHENDI
    fooddetails.mehendi
      ? (mehendifinal = mehendifinal + fooddetails.countrecep * 120)
      : (mehendifinal = mehendifinal + 0);

    photographydetails.mehendinormal
      ? (mehendifinal = mehendifinal + 20000)
      : (mehendifinal = mehendifinal + 0);
    photographydetails.mehendicandid
      ? (mehendifinal = mehendifinal + 5000)
      : (mehendifinal = mehendifinal + 0);
    // eslint-disable-next-line no-unused-expressions
    decordetails.mehendi
      ? () => {
          switch (fooddetails.countrecep) {
            case 500:
              return (mehendifinal = mehendifinal + 10000);
            case 1000:
              return (mehendifinal = mehendifinal + 16000);
            case 1500:
              return (mehendifinal = mehendifinal + 22000);
            case 2000:
              return (mehendifinal = mehendifinal + 28000);
            default:
              return null;
          }
        }
      : (mehendifinal = mehendifinal + 0);
    console.log(mehendifinal);
  };
  return <Button onClick={downloadpdf}>Download</Button>;
};

export default Final;
