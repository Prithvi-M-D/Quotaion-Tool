import { createSlice } from '@reduxjs/toolkit';

const vendorSlice = createSlice({
    name:'vendor',
    initialState: {
        name:'',
        email:'',
        address:'',
        number:''
    },
    reducers:{
        updateVendor(state, action){
            
            state.name=action.payload.name;
            state.email=action.payload.email;
            state.address=action.payload.address;
            state.number=action.payload.number;
            
        }
    }
});
export const vendorActions= vendorSlice.actions;
export default vendorSlice;