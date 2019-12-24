import React from "react";
import { Row, Col } from "antd";
import "./index.less";
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span="6" className="logo">
            <img src="/assets/logo-ant.svg" alt="" />
            <span>IMooc 通用管理系统</span>
          </Col>
          <Col span="24">
            <span>欢迎</span>
            <span>退出</span>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span="4" className="breadcrumb-title">
            {"首页"}
          </Col>
          <Col span="20" className="weather">
            <span className="date">{}</span>
            <span className="weather-img">
              <img alt="" />
            </span>
            <span className="weather-detail">{}</span>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
