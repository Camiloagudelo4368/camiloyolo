import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import AboutUs from "../components/AboutUs"
import AboutNav from "../components/AboutNav"
// import API from "../utils/API";

class About extends Component {
  render() {
    return (
      <div>
        <AboutNav />
        <Container>
          {/* <AboutUs></AboutUs> */}
        </Container>
      </div>


    );
  }
}

export default About;
