import { configureStore } from "@reduxjs/toolkit";
import  BookSlice  from "../features/BookStoreSlice";
const store = configureStore({
    reducer:{
    booksStore: BookSlice
    }
})

export default store;