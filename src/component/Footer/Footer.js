import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer pt-2 pb-2 mt-5">
            <h1>XYZ.COM</h1>
            <ListGroup horizontal className="w-25 mx-auto mb-5">
                <ListGroup.Item>Course</ListGroup.Item>
                <ListGroup.Item>Blog</ListGroup.Item>
                <ListGroup.Item>Auout</ListGroup.Item>
                <ListGroup.Item>Contact us!</ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default Footer;