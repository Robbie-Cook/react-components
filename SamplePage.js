import React, { Component } from 'react';
import Page from '../components/Page';
import { Heading } from '../components/Typography';
import { Col, Container as LayoutWrapper, Row } from '../components/Wrappers';

// Main Page component
class Sample extends Component {
    render() {
      return (
  
        <Page>
          <LayoutWrapper>
            <Heading type="h1">Sample</Heading>
            <Row>
              <Col>
                
              </Col>
              <Col>

              </Col>
            </Row>
          </LayoutWrapper>
        </Page>
      );
    }
  }
  
  export default Sample;
  