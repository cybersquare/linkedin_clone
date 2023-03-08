import { createSlice } from '@reduxjs/toolkit';

import { createUserWithEmailAndPassword} from "firebase/auth";
import fire from "../firebase";

const auth = fire.auth;
const email = 'athira@baabte.com';
const password = '123456';


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user:null
    },
    reducers:{
        login:(state, action)=>{
            state.user= action.payload;
        },
        logout:(state, action)=>{
            state.user=null;
        },
        signup:(state, action)=>{
            console.log("signup");
            console.log(state);
            console.log(action);
            createUserWithEmailAndPassword(auth,email,password);
        },
    }
})

export const {login,logout,signup} = userSlice.actions;

export const selectUser = state => state.user.user;

export default userSlice.reducer;







// login:(state, action)=>{

// },