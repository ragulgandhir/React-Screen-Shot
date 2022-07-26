import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Charts from "./components/Charts";
import ContentPage from "./components/Content";
import Sidebar from "./components/Menu";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col, Container } from "react-bootstrap";
import PDFContent from "./components/jspdf";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Container> */}
      {/* <Row className="landing">
      <Col>
          <Sidebar/>
        </Col>
        <Col style ={{marginLeft:"-40px", marginRight:"50px" }}>
          <Charts />
        </Col>
        <Col style ={{width:"80px"}}>
          <ContentPage />
        </Col>
      </Row> */}
      {/* </Container> */}
    <PDFContent />
    </div>
  );
}

export default App;
