import React,{useState, useEffect} from 'react';
import { Button, Form, Card, Container, Row, Col } from 'react-bootstrap';
import { getAllAsync } from '../../redux/quizz';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './index.scss';
const Home = ()=>{
    const [searchText,setSearchText] = useState("");
    const dispatch = useDispatch();
    const quizzes = useSelector(state=>state.quizz.all);
    
    const history = useHistory();
    useEffect(()=>{
        dispatch(getAllAsync());
    },[dispatch]);
    
    
    return(
        <div className="home">
            <Form inline className="home-search">
                <Form.Control 
                    value={searchText} 
                    type="text" 
                    placeholder="Search"
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}
                    />

                <Button>Search</Button>
            </Form>
            <Container fluid className="home__quizzes-container">
                <Row>
                {quizzes
                .filter((quizz)=>(quizz.title.toLowerCase().search(searchText.toLowerCase())!==-1))
                .map(
                (quizz)=><Quizz key={quizz.id} quizz={quizz} history={history}/>
                )}
                </Row>
            </Container>
        </div>
    )
};
export default Home;

const Quizz = ({quizz, history})=>{
    return (
    <Col xs={10} sm={5} md={4} xl={3} className="quizz-card">
        <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>{quizz.title}</Card.Title>
            <Button variant="primary"
                onClick={()=>{
                    history.push(`/quizzes/${quizz.id}`);
                }}
            >Go to Quizz</Button>
            </Card.Body>
            <Card.Footer className="quizz-card__footer">
                {quizz.topics.map((topic)=><div className="quizz-card__tag" key={topic.id}>{topic.topic}</div>)}
            </Card.Footer>
        </Card>
    </Col>
    )
}