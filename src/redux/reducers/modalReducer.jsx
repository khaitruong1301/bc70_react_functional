//rxslice
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    title: 'title default',
    contentComponent: <div>modal content default</div>,
    fnSubmitModal: (e) => {
        console.log('submit default');
    }
}

const modalReducer = createSlice({
  name: 'modalReducer',
  initialState,
  reducers: {
    setTitleContentModalAction: (state,action) => {
        const {payload} = action;
        state.title = payload.title;
        state.contentComponent = payload.contentComponent;
    },
    setFunctionSubmitModalAction: (state,action) => {
        state.fnSubmitModal = action.payload;
    }
  }
});
export const {setTitleContentModalAction,setFunctionSubmitModalAction} = modalReducer.actions

export default modalReducer.reducer