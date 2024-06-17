import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ReactComponent as ReferAFriend } from './assets/images/refer-a-friend.svg';
import { ReactComponent as FindAStore } from './assets/images/find-a-store.svg';

const TopBarCustomStyle = () => {
  return (
    <nav style={{ backgroundColor: 'rgb(10, 32, 101)', color: 'white', height: '3rem', fontSize: '0.8rem', lineHeight: '3rem'    }}>
      <Container fluid>
        <Row className="align-items-center">
          <Col xs={0} md={4} className="d-none d-md-block text-start">
            <ReferAFriend alt="Refer a friend" /> Refer a friend
          </Col>
          <Col xs={12} md={4} className="text-center">
            Sleep Specialists on call. <Link to="/help">Contact us.</Link>
          </Col>
          <Col xs={0} md={4} className="d-none d-md-block text-end">
            <FindAStore alt="Find a store" /> Find a store
          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default TopBar;