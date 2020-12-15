import React,{useState, useEffect} from 'react';
import { Button, Form, Card, Container, Row, Col } from 'react-bootstrap';
import { getAllAsync } from '../../redux/quizz';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Home = ()=>{
    const [searchText,setSearchText] = useState("");
    const dispatch = useDispatch();
    const quizzes = useSelector(state=>state.quizz.all);
    
    const history = useHistory();
    useEffect(()=>{
        dispatch(getAllAsync());
    },[dispatch]);
    
    
    return(
        <div>
            <Form inline>
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
            <Container fluid>
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
    <Col xs={10} sm={5} md={4} xl={3}>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Title>{quizz.title}</Card.Title>
            <Button variant="primary"
                onClick={()=>{
                    history.push(`/quizzes/${quizz.id}`);
                }}
            >Go to Quizz</Button>
            </Card.Body>
            <Card.Footer>
                Footer
            </Card.Footer>
        </Card>
    </Col>
    )
}