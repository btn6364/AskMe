import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getByIdAsync } from '../../redux/quizz';
import { Card, ListGroup, Button } from 'react-bootstrap';
const QuizzPage = ()=>{
    const {id} = useParams();
    const [answers,setAnswer]=useState([]);
    const dispatch = useDispatch();
    
    const quizz = useSelector(state=>state.quizz.current);
    const selectFunction = (questionId) =>{
        return (answerId)=>{
            setAnswer(prev=>{
                let newAnswers=[...prev];
                newAnswers[questionId]=answerId;
                return newAnswers;
            });
        }
    }
    const onSubmit=()=>{
        //do something with answers
    }
    useEffect(()=>{
        dispatch(getByIdAsync(id));
    },[dispatch,id]);
    useEffect(()=>{
        console.log(quizz);
        setAnswer(Array(quizz.questions?.length ?? 0).fill(-1));
        
    },[quizz]);
    return(
        <div>
            <h1>{quizz.title||""}</h1>
            {
                quizz.questions?.map(
                    (question)=><Question 
                    selected={answers[question.id]}
                    selectFunction={selectFunction(question.id)}
                    question={question} key={question.id}/>)
            }
            <Button onClick={onSubmit()}>Submit</Button>
        </div>
    )
};
export default QuizzPage;

const Question=({question, selected, selectFunction})=>{
    return(
    <Card>
        <Card.Header>{question.content}</Card.Header>
        <Card.Body>
            <Card.Title>Answers:</Card.Title>
            <ListGroup className="answers">
            {question.choices.map(
                choice=>
                <ListGroup.Item 
                variant={(choice.id===selected)?"dark":"light"} 
                onClick={()=>{selectFunction(choice.id)}}
                key={choice.id}>{choice.answer}</ListGroup.Item>
            )}
            
            </ListGroup>
            <Button onClick={()=>{selectFunction(-1)}}>Clear</Button>
        </Card.Body>
    </Card>
    )
}