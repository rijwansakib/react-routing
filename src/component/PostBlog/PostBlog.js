 import { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';

const PostBlog = (props) => {
    const{name,des,date,Featured}=props.post;
    const [show, setShow] = useState(false);
    return (
        <div className="mb-5">
            <Card className="text-center">
                <Card.Header>{Featured}</Card.Header>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                     {des.slice(0,250)}
                    </Card.Text>
                {/* read bolg modal */}

                    <Button variant="primary" onClick={() => setShow(true)}> Read More</Button>
            <Modal 
                        show={show}
                        onHide={() => setShow(false)}
                        dialogClassName="modal-90w"
                        size="xl"
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            {name}
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <p>
                            {des}
                        </p>
                        </Modal.Body>
                    </Modal> 

                </Card.Body>
                <Card.Footer className="text-muted">{date}</Card.Footer>
            </Card>
            
        </div>
    );
};

export default PostBlog;