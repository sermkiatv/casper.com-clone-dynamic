// ReferralModal.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { ReactComponent as ReferAFriend } from './assets/images/refer-a-friend.svg';
import ReferralBackgroundImage from './assets/images/mobile-mattress.jpg'; // Update with the path to your image
import './ReferralModal.css';

const ReferralModal = () => {
  const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
  <>
    <div style={{ cursor: 'pointer' }} onClick={handleShow}>
      <ReferAFriend alt="Refer a friend" className="me-2" />Refer a friend
    </div>

    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Body style={{
          display: 'flex',
          width: '800px',
          height: '600px',
          padding: '0'
        }}>
        <div style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          backgroundImage: `url(${ReferralBackgroundImage})`,
          backgroundSize: 'auto 100%',
          backgroundPosition: '-155px 0',
        }}>
          {/* Empty left column with transparent background */}
          <div style={{ flex: 1, backgroundColor: 'transparent' }}>
            {/* This div is intentionally left empty */}
          </div>
          {/* Right column containing the form and now the title */}
          <div style={{
            flex: 1,
            minHeight: '100%',
            width: '50%',
            padding: '0',
            margin: '0',
            backgroundColor: 'rgba(230, 230, 230)',
            textAlign: 'center'
          }}>
            <button onClick={handleClose} style={{
              position: 'absolute', // Position the button absolutely
              top: '0px', // Distance from the top
              right: '5px', // Distance from the right
              border: 'none', // Optional: Removes the border
              background: 'transparent', // Optional: Makes the background transparent
              cursor: 'pointer', // Changes the cursor on hover
              fontSize: '32px',
              fontWeight: '100',
              padding: '0',
              margin: '0',
              lineHeight: '0.8'
            }}>
              &times;
            </button>
            <div style={{
            flex: 1,
            height: '100%',
            width: '100%',
            padding: '10%',
            margin: '0',
            backgroundColor: 'rgba(230, 230, 230)',
            textAlign: 'center',
            alignContent: 'center',
            justifyContent: 'center'
          }}>
              <h1>Refer a Friend <br />to a Casper Mattress</h1>
              <p>Start spreading the snooze. Give a friend 25% off*, and you'll get a $75 Amazon gift card when they buy.</p>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label style={{
                    fontSize: '0.7rem',
                    fontWeight: '100'
                  }}>Enter your info to start sharing with friends:</Form.Label>
                  <Form.Control style={{
                    borderRadius: '2px',
                    padding: '10px'
                  }} className="mb-2" type="text" placeholder="What's your name?" />
                  <Form.Control style={{
                    borderRadius: '2px',
                    padding: '10px'
                  }} className="mb-2" type="text" placeholder="What's your email?" />
                  <Button style={{ width: '100%', backgroundColor: 'rgb(15, 26, 84)' }} className="mt-5" type="submit">Start Sharing</Button>
                  <p style={{ fontSize: '0.7rem', textAlign: 'center', marginTop: '2px', color: '#999999'}}>Have a question about referrals? <a href="#" style={{ color: 'rgb(15, 26, 84)' }}>Click here for help.</a></p>
                </Form.Group>
                {/* Continue with the rest of your form */}
              </Form>
              </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  </>
);
};

export default ReferralModal;