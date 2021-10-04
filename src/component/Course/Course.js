import React from 'react';
import { Button, Card, ListGroup} from 'react-bootstrap';
import './Course.css'

const Course = (props) => {
    const {name,start,des,img,price}=props.course;
    return (
        <div className="course-card">
            <Card style={{ width: '18rem'}}>
                <Card.Img style={{height:'15rem'}} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {des}
                    </Card.Text>
            
                    <ListGroup.Item>Class start:{start}</ListGroup.Item>
                    <ListGroup.Item>Price:{price}</ListGroup.Item>
                </Card.Body>
                <Button className="mt-2" variant="primary">ENROLE</Button>
            </Card>

            
        </div>
    );
};

export default Course;