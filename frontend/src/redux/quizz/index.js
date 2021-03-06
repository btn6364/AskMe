import { createSlice } from '@reduxjs/toolkit';
import PATH from '../path';

export const quizzSlice = createSlice({
    name:'quizz',
    initialState:{
        all:[],
        current:{}
    },
    reducers:{
        getAll: (state,action)=>{
            state.all=action.payload
        },
        getById: (state,action)=>{
            state.current=action.payload
        }
    }
});

const { getAll, getById } = quizzSlice.actions;

export const getAllAsync = () => async(dispatch)=>{
    try{
        let result = await fetch(PATH.quizz.getAll);
        let data = await result.json();
        dispatch(getAll(data));
    }catch(err){
        console.log(err);
    }finally{}
};

export const getByIdAsync = (id) =>async (dispatch)=>{
    try{
        let result = await fetch(PATH.quizz.getById(id));
        let data = await result.json();
        dispatch(getById(data));
    }catch(err){
        console.log(err);
    }finally{}
};

export default quizzSlice.reducer;