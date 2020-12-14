import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getByIdAsync } from '../../redux/quizz';
import { Card, ListGroup } from 'react-bootstrap';
const QuizzPage = ()=>{
    const {id} = useParams();
    const dispatch = useDispatch();
    const quizz = useSelector(state=>state.quizz.current);
    useEffect(()=>{
        dispatch(getByIdAsync(id));
    },[dispatch,id]);
    useEffect(()=>{
        console.log(quizz);
    },[quizz]);
    return(
        <div>
            <h1>{quizz.title||""}</h1>
            {
                quizz.questions?.map(
                    (question,idx)=><Question question={question} key={idx}/>)
            }
        </div>
    )
};
export default QuizzPage;

const Question=({question})=>{
    return(
    <Card>
        <Card.Header>{question}</Card.Header>
        <Card.Body>
            <Card.Title>Answers:</Card.Title>
            <ListGroup className="answers">
                <ListGroup.Item>Answer 1</ListGroup.Item>
                <ListGroup.Item>Answer 2</ListGroup.Item>
                <ListGroup.Item>Answer 3</ListGroup.Item>
                <ListGroup.Item>Answer 4</ListGroup.Item>
            </ListGroup>
        </Card.Body>
    </Card>
    )
}