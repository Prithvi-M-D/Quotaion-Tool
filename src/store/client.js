import { createSlice } from "@reduxjs/toolkit";

const clientSlice = createSlice({
  name: "client",
  initialState: {
    clientdetails: [{ cname: "", caddress: "", cphone: "" }],
    weddingdetails: [
      { venue: "", reception: "", muhurta: "", mehendi: "" },
    ],
    fooddetails: [
      {
        reception: false,
        muhurta: false,
        mehendi: false,
        countrecep: null,
        countmehendi: null,
        countmuhurta: null,
      },
    ],
    decordetails: [{ reception: false, muhurta: false, mehendi: false }],
    photographydetails: [
      {
        reception: false,
        muhurta: false,
        mehendi: false,
        receptioncandid: false,
        receptionnormal: false,
        mehendicandid: false,
        mehendinormal: false,
        muhurtacandid: false,
        muhurtanormal: false,
      },
    ],

    final: [
      {
        receptiontotal: null,
      },
    ],
  },
  reducers: {
    clientDetail(state, action) {
      state.clientdetails = {
        cname: action.payload.cname,
        address: action.payload.caddress,
        phone: action.payload.cphone,
      };
    },

    weddingDetail(state, action) {
      state.weddingdetails = {
        venue: action.payload.venue,
        reception: action.payload.reception,
        muhurta: action.payload.muhurta,
        mehendi: action.payload.Mehendi,
      };
    },

    foodDetail(state, action) {
      state.fooddetails = {
        reception: action.payload.reception,
        muhurta: action.payload.muhurta,
        mehendi: action.payload.mehendi,
        countmehendi: action.payload.countmehendi,
        countrecep: action.payload.countrecep,
        countmuhurta: action.payload.countmuhurta,
      };
    },

    decorDetail(state, action) {
      state.decordetails = {
        reception: action.payload.reception,
        muhurta: action.payload.muhurta,
        mehendi: action.payload.mehendi,
      };
    },

    photographyDetail(state, action) {
      state.photographydetails = {
        reception: action.payload.reception,
        muhurta: action.payload.muhurta,
        mehendi: action.payload.mehendi,

        receptionnormal: action.payload.receptionnormal,
        receptioncandid: action.payload.receptioncandid,
        mehendicandid: action.payload.mehendicandid,

        mehendinormal: action.payload.mehendinormal,
        muhurtacandid: action.payload.muhurtacandid,
        muhurtanormal: action.payload.muhurtanormal,
      };
    },

  },
});
export default clientSlice;

export const clientActions = clientSlice.actions;
