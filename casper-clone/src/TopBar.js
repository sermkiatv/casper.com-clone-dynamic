import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReferralModal from './ReferralModal';

import { ReactComponent as FindAStore } from './assets/images/find-a-store.svg';

const TopBar = () => {
  return (
    <nav className="bg-dark text-white py-3">
      <Container fluid>
        <Row className="align-items-center px-1">
          <Col xs={0} md={4} className="d-none d-md-block text-start smaller">
            <ReferralModal />
          </Col>
          <Col xs={12} md={4} className="text-center small">
            Sleep Specialists on call. <Link to="/help" className="text-white">Contact us.</Link>
          </Col>
          <Col xs={0} md={4} className="d-none d-md-block text-end smaller">
            <FindAStore alt="Find a store" className="me-2" /> Find a store
          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default TopBar;