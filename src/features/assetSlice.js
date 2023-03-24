//en el slice pongo el estado inicial de redux. aunque normalmente lo consumiría de api.
import {createSlice} from '@reduxjs/toolkit'
// import axios from 'axios';
// import api from '../../services/api';

// const assets= api.getAllAssets()
const initialState = {

assets : []
// {
//     id_asset: 1,
// name: "gamer-computer",
// type: "technology",
// code: "tec-com-sam",
// marca: "samsung",
// description: "core i5, 10 th gen",
// purchase_date: "2023-03-12",
// id_employee: null
// },
// { 
//  id_asset: 2,
// name: "speaker-Intellicense",
// type: "technology",
// code: "tec-sp-sam",
// marca: "samsung",
// description: "white colour, with high definition sound",
// purchase_date: "2023-03-12",
// id_employee: null
// },
// { 
//     id_asset: 3,
// name: "iMac",
// type: "technology",
// code: "tec-com-ima",
// marca: "Apple",
// description: "Computer with: 24-inch Retina 4.5K display.4480 x 2520 resolution at 218 pixels per inch with support for million colors.500 nit brightness.Wide color gamut (P3)True Tone technology.",
// purchase_date: "2023-03-12T03:00:00.000Z",
// id_employee: null
//     },
//     

}
       
export const assetSlice = createSlice({
name: 'assets',
initialState,
reducers: {
 addAsset: (state, action) => {
state.assets.push(action.payload)
//[...state, action.payload]
 },
 deleteAsset: (state, action) => {
   
    const assetFound=state.assets.find(asset=>asset.asset_id===action.payload)
    if(assetFound) {
        state.assets.splice(state.assets.indexOf(assetFound), 1)
    }
    
 },
 editAsset: (state, action) => {
     const foundIndex = state.assets.findIndex(asset => asset.asset_id === action.payload.asset_id);
     state.assets[foundIndex] = action.payload;
 },

},
});
export const {addAsset, deleteAsset, editAsset, }=assetSlice.actions;
export default assetSlice.reducer