import { createSlice, current} from "@reduxjs/toolkit";

const initialState = [
    [],[]
];

export const BookSlice = createSlice({
    name: "booksStore",
    initialState,
    reducers:{
       addData : (state , action)=>{
            const  payloaddata  = {
            query : action.payload.QueryName,
            data : [...action.payload.data]
        }
            state[0] = {...payloaddata}
            console.log(current(state));
       },
       addToFavourite : (state , action)=>{
          
           state[1] = [...current(state[1]) , {...action.payload}]; 
       },
       removeFromFavorite: (state , action)=>{
        const newFavorite = state[1].filter(elem=>elem.key !== action.payload);
        state[1] = [...newFavorite];
       },
       addCarauselData : (state , action)=>{
    
            const filterData = action.payload.filter(elem=>elem.ratings_average === 5||elem.ratings_average===4);
            state[2] = [...filterData];
        
       }
    }
})

export const {addData,addToFavourite,removeFromFavorite,addCarauselData} = BookSlice.actions;

export default BookSlice.reducer;