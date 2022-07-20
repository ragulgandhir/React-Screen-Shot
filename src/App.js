import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Charts from "./components/Charts";
import Download from "./components/Content";
import Sidebar from "./components/Menu";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col, Container } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Container> */}
      <Row className="landing">
      <Col>
          <Sidebar/>
        </Col>
        <Col style ={{marginLeft:"-80px"}}>
          <Charts />
        </Col>
        <Col style ={{marginLeft:"50px"}}>
          <Download />
        </Col>
      </Row>
      {/* </Container> */}
    </div>
  );
}

export default App;
