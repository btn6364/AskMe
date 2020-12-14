import { createSlice } from '@reduxjs/toolkit';
const URL=`http://127.0.0.1:8000/quizzes/`;
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
        let result = await fetch(URL);
        console.log(result);
        let data = await result.json();
        dispatch(getAll(data));
    }catch(err){
        console.log(err);
    }finally{}
};

export const getByIdAsync = (id) =>async (dispatch)=>{
    try{
        let result = await fetch(`${URL}${id}/`);
        console.log(result);
        let data = await result.json();
        dispatch(getById(data));
    }catch(err){
        console.log(err);
    }finally{}
};

export default quizzSlice.reducer;