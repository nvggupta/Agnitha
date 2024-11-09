import { createSlice, current} from "@reduxjs/toolkit";

const initialState = [];

export const BookSlice = createSlice({
    name: "booksStore",
    initialState,
    reducers:{
       addData : (state , action)=>{
        console.log(action.payload)
            const  payloaddata  = {
            query : action.payload.QueryName,
            data : [...action.payload.data]
        }
            state[0] = {...payloaddata}
            console.log(current(state));
       }
    }
})

export const {addData} = BookSlice.actions;

export default BookSlice.reducer;