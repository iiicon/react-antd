import "./style/common.less";
import React, { Component } from "react";
import { Row, Col } from "antd";
import NavLeft from "./components/NavLeft";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default class Admin extends Component {
  render() {
    return (
      <Row className="container">
        <Col span="4" className="nav-left">
          <NavLeft />
        </Col>
        <Col span="20" className="main">
          <Header />
          <Row className="content"></Row>
          <Footer />
        </Col>
      </Row>
    );
  }
}
