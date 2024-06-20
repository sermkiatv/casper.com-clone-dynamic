// ReferralModal.js
import React, { useState } from 'react';
import { Container, Row, Col,Modal, Button, Form } from 'react-bootstrap';
import { ReactComponent as ReferAFriend } from './assets/images/refer-a-friend.svg';
import ReferralBackgroundImage from './assets/images/mobile-mattress.jpg'; // Update with the path to your image
import './ReferralModal.css';
import styles from './ReferralModal.module.css'; // Import CSS module

const ReferralModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className={styles.referButton} onClick={handleShow}>
        <ReferAFriend alt="Refer a friend" className="me-2" />Refer a friend
      </div>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Body className={styles.modalBody}>
          <Container fluid className={styles.modalContainer}>
            
            <Row className={styles.modalRow}>
              <Col md={6} className={styles.leftCol}>
                {/* This column is intentionally left empty */}
              </Col>
              <Col md={6} className={styles.rightCol}>
                <Container className={styles.rightColContainer}>
                  <Row className={styles.rightColHeader}>
                    <button onClick={handleClose} className={styles.closeButton}>&times;</button>
                  </Row>
                  <Row className={styles.formContainer}>
                    <h1>Refer a Friend <br />to a Casper Mattress</h1>
                    <p>Start spreading the snooze. Give a friend 25% off*, and you'll get a $75 Amazon gift card when they buy.</p>
                    <Form>
                      <Form.Group controlId="formName">
                        <Form.Label>Enter your info to start sharing with friends:</Form.Label>
                        <Form.Control className="mb-2" type="text" placeholder="What's your name?" />
                        <Form.Control className="mb-3" type="text" placeholder="What's your email?" />
                        <Button variant="primary" type="submit" className={styles.shareButton}>Start Sharing</Button>
                      </Form.Group>
                    </Form>
                    <p>Have a question about referrals? <a href="#">Click here for help.</a></p>
                  </Row>
                  <Row className={styles.rightColFooter}>
                    <Col className="text-start">Terms</Col>
                    <Col className="text-end">friendbuy</Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ReferralModal;