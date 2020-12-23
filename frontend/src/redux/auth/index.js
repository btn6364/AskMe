import { createSlice } from '@reduxjs/toolkit';
import PATH from '../path';

export const authSlice = createSlice({
    name:'authentication',
    initialState:{
        currentUser:{},
        token:'',
        isAuthed:false
    },
    reducers:{
        logout: (state)=>{
            state.currentUser={};
            state.token='';
            state.isAuthed=false;
            //clear token from cookie
        },
        setToken: (state,action)=>{
            state.token=action.payload;    
        },
        setCurrentUser: (state,action)=>{
            state.currentUser=action.payload;
        },
        setAuth:(state,action)=>{
            state.isAuthed=action.payload;
        }
    }
})

const {logout, setToken, setCurrentUser, setAuth} = authSlice.actions;

export {logout};

export const getCurrentUser = () => async(dispatch)=>{
    try{
        //let result= ;//fetch
        //let data = await result.json()
        //dispatch(setCurrentUser(data));
    }catch(err){
        console.log(err);
    }finally{}
};

export const authenticateToken = (token)=>async(dispatch)=>{
    try{
        //authenticate the token
        dispatch(setToken(token));
        //dispatch(getCurrentUser());
        dispatch(setAuth(true));
    }catch(err){
        dispatch(logout());
        console.log(err);
    }finally{}
}

export const login = (form)=>async(dispatch)=>{
    try{
        let result = await fetch(PATH.auth.login,{
            method:'POST',
            body:form
        });
        let data = await result.json();
        let token=data.token;
        dispatch(authenticateToken(token));
    }catch(err){
        dispatch(logout());
        console.log(err);
    }finally{}
}

export default authSlice.reducer;