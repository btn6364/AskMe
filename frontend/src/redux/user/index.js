import {createSlice} from '@reduxjs/toolkit';
import PATH from '../path';

export const userSlice = createSlice({
    name:'user',
    initialState:{
        current:{},
        creatingStatus:false
    },
    reducers:{
        create:(state)=>{
            state.creatingStatus=true;
        },
        resetStatus:(state)=>{
            state.creatingStatus=false;
        }
    },
    
});

const {create, resetStatus} = userSlice.actions;
export {resetStatus};
export const register = (user) => async(dispatch)=>{
    try{
        let result = await fetch(PATH.user.register,{
            method:'POST',
            body:user
        });
        if (result.status===201)//ok
            dispatch(create());
        else throw new Error('Register Fail');
    }catch(err){
        console.log(err);
    }finally{}
}

export default userSlice.reducer;