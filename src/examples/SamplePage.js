import React from "react";
import { Col, LayoutWrapper, Row, Page } from "../layout";
import { Heading } from "../utilities";

// Main Page component
export default function Sample(props) {
  return (
    <Page>
      <LayoutWrapper>
        <Heading type="h1">Sample</Heading>
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
      </LayoutWrapper>
    </Page>
  )
}
