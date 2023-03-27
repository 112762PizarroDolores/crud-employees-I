//en el slice pongo el estado inicial de redux. aunque normalmente lo consumiría de api.
import {createSlice} from '@reduxjs/toolkit'

const initialState = {

assets : []

}
       
export const assetSlice = createSlice({
name: 'assets',
initialState,
reducers: {
 addAsset: (state, action) => {
state.assets.push(action.payload)

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