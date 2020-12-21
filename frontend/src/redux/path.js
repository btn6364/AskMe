export const URL=`http://127.0.0.1:8000`;
const PATH={
    quizz:{
        getAll:`${URL}/quizzes/`,
        getById: (id)=>`${URL}/quizzes/${id}/`
    },
    auth:{
        login:`${URL}/accounts/login`
    },
    user:{
        register:`${URL}/accounts/register`
    }
}

export default PATH;