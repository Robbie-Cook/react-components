import React from "react";
import { Col, LayoutWrapper, Row, WebPage } from "../layout";
import { Heading } from "../utilities";

// Main Page component
export default function Sample(props) {
  return (
    <WebPage>
      <LayoutWrapper>
        <Heading type="h1">Sample</Heading>
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
      </LayoutWrapper>
    </WebPage>
  )
}
